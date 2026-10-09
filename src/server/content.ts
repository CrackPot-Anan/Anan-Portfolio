import { promises as fs } from "node:fs";
import path from "node:path";

import {
  hobbies as seedHobbies,
  stories as seedStories,
  travels as seedTravels,
} from "@/components/site/data";
import type {
  DeleteResult,
  Hobby,
  HobbyInput,
  SaveResult,
  Story,
  StoryInput,
  Travel,
  TravelInput,
  UpdateHobbyInput,
  UpdateStoryInput,
  UpdateTravelInput,
} from "@/lib/content";
import {
  dbEnabled,
  deleteCollectionItem,
  readCollection,
  writeCollectionItem,
} from "@/server/db";
import { readAdminSession } from "@/server/session";

type Collection = "hobbies" | "stories" | "travel";

const MIN_NAME = 3;
const MAX_NAME = 80;
const MIN_TEXT = 10;
const MAX_TEXT = 400;
const MAX_DESCRIPTION = 800;
const MAX_URL = 500;
const MAX_ALT = 200;

function contentFile(collection: Collection): string {
  return path.join(process.cwd(), "data", `${collection}.json`);
}

function slugify(input: string): string {
  const slug = input
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/g, "");
  return slug.length > 0 ? slug : "item";
}

async function readFileItems<T>(collection: Collection): Promise<T[] | null> {
  try {
    const raw = await fs.readFile(contentFile(collection), "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}

async function writeFileItems(
  collection: Collection,
  items: unknown[],
): Promise<void> {
  const file = contentFile(collection);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, `${JSON.stringify(items, null, 2)}\n`, "utf8");
}

async function readAll<T extends { id: string }>(
  collection: Collection,
  seeds: T[],
): Promise<T[]> {
  if (dbEnabled()) {
    const rows = await readCollection(collection);
    if (rows) {
      if (rows.length === 0 && seeds.length > 0) {
        for (const seed of seeds) {
          await writeCollectionItem(collection, seed.id, seed);
        }
        return seeds;
      }
      return rows as T[];
    }
    console.error(
      `[content] falling back to the local file for ${collection}, database unavailable`,
    );
  }

  const fromFile = await readFileItems<T>(collection);
  if (fromFile) {
    if (fromFile.length === 0 && seeds.length > 0) {
      await writeFileItems(collection, seeds);
      return seeds;
    }
    return fromFile;
  }
  await writeFileItems(collection, seeds);
  return seeds;
}

async function saveItem<T extends { id: string }>(
  collection: Collection,
  item: T,
): Promise<string | null> {
  if (dbEnabled()) {
    return (await writeCollectionItem(collection, item.id, item))
      ? null
      : "Couldn't save to the database. Check POSTGRES_URL / DATABASE_URL.";
  }
  const current = (await readFileItems<T>(collection)) ?? [];
  const next = current.some((entry) => entry.id === item.id)
    ? current.map((entry) => (entry.id === item.id ? item : entry))
    : [...current, item];
  await writeFileItems(collection, next);
  return null;
}

async function removeItem(
  collection: Collection,
  id: string,
): Promise<string | null> {
  if (dbEnabled()) {
    return (await deleteCollectionItem(collection, id))
      ? null
      : "Couldn't delete from the database. Try again later.";
  }
  const current = (await readFileItems<{ id: string }>(collection)) ?? [];
  await writeFileItems(
    collection,
    current.filter((entry) => entry.id !== id),
  );
  return null;
}

async function requireSession(): Promise<string | null> {
  const session = await readAdminSession();
  return session
    ? null
    : "You are not signed in any more. Log in again to make changes.";
}

function uniqueId<T extends { id: string }>(
  existing: T[],
  base: string,
): string {
  let id = base;
  let suffix = 2;
  while (existing.some((entry) => entry.id === id)) {
    id = `${base}-${suffix}`;
    suffix += 1;
  }
  return id;
}

export async function listHobbies(): Promise<Hobby[]> {
  return readAll("hobbies", seedHobbies);
}

export async function listStories(): Promise<Story[]> {
  return readAll("stories", seedStories);
}

export async function listTravels(): Promise<Travel[]> {
  return readAll("travel", seedTravels);
}

export async function getHobby(id: string): Promise<Hobby | null> {
  const cleanId = String(id ?? "").trim();
  if (!cleanId) return null;
  const hobbies = await listHobbies();
  return hobbies.find((hobby) => hobby.id === cleanId) ?? null;
}

export async function getStory(id: string): Promise<Story | null> {
  const cleanId = String(id ?? "").trim();
  if (!cleanId) return null;
  const stories = await listStories();
  return stories.find((story) => story.id === cleanId) ?? null;
}

export async function getTravel(id: string): Promise<Travel | null> {
  const cleanId = String(id ?? "").trim();
  if (!cleanId) return null;
  const travels = await listTravels();
  return travels.find((travel) => travel.id === cleanId) ?? null;
}

function normalizeName(value: string, label: string): string {
  const name = value.trim();
  if (name.length < MIN_NAME) {
    throw new Error(`${label} needs at least ${MIN_NAME} characters.`);
  }
  if (name.length > MAX_NAME) {
    throw new Error(`${label} must stay under ${MAX_NAME} characters.`);
  }
  return name;
}

function normalizeText(value: string, label: string): string {
  const text = value.trim();
  if (text.length < MIN_TEXT) {
    throw new Error(`${label} needs at least ${MIN_TEXT} characters.`);
  }
  if (text.length > MAX_TEXT) {
    throw new Error(`${label} must stay under ${MAX_TEXT} characters.`);
  }
  return text;
}

function normalizeBody(value: string): string {
  return String(value ?? "").trim();
}

function normalizeDescription(value: string): string {
  const text = String(value ?? "").trim();
  if (text.length < MIN_TEXT) {
    throw new Error(`Description needs at least ${MIN_TEXT} characters.`);
  }
  if (text.length > MAX_DESCRIPTION) {
    throw new Error(
      `Description must stay under ${MAX_DESCRIPTION} characters.`,
    );
  }
  return text;
}

function normalizeUrl(value: string): string {
  const url = String(value ?? "").trim();
  if (url.length === 0) throw new Error("Add a URL to link this item to.");
  if (url.length > MAX_URL) {
    throw new Error(`URL must stay under ${MAX_URL} characters.`);
  }
  if (!/^https?:\/\//i.test(url) && !url.startsWith("/")) {
    throw new Error("URL must start with http://, https://, or /.");
  }
  return url;
}

function normalizeAlt(value: string | undefined): string | undefined {
  const alt = String(value ?? "").trim();
  if (!alt) return undefined;
  return alt.slice(0, MAX_ALT);
}

export async function createHobby(input: HobbyInput): Promise<SaveResult> {
  const authError = await requireSession();
  if (authError) return { ok: false, error: authError };
  try {
    const name = normalizeName(input.name, "Name");
    const detail = normalizeText(input.detail, "Detail");
    const body = normalizeBody(input.body);
    const existing = await listHobbies();
    const id = uniqueId(existing, slugify(name));
    const hobby: Hobby = { id, name, detail, body };
    const error = await saveItem("hobbies", hobby);
    if (error) return { ok: false, error };
    return { ok: true, id };
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error ? error.message : "Couldn't save the hobby.",
    };
  }
}

export async function updateHobby(
  input: UpdateHobbyInput,
): Promise<SaveResult> {
  const authError = await requireSession();
  if (authError) return { ok: false, error: authError };
  const id = String(input.id ?? "").trim();
  if (!id) return { ok: false, error: "That hobby could not be found." };
  try {
    const existing = await listHobbies();
    if (!existing.some((hobby) => hobby.id === id)) {
      return { ok: false, error: "That hobby no longer exists." };
    }
    const name = normalizeName(input.name, "Name");
    const detail = normalizeText(input.detail, "Detail");
    const body = normalizeBody(input.body);
    const error = await saveItem("hobbies", { id, name, detail, body });
    if (error) return { ok: false, error };
    return { ok: true, id };
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error ? error.message : "Couldn't save the hobby.",
    };
  }
}

export async function deleteHobby(id: string): Promise<DeleteResult> {
  const authError = await requireSession();
  if (authError) return { ok: false, error: authError };
  const cleanId = String(id ?? "").trim();
  if (!cleanId) return { ok: false, error: "That hobby could not be found." };
  const existing = await listHobbies();
  if (!existing.some((hobby) => hobby.id === cleanId)) {
    return { ok: false, error: "That hobby no longer exists." };
  }
  const error = await removeItem("hobbies", cleanId);
  return error ? { ok: false, error } : { ok: true };
}

export async function createStory(input: StoryInput): Promise<SaveResult> {
  const authError = await requireSession();
  if (authError) return { ok: false, error: authError };
  try {
    const title = normalizeName(input.title, "Title");
    const excerpt = normalizeText(input.excerpt, "Excerpt");
    const body = normalizeBody(input.body);
    const existing = await listStories();
    const id = uniqueId(existing, slugify(title));
    const story: Story = { id, title, excerpt, body };
    const error = await saveItem("stories", story);
    if (error) return { ok: false, error };
    return { ok: true, id };
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error ? error.message : "Couldn't save the story.",
    };
  }
}

export async function updateStory(
  input: UpdateStoryInput,
): Promise<SaveResult> {
  const authError = await requireSession();
  if (authError) return { ok: false, error: authError };
  const id = String(input.id ?? "").trim();
  if (!id) return { ok: false, error: "That story could not be found." };
  try {
    const existing = await listStories();
    if (!existing.some((story) => story.id === id)) {
      return { ok: false, error: "That story no longer exists." };
    }
    const title = normalizeName(input.title, "Title");
    const excerpt = normalizeText(input.excerpt, "Excerpt");
    const body = normalizeBody(input.body);
    const error = await saveItem("stories", { id, title, excerpt, body });
    if (error) return { ok: false, error };
    return { ok: true, id };
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error ? error.message : "Couldn't save the story.",
    };
  }
}

export async function deleteStory(id: string): Promise<DeleteResult> {
  const authError = await requireSession();
  if (authError) return { ok: false, error: authError };
  const cleanId = String(id ?? "").trim();
  if (!cleanId) return { ok: false, error: "That story could not be found." };
  const existing = await listStories();
  if (!existing.some((story) => story.id === cleanId)) {
    return { ok: false, error: "That story no longer exists." };
  }
  const error = await removeItem("stories", cleanId);
  return error ? { ok: false, error } : { ok: true };
}

export async function createTravel(input: TravelInput): Promise<SaveResult> {
  const authError = await requireSession();
  if (authError) return { ok: false, error: authError };
  try {
    const title = normalizeName(input.title, "Title");
    const description = normalizeDescription(input.description);
    const url = normalizeUrl(input.url);
    const image = String(input.image ?? "").trim() || undefined;
    const alt = normalizeAlt(input.alt);
    const existing = await listTravels();
    const id = uniqueId(existing, slugify(title));
    const travel: Travel = { id, title, description, url, image, alt };
    const error = await saveItem("travel", travel);
    if (error) return { ok: false, error };
    return { ok: true, id };
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : "Couldn't save the travel item.",
    };
  }
}

export async function updateTravel(
  input: UpdateTravelInput,
): Promise<SaveResult> {
  const authError = await requireSession();
  if (authError) return { ok: false, error: authError };
  const id = String(input.id ?? "").trim();
  if (!id) return { ok: false, error: "That travel item could not be found." };
  try {
    const existing = await listTravels();
    if (!existing.some((travel) => travel.id === id)) {
      return { ok: false, error: "That travel item no longer exists." };
    }
    const title = normalizeName(input.title, "Title");
    const description = normalizeDescription(input.description);
    const url = normalizeUrl(input.url);
    const image = String(input.image ?? "").trim() || undefined;
    const alt = normalizeAlt(input.alt);
    const error = await saveItem("travel", {
      id,
      title,
      description,
      url,
      image,
      alt,
    });
    if (error) return { ok: false, error };
    return { ok: true, id };
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : "Couldn't save the travel item.",
    };
  }
}

export async function deleteTravel(id: string): Promise<DeleteResult> {
  const authError = await requireSession();
  if (authError) return { ok: false, error: authError };
  const cleanId = String(id ?? "").trim();
  if (!cleanId) {
    return { ok: false, error: "That travel item could not be found." };
  }
  const existing = await listTravels();
  if (!existing.some((travel) => travel.id === cleanId)) {
    return { ok: false, error: "That travel item no longer exists." };
  }
  const error = await removeItem("travel", cleanId);
  return error ? { ok: false, error } : { ok: true };
}

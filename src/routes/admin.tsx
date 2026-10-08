import { useCallback, useEffect, useRef, useState } from "react";
import {
  createFileRoute,
  Link,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ImagePlus,
  Loader2,
  LogOut,
  Pencil,
  Plus,
  Send,
  Trash2,
  X,
} from "lucide-react";

import { getSessionFn, logoutFn } from "@/lib/auth";
import {
  CATEGORIES,
  formatPostDate,
  type Category,
  type CreatePostInput,
  type Post,
} from "@/lib/blog";
import {
  createPostFn,
  deletePostFn,
  getPostsFn,
  updatePostFn,
  uploadImageFn,
} from "@/lib/blog-api";
import type { Hobby, Story } from "@/lib/content";
import {
  createHobbyFn,
  createStoryFn,
  deleteHobbyFn,
  deleteStoryFn,
  getHobbiesFn,
  getStoriesFn,
  updateHobbyFn,
  updateStoryFn,
} from "@/lib/content-api";

const TITLE = "Content admin — Abrar Anan Raiyan";
const DESCRIPTION = "Private publishing console.";

const CATEGORY_HINTS: Record<Category, string> = {
  Technological: "Software, AI, delivery, tooling",
  Philosophical: "Ideas, values, how we work",
  Storytelling: "Narratives and lived experiences",
  "Life update": "What is happening in your life",
  Newsletter: "Direct notes for your readers",
};

const MAX_IMAGE_BYTES = 1_500_000;
const IMAGE_ACCEPT = "image/png,image/jpeg,image/webp,image/gif,image/avif";

type EntityType = "blogs" | "stories" | "hobbies";
type FormKind = "blog" | "story" | "hobby";
type View = "home" | "list" | "form" | "result";

const ENTITY_CARDS: Array<{
  kind: EntityType;
  label: string;
  command: string;
  blurb: string;
}> = [
  {
    kind: "blogs",
    label: "Blogs",
    command: "ls blogs/",
    blurb: "Long-form writing — categories, tags, cover images and read time.",
  },
  {
    kind: "stories",
    label: "Stories",
    command: "cat stories.md",
    blurb: "Short narratives shown in the Stories panel on the blogs page.",
  },
  {
    kind: "hobbies",
    label: "Hobbies",
    command: "cat hobbies.md",
    blurb: "Personal interests shown in the Hobbies panel on the blogs page.",
  },
];

const LIST_TITLES: Record<EntityType, string> = {
  blogs: "All posts",
  stories: "All stories",
  hobbies: "All hobbies",
};

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex" },
    ],
  }),
  beforeLoad: async () => {
    const session = await getSessionFn();
    if (!session) throw redirect({ to: "/login" });
    return { session };
  },
  component: Admin,
});

function Admin() {
  const { session } = Route.useRouteContext();
  const navigate = useNavigate();

  const [view, setView] = useState<View>("home");
  const [entity, setEntity] = useState<EntityType>("blogs");
  const [formKind, setFormKind] = useState<FormKind>("blog");

  const [posts, setPosts] = useState<Post[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [loadingStories, setLoadingStories] = useState(true);
  const [loadingHobbies, setLoadingHobbies] = useState(true);
  const [listError, setListError] = useState<string | null>(null);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [pendingDelete, setPendingDelete] = useState<{
    entity: EntityType;
    id: string;
  } | null>(null);
  const [result, setResult] = useState<{
    slug: string;
    action: "published" | "updated";
  } | null>(null);

  const [pending, setPending] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<Category | null>(null);
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [storyTitle, setStoryTitle] = useState("");
  const [storyExcerpt, setStoryExcerpt] = useState("");
  const [hobbyName, setHobbyName] = useState("");
  const [hobbyDetail, setHobbyDetail] = useState("");

  function resetBlogForm() {
    setTitle("");
    setCategory(null);
    setExcerpt("");
    setBody("");
    setTags("");
    setImage("");
  }

  const loadPosts = useCallback(async () => {
    setLoadingPosts(true);
    setListError(null);
    try {
      const next = await getPostsFn();
      setPosts(next);
    } catch {
      setListError("Couldn't load your posts. Try again.");
    } finally {
      setLoadingPosts(false);
    }
  }, []);

  const loadStories = useCallback(async () => {
    setLoadingStories(true);
    try {
      setStories(await getStoriesFn());
    } catch {
      setListError("Couldn't load your stories. Try again.");
    } finally {
      setLoadingStories(false);
    }
  }, []);

  const loadHobbies = useCallback(async () => {
    setLoadingHobbies(true);
    try {
      setHobbies(await getHobbiesFn());
    } catch {
      setListError("Couldn't load your hobbies. Try again.");
    } finally {
      setLoadingHobbies(false);
    }
  }, []);

  const loadAll = useCallback(async () => {
    await Promise.all([loadPosts(), loadStories(), loadHobbies()]);
  }, [loadPosts, loadStories, loadHobbies]);

  useEffect(() => {
    void loadAll();
  }, [loadAll]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showHome() {
    setView("home");
    setResult(null);
    setExpandedSlug(null);
    setPendingDelete(null);
    setError(null);
  }

  function openList(kind: EntityType) {
    setEntity(kind);
    setView("list");
    setResult(null);
    setExpandedSlug(null);
    setPendingDelete(null);
    setError(null);
    scrollToTop();
  }

  function backToList() {
    openList(entity);
    void (entity === "blogs"
      ? loadPosts()
      : entity === "stories"
        ? loadStories()
        : loadHobbies());
  }

  function startCreate(kind: FormKind) {
    resetBlogForm();
    setStoryTitle("");
    setStoryExcerpt("");
    setHobbyName("");
    setHobbyDetail("");
    setEditingSlug(null);
    setEditingId(null);
    setResult(null);
    setPendingDelete(null);
    setError(null);
    setFormKind(kind);
    setEntity(
      kind === "blog" ? "blogs" : kind === "story" ? "stories" : "hobbies",
    );
    setView("form");
    scrollToTop();
  }

  function startEditingPost(slug: string) {
    const post = posts.find((entry) => entry.slug === slug);
    if (!post) {
      void loadPosts();
      return;
    }
    setTitle(post.title);
    setCategory(post.category);
    setExcerpt(post.excerpt);
    setBody(post.body);
    setTags(post.tags.join(", "));
    setImage(post.image ?? "");
    setError(null);
    setExpandedSlug(null);
    setEditingSlug(slug);
    setEditingId(null);
    setResult(null);
    setFormKind("blog");
    setEntity("blogs");
    setView("form");
    scrollToTop();
  }

  function startEditingStory(id: string) {
    const story = stories.find((entry) => entry.id === id);
    if (!story) {
      void loadStories();
      return;
    }
    setStoryTitle(story.title);
    setStoryExcerpt(story.excerpt);
    setEditingId(id);
    setEditingSlug(null);
    setError(null);
    setFormKind("story");
    setEntity("stories");
    setView("form");
    scrollToTop();
  }

  function startEditingHobby(id: string) {
    const hobby = hobbies.find((entry) => entry.id === id);
    if (!hobby) {
      void loadHobbies();
      return;
    }
    setHobbyName(hobby.name);
    setHobbyDetail(hobby.detail);
    setEditingId(id);
    setEditingSlug(null);
    setError(null);
    setFormKind("hobby");
    setEntity("hobbies");
    setView("form");
    scrollToTop();
  }

  async function onPickFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Pick an image file — PNG, JPEG, WebP or GIF.");
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setError("Cover image must be under 1.5 MB.");
      return;
    }
    setUploadingImage(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.set("file", file, file.name);
      const uploaded = await uploadImageFn({ data: formData });
      if (uploaded.ok) {
        setImage(uploaded.url);
      } else {
        setError(uploaded.error);
      }
    } catch {
      setError(
        "Couldn't upload the image. Check your connection and try again.",
      );
    } finally {
      setUploadingImage(false);
    }
  }

  async function onLogout() {
    setLoggingOut(true);
    try {
      await logoutFn();
      await navigate({ to: "/" });
    } finally {
      setLoggingOut(false);
    }
  }

  async function confirmDelete() {
    if (!pendingDelete) return;
    setPending(true);
    setError(null);
    try {
      const target = pendingDelete;
      const response =
        target.entity === "blogs"
          ? await deletePostFn({ data: { slug: target.id } })
          : target.entity === "stories"
            ? await deleteStoryFn({ data: { id: target.id } })
            : await deleteHobbyFn({ data: { id: target.id } });
      if (!response.ok) setError(response.error);
    } catch {
      setError("Couldn't delete that item. Try again.");
    } finally {
      setPending(false);
      setPendingDelete(null);
      await loadAll();
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);

    try {
      if (formKind === "story") {
        const input = { title: storyTitle, excerpt: storyExcerpt };
        const saved = editingId
          ? await updateStoryFn({ data: { ...input, id: editingId } })
          : await createStoryFn({ data: input });
        if (!saved.ok) {
          setError(saved.error);
          return;
        }
        setStoryTitle("");
        setStoryExcerpt("");
        setEditingId(null);
        await loadStories();
        openList("stories");
        return;
      }

      if (formKind === "hobby") {
        const input = { name: hobbyName, detail: hobbyDetail };
        const saved = editingId
          ? await updateHobbyFn({ data: { ...input, id: editingId } })
          : await createHobbyFn({ data: input });
        if (!saved.ok) {
          setError(saved.error);
          return;
        }
        setHobbyName("");
        setHobbyDetail("");
        setEditingId(null);
        await loadHobbies();
        openList("hobbies");
        return;
      }

      if (!category) {
        setError("Pick a category first.");
        return;
      }
      const input: CreatePostInput = {
        title,
        category,
        excerpt,
        body,
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        image: image.trim() || undefined,
      };
      const saved = editingSlug
        ? await updatePostFn({ data: { ...input, slug: editingSlug } })
        : await createPostFn({ data: input });
      if (saved.ok) {
        setResult({
          slug: saved.slug,
          action: editingSlug ? "updated" : "published",
        });
        resetBlogForm();
        setEditingSlug(null);
        setView("result");
        void loadPosts();
        scrollToTop();
        return;
      }
      setError(saved.error);
    } catch {
      setError(
        editingSlug || editingId
          ? "Something went wrong. Your changes were not saved."
          : "Something went wrong. Nothing was saved.",
      );
    } finally {
      setPending(false);
    }
  }

  const counts: Record<EntityType, string> = {
    blogs: loadingPosts ? "…" : `${posts.length}`,
    stories: loadingStories ? "…" : `${stories.length}`,
    hobbies: loadingHobbies ? "…" : `${hobbies.length}`,
  };

  const formLabels: Record<FormKind, { creating: string; editing: string }> = {
    blog: { creating: "New post", editing: `Edit · ${editingSlug ?? ""}` },
    story: { creating: "New story", editing: "Edit story" },
    hobby: { creating: "New hobby", editing: "Edit hobby" },
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-6 py-4">
          <button
            type="button"
            onClick={showHome}
            className="font-mono text-sm tracking-tight text-foreground"
          >
            anan<span className="text-signal">.</span>cms
          </button>
          <div className="flex items-center gap-2">
            <span className="hidden max-w-[14rem] truncate rounded-full border border-signal/60 bg-signal/10 px-3 py-1 font-mono text-[11px] text-signal sm:inline-block">
              {session.email}
            </span>
            <button
              type="button"
              onClick={onLogout}
              disabled={loggingOut}
              className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-signal hover:text-signal disabled:opacity-60"
            >
              <LogOut className="h-3.5 w-3.5" />
              {loggingOut ? "Signing out" : "Log out"}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 py-14 md:py-20">
        {view === "result" && result ? (
          <section className="rounded-2xl border border-signal/50 bg-surface p-8 md:p-10">
            <div className="flex items-center gap-3 text-signal">
              <CheckCircle2 className="h-6 w-6" />
              <p className="font-mono text-xs uppercase tracking-[0.18em]">
                {result.action === "published" ? "Published" : "Saved"}
              </p>
            </div>
            <h1 className="mt-5 text-3xl leading-tight md:text-4xl">
              {result.action === "published"
                ? "Your post is live."
                : "Your changes are live."}
            </h1>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/blogs/$slug"
                params={{ slug: result.slug }}
                className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                View post <ArrowUpRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => startCreate("blog")}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-signal hover:text-signal"
              >
                <Plus className="h-4 w-4" /> Write another
              </button>
            </div>
          </section>
        ) : view === "home" ? (
          <section className="rounded-2xl border border-border bg-surface p-8 md:p-12">
            <p className="label-mono mb-5">Publishing console</p>
            <h1 className="text-4xl leading-[1.05] md:text-5xl">
              Manage your <span className="text-signal">content</span>.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Three collections power the site. Create, read, update or delete
              items from any card — changes show up on the live pages right
              away.
            </p>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {ENTITY_CARDS.map((card) => (
                <div
                  key={card.kind}
                  className="flex flex-col rounded-2xl border border-border bg-background p-5"
                >
                  <p className="label-mono">
                    <span className="text-signal">$</span> {card.command}
                  </p>
                  <h2 className="mt-3 text-2xl">{card.label}</h2>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {counts[card.kind]} items
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {card.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => openList(card.kind)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-signal/60 bg-signal/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground"
                    >
                      Manage
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        startCreate(
                          card.kind === "blogs"
                            ? "blog"
                            : card.kind === "stories"
                              ? "story"
                              : "hobby",
                        )
                      }
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-signal hover:text-signal"
                    >
                      <Plus className="h-3.5 w-3.5" /> New
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : view === "list" ? (
          <section>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
              <div>
                <button
                  type="button"
                  onClick={showHome}
                  className="mb-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-signal"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> All collections
                </button>
                <p className="label-mono mb-3">
                  <span className="text-signal">$</span>{" "}
                  {ENTITY_CARDS.find((card) => card.kind === entity)?.command}
                </p>
                <h1 className="text-3xl leading-none md:text-4xl">
                  {LIST_TITLES[entity]}
                </h1>
                <p className="mt-3 font-mono text-xs text-muted-foreground">
                  {entity === "blogs"
                    ? loadingPosts
                      ? "Loading…"
                      : `${posts.length} ${posts.length === 1 ? "post" : "posts"}`
                    : entity === "stories"
                      ? loadingStories
                        ? "Loading…"
                        : `${stories.length} ${stories.length === 1 ? "story" : "stories"}`
                      : loadingHobbies
                        ? "Loading…"
                        : `${hobbies.length} ${hobbies.length === 1 ? "hobby" : "hobbies"}`}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  startCreate(
                    entity === "blogs"
                      ? "blog"
                      : entity === "stories"
                        ? "story"
                        : "hobby",
                  )
                }
                className="inline-flex items-center gap-2 rounded-full border border-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground"
              >
                <Plus className="h-4 w-4" /> New{" "}
                {entity === "blogs" ? "post" : entity.slice(0, -1)}
              </button>
            </div>

            {error && (
              <div className="mt-6 rounded-xl border border-destructive/50 bg-destructive/10 px-4 py-3">
                <p className="font-mono text-xs text-destructive">{error}</p>
              </div>
            )}

            {listError && (
              <div className="mt-6 rounded-xl border border-destructive/50 bg-destructive/10 px-4 py-3">
                <p className="font-mono text-xs text-destructive">
                  {listError}
                </p>
                <button
                  type="button"
                  onClick={() => void loadAll()}
                  className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-destructive underline underline-offset-4"
                >
                  Try again
                </button>
              </div>
            )}

            {entity === "blogs" && (
              <>
                {!listError && loadingPosts && posts.length === 0 && (
                  <ul className="mt-8 space-y-4" aria-hidden="true">
                    {[0, 1, 2].map((index) => (
                      <li
                        key={index}
                        className="h-28 animate-pulse rounded-2xl border border-border bg-surface"
                      />
                    ))}
                  </ul>
                )}

                {!listError && !loadingPosts && posts.length === 0 && (
                  <div className="mt-8 rounded-2xl border border-border bg-surface p-8 text-center">
                    <p className="text-sm text-muted-foreground">
                      Nothing here yet. Write your first post and it will show
                      up in this list.
                    </p>
                    <button
                      type="button"
                      onClick={() => startCreate("blog")}
                      className="hire-btn mt-6 inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground"
                    >
                      <span className="relative z-[1] inline-flex items-center gap-2">
                        <Plus className="h-4 w-4" /> Create blog
                      </span>
                      <span className="hire-btn__shine" aria-hidden="true" />
                    </button>
                  </div>
                )}

                {!listError && posts.length > 0 && (
                  <ul className="mt-8 space-y-4">
                    {posts.map((post) => {
                      const expanded = expandedSlug === post.slug;
                      const deleting =
                        pendingDelete?.entity === "blogs" &&
                        pendingDelete.id === post.slug;
                      return (
                        <li
                          key={post.slug}
                          className="rounded-2xl border border-border bg-surface p-5 md:p-6"
                        >
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <div className="min-w-0">
                              {post.image && (
                                <img
                                  src={post.image}
                                  alt=""
                                  className="mb-3 h-20 w-full rounded-xl border border-border object-cover"
                                />
                              )}
                              <p className="label-mono">{post.category}</p>
                              <h3 className="mt-2 font-display text-xl leading-snug md:text-2xl">
                                {post.title}
                              </h3>
                              <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                                {formatPostDate(post.date)} · {post.readTime}
                              </p>
                              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                                {post.excerpt}
                              </p>
                              {post.tags.length > 0 && (
                                <p className="mt-2 font-mono text-[11px] text-muted-foreground/80">
                                  {post.tags.join(" · ")}
                                </p>
                              )}
                            </div>
                            <div className="flex shrink-0 flex-wrap items-center gap-2">
                              <Link
                                to="/blogs/$slug"
                                params={{ slug: post.slug }}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full border border-signal/60 bg-signal/10 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground"
                              >
                                View <ArrowUpRight className="h-3.5 w-3.5" />
                              </Link>
                              <button
                                type="button"
                                onClick={() => startEditingPost(post.slug)}
                                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-signal hover:text-signal"
                              >
                                Edit <Pencil className="h-3.5 w-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setExpandedSlug(expanded ? null : post.slug)
                                }
                                aria-expanded={expanded}
                                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                              >
                                {expanded ? "Hide" : "Read"}
                                {expanded ? (
                                  <ChevronUp className="h-3.5 w-3.5" />
                                ) : (
                                  <ChevronDown className="h-3.5 w-3.5" />
                                )}
                              </button>
                              {deleting ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => void confirmDelete()}
                                    disabled={pending}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-destructive bg-destructive/15 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-destructive transition-colors disabled:opacity-60"
                                  >
                                    {pending ? "Deleting…" : "Confirm?"}
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setPendingDelete(null)}
                                    disabled={pending}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground disabled:opacity-60"
                                  >
                                    Cancel
                                  </button>
                                </>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setPendingDelete({
                                      entity: "blogs",
                                      id: post.slug,
                                    })
                                  }
                                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
                                >
                                  Delete <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              )}
                            </div>
                          </div>
                          {expanded && (
                            <div className="mt-5 border-t border-border pt-5">
                              <p className="label-mono mb-3">Content</p>
                              <div className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">
                                {post.body}
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </>
            )}

            {(entity === "stories" || entity === "hobbies") && (
              <>
                {(entity === "stories" ? loadingStories : loadingHobbies) &&
                  (entity === "stories" ? stories : hobbies).length === 0 && (
                    <ul className="mt-8 space-y-4" aria-hidden="true">
                      {[0, 1, 2].map((index) => (
                        <li
                          key={index}
                          className="h-24 animate-pulse rounded-2xl border border-border bg-surface"
                        />
                      ))}
                    </ul>
                  )}

                {!(entity === "stories" ? loadingStories : loadingHobbies) &&
                  (entity === "stories" ? stories : hobbies).length === 0 && (
                    <div className="mt-8 rounded-2xl border border-border bg-surface p-8 text-center">
                      <p className="text-sm text-muted-foreground">
                        Nothing here yet. Create the first{" "}
                        {entity === "stories" ? "story" : "hobby"} and it will
                        show up on the blogs page.
                      </p>
                    </div>
                  )}

                {(entity === "stories" ? stories : hobbies).length > 0 && (
                  <ul className="mt-8 space-y-4">
                    {(entity === "stories"
                      ? stories.map((story) => ({
                          id: story.id,
                          title: story.title,
                          detail: story.excerpt,
                          onEdit: () => startEditingStory(story.id),
                        }))
                      : hobbies.map((hobby) => ({
                          id: hobby.id,
                          title: hobby.name,
                          detail: hobby.detail,
                          onEdit: () => startEditingHobby(hobby.id),
                        }))
                    ).map((item) => {
                      const deleting =
                        pendingDelete?.entity === entity &&
                        pendingDelete.id === item.id;
                      return (
                        <li
                          key={item.id}
                          className="rounded-2xl border border-border bg-surface p-5 md:p-6"
                        >
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <div className="min-w-0">
                              <p className="label-mono">{item.id}</p>
                              <h3 className="mt-2 font-display text-xl leading-snug md:text-2xl">
                                {item.title}
                              </h3>
                              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                                {item.detail}
                              </p>
                            </div>
                            <div className="flex shrink-0 flex-wrap items-center gap-2">
                              <button
                                type="button"
                                onClick={item.onEdit}
                                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-signal hover:text-signal"
                              >
                                Edit <Pencil className="h-3.5 w-3.5" />
                              </button>
                              {deleting ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => void confirmDelete()}
                                    disabled={pending}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-destructive bg-destructive/15 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-destructive transition-colors disabled:opacity-60"
                                  >
                                    {pending ? "Deleting…" : "Confirm?"}
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setPendingDelete(null)}
                                    disabled={pending}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground disabled:opacity-60"
                                  >
                                    Cancel
                                  </button>
                                </>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setPendingDelete({
                                      entity,
                                      id: item.id,
                                    })
                                  }
                                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
                                >
                                  Delete <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              )}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </>
            )}
          </section>
        ) : (
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-surface p-6 md:p-9"
          >
            <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
              <p className="label-mono">
                {editingSlug || editingId
                  ? formLabels[formKind].editing
                  : formLabels[formKind].creating}
              </p>
              <button
                type="button"
                onClick={backToList}
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-signal"
              >
                <X className="h-3.5 w-3.5" /> Close
              </button>
            </div>

            <div className="mt-6 space-y-6">
              {formKind === "blog" && (
                <>
                  <div>
                    <label htmlFor="title" className="label-mono mb-2 block">
                      Title
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      required
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                      placeholder="The stand-up is not the status update"
                      className="w-full rounded-full border border-border bg-background px-4 py-3 font-display text-lg text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-signal"
                    />
                  </div>

                  <fieldset>
                    <legend className="label-mono mb-3">
                      Category <span className="text-signal">*</span>
                    </legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {CATEGORIES.map((option) => {
                        const active = category === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setCategory(option)}
                            aria-pressed={active}
                            className={`rounded-xl border px-4 py-3 text-left transition-colors ${
                              active
                                ? "border-signal bg-signal/10"
                                : "border-border bg-background hover:border-signal/60"
                            }`}
                          >
                            <span
                              className={`block font-mono text-xs uppercase tracking-[0.14em] ${
                                active ? "text-signal" : "text-foreground"
                              }`}
                            >
                              {option}
                            </span>
                            <span className="mt-1 block text-xs text-muted-foreground">
                              {CATEGORY_HINTS[option]}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="excerpt" className="label-mono mb-2 block">
                      Excerpt
                    </label>
                    <textarea
                      id="excerpt"
                      name="excerpt"
                      required
                      rows={2}
                      value={excerpt}
                      onChange={(event) => setExcerpt(event.target.value)}
                      placeholder="One or two lines that summarize the post."
                      className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-signal"
                    />
                  </div>

                  <div>
                    <label htmlFor="body" className="label-mono mb-2 block">
                      Content
                    </label>
                    <textarea
                      id="body"
                      name="body"
                      required
                      rows={14}
                      value={body}
                      onChange={(event) => setBody(event.target.value)}
                      placeholder={
                        "Write the post.\n\nSeparate paragraphs with a blank line."
                      }
                      className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-signal"
                    />
                  </div>

                  <div>
                    <label htmlFor="tags" className="label-mono mb-2 block">
                      Tags{" "}
                      <span className="normal-case">(comma separated)</span>
                    </label>
                    <input
                      id="tags"
                      name="tags"
                      type="text"
                      value={tags}
                      onChange={(event) => setTags(event.target.value)}
                      placeholder="Agile, Teams, Process"
                      className="w-full rounded-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-signal"
                    />
                  </div>

                  <div>
                    <p className="label-mono mb-3">
                      Cover image{" "}
                      <span className="normal-case text-muted-foreground">
                        (optional)
                      </span>
                    </p>
                    <div className="rounded-2xl border border-border bg-background p-4">
                      {image && (
                        <img
                          src={image}
                          alt="Cover preview"
                          className="mb-4 h-44 w-full rounded-xl border border-border bg-surface object-cover"
                        />
                      )}
                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          disabled={uploadingImage}
                          className="inline-flex items-center gap-2 rounded-full border border-signal/60 bg-signal/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {uploadingImage ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          ) : (
                            <ImagePlus className="h-3.5 w-3.5" />
                          )}
                          {uploadingImage
                            ? "Uploading…"
                            : image
                              ? "Replace image"
                              : "Choose image"}
                        </button>
                        {image && (
                          <button
                            type="button"
                            onClick={() => setImage("")}
                            disabled={uploadingImage}
                            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-destructive hover:text-destructive disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            <Trash2 className="h-3.5 w-3.5" /> Remove
                          </button>
                        )}
                        <p className="font-mono text-[11px] text-muted-foreground">
                          PNG, JPEG, WebP or GIF · up to 1.5 MB
                        </p>
                      </div>
                      <div className="mt-4 border-t border-border pt-4">
                        <label
                          htmlFor="image-url"
                          className="label-mono mb-2 block"
                        >
                          …or paste an image URL
                        </label>
                        <input
                          id="image-url"
                          name="image-url"
                          type="text"
                          value={image.startsWith("data:") ? "" : image}
                          onChange={(event) => setImage(event.target.value)}
                          placeholder={
                            image.startsWith("data:")
                              ? "Uploaded file in use — Remove to paste a URL"
                              : "https://…/cover.jpg"
                          }
                          className="w-full rounded-full border border-border bg-surface px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-signal"
                        />
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept={IMAGE_ACCEPT}
                        onChange={onPickFile}
                        className="hidden"
                      />
                    </div>
                  </div>
                </>
              )}

              {formKind === "story" && (
                <>
                  <div>
                    <label
                      htmlFor="story-title"
                      className="label-mono mb-2 block"
                    >
                      Title
                    </label>
                    <input
                      id="story-title"
                      name="story-title"
                      type="text"
                      required
                      value={storyTitle}
                      onChange={(event) => setStoryTitle(event.target.value)}
                      placeholder="The sprint that fixed itself"
                      className="w-full rounded-full border border-border bg-background px-4 py-3 font-display text-lg text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-signal"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="story-excerpt"
                      className="label-mono mb-2 block"
                    >
                      Excerpt
                    </label>
                    <textarea
                      id="story-excerpt"
                      name="story-excerpt"
                      required
                      rows={4}
                      value={storyExcerpt}
                      onChange={(event) => setStoryExcerpt(event.target.value)}
                      placeholder="One or two lines that draw readers in."
                      className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-signal"
                    />
                  </div>
                </>
              )}

              {formKind === "hobby" && (
                <>
                  <div>
                    <label
                      htmlFor="hobby-name"
                      className="label-mono mb-2 block"
                    >
                      Name
                    </label>
                    <input
                      id="hobby-name"
                      name="hobby-name"
                      type="text"
                      required
                      value={hobbyName}
                      onChange={(event) => setHobbyName(event.target.value)}
                      placeholder="Photography"
                      className="w-full rounded-full border border-border bg-background px-4 py-3 font-display text-lg text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-signal"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="hobby-detail"
                      className="label-mono mb-2 block"
                    >
                      Detail
                    </label>
                    <textarea
                      id="hobby-detail"
                      name="hobby-detail"
                      required
                      rows={4}
                      value={hobbyDetail}
                      onChange={(event) => setHobbyDetail(event.target.value)}
                      placeholder="What you do and why you enjoy it."
                      className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-signal"
                    />
                  </div>
                </>
              )}

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-destructive/50 bg-destructive/10 px-4 py-3 font-mono text-xs text-destructive"
                >
                  {error}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3 border-t border-border pt-6">
                <button
                  type="submit"
                  disabled={pending}
                  className="hire-btn inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="relative z-[1] inline-flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    {pending
                      ? "Saving..."
                      : editingSlug || editingId
                        ? "Save changes"
                        : "Publish"}
                  </span>
                  <span className="hire-btn__shine" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={backToList}
                  disabled={pending}
                  className="rounded-full border border-border px-5 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground disabled:opacity-60"
                >
                  Discard
                </button>
              </div>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}

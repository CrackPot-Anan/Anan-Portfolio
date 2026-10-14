const ENDPOINT = "https://translate.googleapis.com/translate_a/single";
const SOURCE_LANG = "en";
const MAX_TEXTS = 200;
const MAX_LENGTH = 5000;
const CACHE_LIMIT = 5000;
const CONCURRENCY = 4;

const cache = new Map<string, string>();

function cacheKey(target: string, text: string): string {
  return `${target}\u0000${text}`;
}

async function translateOne(text: string, target: string): Promise<string> {
  if (text.trim().length === 0 || text.length > MAX_LENGTH) return text;

  const key = cacheKey(target, text);
  const cached = cache.get(key);
  if (cached !== undefined) return cached;

  const url =
    `${ENDPOINT}?client=gtx&sl=${SOURCE_LANG}` +
    `&tl=${encodeURIComponent(target)}&dt=t&q=${encodeURIComponent(text)}`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36",
        Accept: "application/json",
      },
    });
    if (!response.ok) return text;

    const data: unknown = await response.json();
    const segments =
      Array.isArray(data) && Array.isArray(data[0]) ? data[0] : [];
    const translated = segments
      .map((segment: unknown) =>
        Array.isArray(segment) ? String(segment[0] ?? "") : "",
      )
      .join("");

    const value = translated.length > 0 ? translated : text;
    if (cache.size >= CACHE_LIMIT) cache.clear();
    cache.set(key, value);
    return value;
  } catch {
    return text;
  }
}

async function mapLimit<T, R>(
  items: T[],
  limit: number,
  task: (item: T) => Promise<R>,
): Promise<R[]> {
  const results = new Array<R>(items.length);
  let cursor = 0;
  const workers = Array.from(
    { length: Math.min(limit, items.length) },
    async () => {
      while (cursor < items.length) {
        const index = cursor;
        cursor += 1;
        results[index] = await task(items[index] as T);
      }
    },
  );
  await Promise.all(workers);
  return results;
}

export async function translateTexts(
  texts: string[],
  target: string,
): Promise<string[]> {
  const list = (Array.isArray(texts) ? texts : [])
    .slice(0, MAX_TEXTS)
    .map((text) => String(text ?? ""));

  if (target === SOURCE_LANG || target.length === 0) return list;

  return await mapLimit(list, CONCURRENCY, (text) =>
    translateOne(text, target),
  );
}

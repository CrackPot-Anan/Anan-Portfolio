import { useCallback, useEffect, useRef, useState } from "react";
import {
  createFileRoute,
  Link,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import {
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
  getPostsFn,
  updatePostFn,
  uploadImageFn,
} from "@/lib/blog-api";

const TITLE = "Create blog — Abrar Anan Raiyan";
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

type View = "home" | "form" | "result";

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
  const [posts, setPosts] = useState<Post[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [listError, setListError] = useState<string | null>(null);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const [editingSlug, setEditingSlug] = useState<string | null>(null);
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

  function resetForm() {
    setTitle("");
    setCategory(null);
    setExcerpt("");
    setBody("");
    setTags("");
    setImage("");
    setError(null);
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

  useEffect(() => {
    void loadPosts();
  }, [loadPosts]);

  function showHome() {
    setView("home");
    setResult(null);
    setExpandedSlug(null);
  }

  function startWriting() {
    resetForm();
    setEditingSlug(null);
    setResult(null);
    setView("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startEditing(slug: string) {
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
    setResult(null);
    setView("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      setError("Couldn't upload the image. Check your connection and try again.");
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

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!category) {
      setError("Pick a category first.");
      return;
    }
    setPending(true);
    setError(null);
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
    try {
      const saved = editingSlug
        ? await updatePostFn({ data: { ...input, slug: editingSlug } })
        : await createPostFn({ data: input });
      if (saved.ok) {
        setResult({
          slug: saved.slug,
          action: editingSlug ? "updated" : "published",
        });
        resetForm();
        setEditingSlug(null);
        setView("result");
        void loadPosts();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      setError(saved.error);
    } catch {
      setError(
        editingSlug
          ? "Something went wrong. Your changes were not saved."
          : "Something went wrong. Nothing was published.",
      );
    } finally {
      setPending(false);
    }
  }

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
                onClick={startWriting}
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
              Put a new <span className="text-signal">post</span>
              <br />
              in front of everyone.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Pick a category, write the piece, hit publish — it shows up on the
              blog right away. Everything you have written is listed below,
              ready to read or edit.
            </p>
            <button
              type="button"
              onClick={startWriting}
              className="hire-btn mt-8 inline-flex items-center gap-2 rounded-full bg-signal px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground"
            >
              <span className="relative z-[1] inline-flex items-center gap-2">
                <Plus className="h-4 w-4" /> Create blog
              </span>
              <span className="hire-btn__shine" aria-hidden="true" />
            </button>
          </section>
        ) : (
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-surface p-6 md:p-9"
          >
            <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
              <p className="label-mono">
                {editingSlug ? `Edit · ${editingSlug}` : "New post"}
              </p>
              <button
                type="button"
                onClick={showHome}
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-signal"
              >
                <X className="h-3.5 w-3.5" /> Close
              </button>
            </div>

            <div className="mt-6 space-y-6">
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
                  Tags <span className="normal-case">(comma separated)</span>
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
                      ? editingSlug
                        ? "Saving..."
                        : "Publishing..."
                      : editingSlug
                        ? "Save changes"
                        : "Publish"}
                  </span>
                  <span className="hire-btn__shine" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showHome}
                  disabled={pending}
                  className="rounded-full border border-border px-5 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground disabled:opacity-60"
                >
                  Discard
                </button>
              </div>
            </div>
          </form>
        )}

        <section className="mt-14 md:mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
            <div>
              <p className="label-mono mb-3">
                <span className="text-signal">$</span> ls blogs/
              </p>
              <h2 className="text-3xl leading-none md:text-4xl">
                All <span className="text-signal">posts</span>
              </h2>
              <p className="mt-3 font-mono text-xs text-muted-foreground">
                {loadingPosts
                  ? "Loading…"
                  : `${posts.length} ${posts.length === 1 ? "post" : "posts"}`}
              </p>
            </div>
            <button
              type="button"
              onClick={startWriting}
              className="inline-flex items-center gap-2 rounded-full border border-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground"
            >
              <Plus className="h-4 w-4" /> New post
            </button>
          </div>

          {listError && (
            <div className="mt-8 rounded-xl border border-destructive/50 bg-destructive/10 px-4 py-3">
              <p className="font-mono text-xs text-destructive">{listError}</p>
              <button
                type="button"
                onClick={() => void loadPosts()}
                className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-destructive underline underline-offset-4"
              >
                Try again
              </button>
            </div>
          )}

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
                Nothing here yet. Write your first post and it will show up in
                this list.
              </p>
              <button
                type="button"
                onClick={startWriting}
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
                          onClick={() => startEditing(post.slug)}
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
        </section>
      </main>
    </div>
  );
}

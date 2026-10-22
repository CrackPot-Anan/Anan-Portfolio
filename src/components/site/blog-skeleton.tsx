function Bar({ className = "" }: { className?: string }) {
  return <div className={`skeleton rounded ${className}`} />;
}

export function BlogListSkeleton() {
  return (
    <div
      className="space-y-px bg-border"
      role="status"
      aria-busy="true"
      aria-label="Loading posts"
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="grid gap-4 bg-background p-6 md:grid-cols-[160px_1fr] md:p-7"
        >
          <div className="space-y-2 md:pt-1">
            <Bar className="mb-3 aspect-video w-full rounded-xl" />
            <Bar className="h-3 w-24" />
            <Bar className="h-3 w-16" />
          </div>
          <div className="space-y-3">
            <Bar className="h-3 w-20" />
            <Bar className="h-6 w-3/4" />
            <Bar className="h-3 w-full" />
            <Bar className="h-3 w-5/6" />
          </div>
        </div>
      ))}
      <span className="sr-only">Loading posts…</span>
    </div>
  );
}

export function BlogPostSkeleton() {
  return (
    <div
      className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24"
      role="status"
      aria-busy="true"
      aria-label="Loading post"
    >
      <Bar className="h-3 w-24" />
      <Bar className="mt-8 h-10 w-4/5 md:h-14" />
      <Bar className="mt-4 h-10 w-2/5 md:h-14" />
      <div className="mt-7 flex flex-wrap gap-6">
        <Bar className="h-3 w-28" />
        <Bar className="h-3 w-20" />
        <Bar className="h-3 w-16" />
      </div>
      <Bar className="mt-10 aspect-video w-full rounded-2xl" />
      <div className="mt-10 space-y-4">
        <Bar className="h-4 w-full" />
        <Bar className="h-4 w-full" />
        <Bar className="h-4 w-3/4" />
      </div>
      <span className="sr-only">Loading post…</span>
    </div>
  );
}

import { createServerFn } from "@tanstack/react-start";

import type { CreatePostInput, CreatePostResult, Post } from "@/lib/blog";

export const getPostsFn = createServerFn({ method: "GET" }).handler(
  async (): Promise<Post[]> => {
    const { listPosts } = await import("@/server/posts");
    return await listPosts();
  },
);

export const getPostFn = createServerFn({ method: "GET" })
  .validator((data: { slug: string }) => data)
  .handler(async ({ data }): Promise<Post | null> => {
    const { getPost } = await import("@/server/posts");
    return await getPost(data.slug);
  });

export const createPostFn = createServerFn({ method: "POST" })
  .validator((data: CreatePostInput) => data)
  .handler(async ({ data }): Promise<CreatePostResult> => {
    const { createPost } = await import("@/server/posts");
    return await createPost(data);
  });

import { createServerFn } from "@tanstack/react-start";

import type {
  CreatePostInput,
  CreatePostResult,
  DeletePostResult,
  Post,
  PostSummary,
  UpdatePostInput,
  UploadImageResult,
  VisibilityResult,
} from "@/lib/blog";

export const getPostsFn = createServerFn({ method: "GET" }).handler(
  async (): Promise<Post[]> => {
    const { listPosts } = await import("@/server/posts");
    return await listPosts();
  },
);

export const getPublicPostsFn = createServerFn({ method: "GET" }).handler(
  async (): Promise<Post[]> => {
    const { listPublishedPosts } = await import("@/server/posts");
    return await listPublishedPosts();
  },
);

/** Listing payload: same posts, without the article bodies. */
export const getPublicPostSummariesFn = createServerFn({
  method: "GET",
}).handler(async (): Promise<PostSummary[]> => {
  const { listPublishedPostSummaries } = await import("@/server/posts");
  return await listPublishedPostSummaries();
});

export const getPostPageFn = createServerFn({ method: "GET" })
  .validator((data: { slug: string }) => data)
  .handler(
    async ({
      data,
    }): Promise<{ post: Post | null; related: PostSummary[] }> => {
      const { getPostPage } = await import("@/server/posts");
      return await getPostPage(data.slug);
    },
  );

export const createPostFn = createServerFn({ method: "POST" })
  .validator((data: CreatePostInput) => data)
  .handler(async ({ data }): Promise<CreatePostResult> => {
    const { createPost } = await import("@/server/posts");
    return await createPost(data);
  });

export const updatePostFn = createServerFn({ method: "POST" })
  .validator((data: UpdatePostInput) => data)
  .handler(async ({ data }): Promise<CreatePostResult> => {
    const { updatePost } = await import("@/server/posts");
    return await updatePost(data);
  });

export const uploadImageFn = createServerFn({ method: "POST" })
  .validator((data: FormData) => data)
  .handler(async ({ data }): Promise<UploadImageResult> => {
    const file = data.get("file");
    if (!(file instanceof File)) {
      return { ok: false, error: "No image file was received. Try again." };
    }
    const { uploadCoverImage } = await import("@/server/images");
    return await uploadCoverImage(file);
  });

export const deletePostFn = createServerFn({ method: "POST" })
  .validator((data: { slug: string }) => data)
  .handler(async ({ data }): Promise<DeletePostResult> => {
    const { deletePost } = await import("@/server/posts");
    return await deletePost(data.slug);
  });

export const setPostVisibilityFn = createServerFn({ method: "POST" })
  .validator((data: { slug: string; hidden: boolean }) => data)
  .handler(async ({ data }): Promise<VisibilityResult> => {
    const { setPostVisibility } = await import("@/server/posts");
    return await setPostVisibility(data.slug, data.hidden);
  });

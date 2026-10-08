import { createServerFn } from "@tanstack/react-start";

import type {
  CreatePostInput,
  CreatePostResult,
  DeletePostResult,
  Post,
  UpdatePostInput,
  UploadImageResult,
} from "@/lib/blog";

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

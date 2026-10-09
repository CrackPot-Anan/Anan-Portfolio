import { createServerFn } from "@tanstack/react-start";

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

export const getHobbiesFn = createServerFn({ method: "GET" }).handler(
  async (): Promise<Hobby[]> => {
    const { listHobbies } = await import("@/server/content");
    return await listHobbies();
  },
);

export const getHobbyFn = createServerFn({ method: "GET" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }): Promise<Hobby | null> => {
    const { getHobby } = await import("@/server/content");
    return await getHobby(data.id);
  });

export const getStoriesFn = createServerFn({ method: "GET" }).handler(
  async (): Promise<Story[]> => {
    const { listStories } = await import("@/server/content");
    return await listStories();
  },
);

export const getStoryFn = createServerFn({ method: "GET" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }): Promise<Story | null> => {
    const { getStory } = await import("@/server/content");
    return await getStory(data.id);
  });

export const getTravelsFn = createServerFn({ method: "GET" }).handler(
  async (): Promise<Travel[]> => {
    const { listTravels } = await import("@/server/content");
    return await listTravels();
  },
);

export const getTravelFn = createServerFn({ method: "GET" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }): Promise<Travel | null> => {
    const { getTravel } = await import("@/server/content");
    return await getTravel(data.id);
  });

export const createHobbyFn = createServerFn({ method: "POST" })
  .validator((data: HobbyInput) => data)
  .handler(async ({ data }): Promise<SaveResult> => {
    const { createHobby } = await import("@/server/content");
    return await createHobby(data);
  });

export const updateHobbyFn = createServerFn({ method: "POST" })
  .validator((data: UpdateHobbyInput) => data)
  .handler(async ({ data }): Promise<SaveResult> => {
    const { updateHobby } = await import("@/server/content");
    return await updateHobby(data);
  });

export const deleteHobbyFn = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }): Promise<DeleteResult> => {
    const { deleteHobby } = await import("@/server/content");
    return await deleteHobby(data.id);
  });

export const createStoryFn = createServerFn({ method: "POST" })
  .validator((data: StoryInput) => data)
  .handler(async ({ data }): Promise<SaveResult> => {
    const { createStory } = await import("@/server/content");
    return await createStory(data);
  });

export const updateStoryFn = createServerFn({ method: "POST" })
  .validator((data: UpdateStoryInput) => data)
  .handler(async ({ data }): Promise<SaveResult> => {
    const { updateStory } = await import("@/server/content");
    return await updateStory(data);
  });

export const deleteStoryFn = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }): Promise<DeleteResult> => {
    const { deleteStory } = await import("@/server/content");
    return await deleteStory(data.id);
  });

export const createTravelFn = createServerFn({ method: "POST" })
  .validator((data: TravelInput) => data)
  .handler(async ({ data }): Promise<SaveResult> => {
    const { createTravel } = await import("@/server/content");
    return await createTravel(data);
  });

export const updateTravelFn = createServerFn({ method: "POST" })
  .validator((data: UpdateTravelInput) => data)
  .handler(async ({ data }): Promise<SaveResult> => {
    const { updateTravel } = await import("@/server/content");
    return await updateTravel(data);
  });

export const deleteTravelFn = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }): Promise<DeleteResult> => {
    const { deleteTravel } = await import("@/server/content");
    return await deleteTravel(data.id);
  });

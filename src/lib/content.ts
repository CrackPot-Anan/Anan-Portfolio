export type Hobby = {
  id: string;
  name: string;
  detail: string;
};

export type Story = {
  id: string;
  title: string;
  excerpt: string;
};

export type HobbyInput = {
  name: string;
  detail: string;
};

export type StoryInput = {
  title: string;
  excerpt: string;
};

export type UpdateHobbyInput = HobbyInput & { id: string };
export type UpdateStoryInput = StoryInput & { id: string };

export type SaveResult =
  { ok: true; id: string } | { ok: false; error: string };

export type DeleteResult = { ok: true } | { ok: false; error: string };

export type Tab4Item = {
  id: number;
  title: string;
  subtitle: string;
};

export const tab4Items: Tab4Item[] = Array.from({ length: 120 }, (_, index) => {
  const id = index + 1;

  return {
    id,
    title: `Item ${id}`,
    subtitle: `Subtitle ${id}: short description for list item ${id}.`,
  };
});

export type Tab4Item = {
  id: number;
  title: string;
  subtitle: string;
  count: number;
};

export const tab4Items: Tab4Item[] = Array.from({ length: 120 }, (_, index) => {
  const id = index + 1;

  return {
    id,
    title: `Item ${id}`,
    subtitle: `Subtitle ${id}: short description for list item ${id}.`,
    count: (id * 7) % 37 + 1,
  };
});

// Add some custom tab4 items
tab4Items[0].title = "Grondzeil patrouilletent <2020";
tab4Items[0].subtitle = "Rode snelbinder";
tab4Items[0].count = 22;
tab4Items[1].title = "Grondzeil Maxbi";
tab4Items[1].subtitle = "Groene snelbinder";
tab4Items[1].count = 6;
tab4Items[2].title = "Gronddoek patrouilletent 2020";
tab4Items[2].subtitle = "Zwarte worteldoek";
tab4Items[2].count = 6;
tab4Items[3].title = "Buizen patrouilletent 2020";
tab4Items[3].subtitle = "Groen-grijze rolzakken";
tab4Items[3].count = 6;
for (let i = 4; i < 22+4; i++) {
  const letter = String.fromCharCode(65 + (i - 4));
  tab4Items[i].title = `Buizen patrouilletent ${letter}`;
  tab4Items[i].subtitle = "Groene stoffen zak";
  tab4Items[i].count = 1;
  tab4Items[i+22].title = `Binnenzeil patrouilletent ${letter}`;
  tab4Items[i+22].subtitle = "";
  tab4Items[i+22].count = 1;
  tab4Items[i+44].title = `Buitenzeil patrouilletent ${letter}`;
  tab4Items[i+44].subtitle = "Zit samen met luifel";
  tab4Items[i+44].count = 1;
  tab4Items[i+66].title = `Luifel patrouilletent ${letter}`;
  tab4Items[i+66].subtitle = "Zit samen met buitentent";
  tab4Items[i+66].count = 1;
}
const greekLetters = ["ALPHA", "BETA", "GAMMA", "DELTA", "EPSILON", "ZETA"];
for (let i = 0; i < greekLetters.length; i++) {
  const letter = greekLetters[i];
  tab4Items[88 + i * 2].title = `Buitenzeil patrouilletent ${letter}`;
  tab4Items[88 + i * 2].subtitle = "";
  tab4Items[88 + i * 2].count = 1;
  tab4Items[89 + i * 2].title = `Binnenzeil patrouilletent ${letter}`;
  tab4Items[89 + i * 2].subtitle = "Grondzeil vast ingenaaid";
  tab4Items[89 + i * 2].count = 1;
}


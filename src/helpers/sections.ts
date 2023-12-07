export function sortSections(
  sections: { id: string; data: { title: string } }[],
  sectionOrder: string[]
) {
  sections.sort((a, b) => {
    if (!sectionOrder.includes(a.data.title)) return 1;
    if (!sectionOrder.includes(b.data.title)) return -1;
    return (
      sectionOrder.indexOf(a.data.title) - sectionOrder.indexOf(b.data.title)
    );
  });
}

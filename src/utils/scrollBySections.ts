export interface Sections {
  SOBRE: "sobre";
  EXPERIÊNCIA: "experiência";
  PROJETOS: "projetos";
  CONTATO: "contato";
}

export const scrollTo = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const yOffset = window.scrollY + element.getBoundingClientRect().top;
    window.scrollTo({
      top: yOffset,
      behavior: "smooth",
    });
  }
};

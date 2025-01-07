export interface Sections {
  about: "about";
  experience: "experience";
  projects: "projects";
  contact: "contact";
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

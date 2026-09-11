export interface Sections {
  about: "about";
  experience: "experience";
  projects: "projects";
  contact: "contact";
}

export const scrollTo = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const header = document.getElementById("site-header");
  const headerHeight = header?.getBoundingClientRect().height ?? 80;
  const sectionTop = window.scrollY + element.getBoundingClientRect().top;

  window.scrollTo({
    top: Math.max(sectionTop - headerHeight - 24, 0),
    behavior: "smooth",
  });
};

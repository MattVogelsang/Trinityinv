// Scroll utility functions

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const getScrollProgress = (): number => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  return (window.scrollY / scrollHeight) * 100;
};

export const getActiveSection = (sections: string[]): string => {
  const scrollPosition = window.scrollY + 100;
  
  for (const section of sections.reverse()) {
    const element = document.getElementById(section === 'home' ? '' : section);
    if (element) {
      const offsetTop = element.offsetTop;
      if (scrollPosition >= offsetTop) {
        return section === '' ? 'home' : section;
      }
    }
  }
  
  return 'home';
};


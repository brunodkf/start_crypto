import { MouseEvent } from 'react';

export const useSmoothScroll = (offset: number = 0) => {
  return (e: MouseEvent, sectionId: string) => {
    e.preventDefault();

    const section = document.getElementById(sectionId);

    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    
  };
};

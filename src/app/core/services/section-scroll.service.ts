import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SectionScrollService {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (!element) {
      console.warn(`[scrollToSection] section introuvable: ${sectionId}`);
      return;
    }

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    history.replaceState(null, '', `${window.location.pathname}#${sectionId}`);
  }

  goToNextSection(currentSectionId: string): void {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
    const currentIndex = sections.findIndex((section) => section.id === currentSectionId);
    const nextSection = sections[currentIndex + 1];

    if (!nextSection) {
      console.warn(`[goToNextSection] aucune section suivante après ${currentSectionId}`);
      return;
    }

    nextSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    history.replaceState(null, '', `${window.location.pathname}#${nextSection.id}`);
  }
}

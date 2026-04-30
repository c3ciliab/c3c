import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SectionScrollService {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  goToNextSection(currentSectionId: string): void {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
    const currentIndex = sections.findIndex((section) => section.id === currentSectionId);
    const nextSection = sections[currentIndex + 1];

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

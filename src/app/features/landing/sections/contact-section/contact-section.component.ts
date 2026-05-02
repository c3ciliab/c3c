import { Component, inject } from '@angular/core';
import { I18nService } from '../../../../core/services/i18n.service';
import { SectionScrollService } from '../../../../core/services/section-scroll.service';
import { SectionAnchorDirective } from '../../../../shared/directives/section-anchor.directive';
import { NextSectionButtonComponent } from '../../../../shared/ui/next-section-button/next-section-button.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [SectionAnchorDirective, NextSectionButtonComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  private readonly i18n = inject(I18nService);
  private readonly sectionScroll = inject(SectionScrollService);

  t(key: string): string {
    return this.i18n.t(key);
  }

  goTo(sectionId: string): void {
    this.sectionScroll.scrollToSection(sectionId);
  }
}

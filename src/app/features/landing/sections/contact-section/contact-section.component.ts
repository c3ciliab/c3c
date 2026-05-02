import { Component, inject } from '@angular/core';
import { I18nService } from '../../../../core/services/i18n.service';
import { SectionAnchorDirective } from '../../../../shared/directives/section-anchor.directive';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [SectionAnchorDirective],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  private readonly i18n = inject(I18nService);

  t(key: string): string {
    return this.i18n.t(key);
  }
}

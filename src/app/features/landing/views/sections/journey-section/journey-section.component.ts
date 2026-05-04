import { Component, inject } from '@angular/core';
import { I18nService } from '../../../../../core/services/i18n.service';
import { JOURNEY_DATA } from '../../../../../data/journey.data';
import { SectionAnchorDirective } from '../../../../../shared/directives/section-anchor.directive';
import { NextSectionButtonComponent } from '../../../../../shared/ui/next-section-button/next-section-button.component';

@Component({
  selector: 'app-journey-section',
  standalone: true,
  imports: [SectionAnchorDirective, NextSectionButtonComponent],
  templateUrl: './journey-section.component.html',
  styleUrl: './journey-section.component.scss',
})
export class JourneySectionComponent {
  private readonly i18n = inject(I18nService);

  readonly items = JOURNEY_DATA;

  t(key: string): string {
    return this.i18n.t(key);
  }
}

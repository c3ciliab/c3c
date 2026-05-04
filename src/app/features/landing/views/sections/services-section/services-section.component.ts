import { Component, inject } from '@angular/core';
import { I18nService } from '../../../../../core/services/i18n.service';
import { SERVICES_DATA } from '../../../../../data/services.data';
import { SectionAnchorDirective } from '../../../../../shared/directives/section-anchor.directive';
import { NextSectionButtonComponent } from '../../../../../shared/ui/next-section-button/next-section-button.component';
import { GlowCardComponent } from '../../../../../shared/ui/glow-card/glow-card.component';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [SectionAnchorDirective, NextSectionButtonComponent, GlowCardComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {
  private readonly i18n = inject(I18nService);

  readonly services = SERVICES_DATA;

  t(key: string): string {
    return this.i18n.t(key);
  }
}

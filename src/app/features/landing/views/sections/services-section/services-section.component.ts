import { Component, computed, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { I18nService } from '../../../../../core/services/i18n.service';
import { SERVICES_DATA } from '../../../../../data/services.data';
import { SectionAnchorDirective } from '../../../../../shared/directives/section-anchor.directive';
import { NextSectionButtonComponent } from '../../../../../shared/ui/next-section-button/next-section-button.component';
import { GlowCardComponent } from '../../../../../shared/ui/glow-card/glow-card.component';
import { ChipTagComponent } from '../../../../../shared/ui/chip-tag/chip-tag.component';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RouterLink, SectionAnchorDirective, NextSectionButtonComponent, GlowCardComponent, ChipTagComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {
  private readonly i18n = inject(I18nService);
  readonly currentLang = computed(() => this.i18n.lang());
  private readonly route = inject(ActivatedRoute);

  readonly services = SERVICES_DATA;

  readonly lang = computed(() => {
    const routeLang = this.route.snapshot.paramMap.get('lang');
    return routeLang === 'en' ? 'en' : 'fr';
  });

  t(key: string): string {
    return this.i18n.t(key);
  }

  label(key: string): string {
    return this.i18n.t(key);
  }
}

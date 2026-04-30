import { Component, signal, inject } from '@angular/core';
import { I18nService } from '../../../../core/services/i18n.service';
import { SectionAnchorDirective } from '../../../../shared/directives/section-anchor.directive';
import { ParallaxLayerDirective } from '../../../../shared/directives/parallax-layer.directive';
import { NextSectionButtonComponent } from '../../../../shared/ui/next-section-button/next-section-button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [SectionAnchorDirective, ParallaxLayerDirective, NextSectionButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  protected readonly title = signal('c3c');

  private readonly i18n = inject(I18nService);

  t(key: string): string {
    return this.i18n.t(key);
  }
}

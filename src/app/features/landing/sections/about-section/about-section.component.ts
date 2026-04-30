import { Component, inject } from '@angular/core';
import { I18nService } from '../../../../core/services/i18n.service';
import { SectionAnchorDirective } from '../../../../shared/directives/section-anchor.directive';
import { ParallaxLayerDirective } from '../../../../shared/directives/parallax-layer.directive';
import { NextSectionButtonComponent } from '../../../../shared/ui/next-section-button/next-section-button.component';


@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [SectionAnchorDirective, ParallaxLayerDirective, NextSectionButtonComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  private readonly i18n = inject(I18nService);

  t(key: string): string {
    return this.i18n.t(key);
  }
}

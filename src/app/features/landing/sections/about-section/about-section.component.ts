import { Component, inject } from '@angular/core';
import { I18nService } from '../../../../core/services/i18n.service';
import { SKILLS_DATA } from '../../../../data/services.data';
import { SectionAnchorDirective } from '../../../../shared/directives/section-anchor.directive';
import { ParallaxLayerDirective } from '../../../../shared/directives/parallax-layer.directive';
import { SkillItem } from '../../../../core/models/service-item.model';
import { SkillItemComponent } from "../../../skill-item/skill-item.component";
import { NextSectionButtonComponent } from '../../../../shared/ui/next-section-button/next-section-button.component';


@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [SectionAnchorDirective, ParallaxLayerDirective, NextSectionButtonComponent, SkillItemComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  private readonly i18n = inject(I18nService);

  readonly skillsById: Record<string, SkillItem> = Object.fromEntries(
    SKILLS_DATA.map((skill) => [skill.id, skill]),
  );

  t(key: string): string {
    return this.i18n.t(key);
  }
}

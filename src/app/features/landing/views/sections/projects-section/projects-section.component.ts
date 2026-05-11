import { Component, computed, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { NAV_ITEMS } from '../../../../../data/navigation.data';
import { I18nService } from '../../../../../core/services/i18n.service';
import { ProjectsService } from '../../../../../core/services/projects.service';
import { SectionAnchorDirective } from '../../../../../shared/directives/section-anchor.directive';
import { NextSectionButtonComponent } from '../../../../../shared/ui/next-section-button/next-section-button.component';
import { ProjectCardComponent, CardVariant } from '../../../../../shared/ui/project-card/project-card.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [RouterLink, SectionAnchorDirective, NextSectionButtonComponent, ProjectCardComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent {
  private readonly i18n = inject(I18nService);
  readonly currentLang = computed(() => this.i18n.lang());
  private readonly projectsService = inject(ProjectsService);
  private readonly route = inject(ActivatedRoute);

  readonly items = NAV_ITEMS;
  readonly projects = this.projectsService.featuredProjects;

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

  cardVariant(index: number): CardVariant {
    if (index === 0) return 'left';
    if (index === 1) return 'center';
    if (index === 2) return 'right';
    return 'right';
  }
}

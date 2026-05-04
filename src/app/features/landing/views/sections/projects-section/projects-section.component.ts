import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { I18nService } from '../../../../../core/services/i18n.service';
import { ProjectsService } from '../../../../../core/services/projects.service';
import { SectionAnchorDirective } from '../../../../../shared/directives/section-anchor.directive';
import { NextSectionButtonComponent } from '../../../../../shared/ui/next-section-button/next-section-button.component';
import { ProjectCardComponent } from '../../../../../shared/ui/project-card/project-card.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [SectionAnchorDirective, NextSectionButtonComponent, ProjectCardComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent {
  private readonly i18n = inject(I18nService);
  private readonly projectsService = inject(ProjectsService);
  private readonly route = inject(ActivatedRoute);

  readonly lang = computed(() => {
    const routeLang = this.route.snapshot.paramMap.get('lang');
    return routeLang === 'en' ? 'en' : 'fr';
  });

  readonly projects = this.projectsService.featuredProjects;

  t(key: string): string {
    return this.i18n.t(key);
  }
}

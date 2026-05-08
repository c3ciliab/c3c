import { Component, OnInit, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { I18nService } from '../../../../core/services/i18n.service';
import { ProjectsService } from '../../../../core/services/projects.service';
import { AppShellComponent } from '../../../../core/layout/app-shell/app-shell.component';
import { ProjectCardComponent } from '../../../../shared/ui/project-card/project-card.component';

@Component({
  selector: 'app-portfolio-full-page',
  standalone: true,
  imports: [AppShellComponent, ProjectCardComponent, RouterLink],
  templateUrl: './portfolio-full-page.component.html',
  styleUrl: './portfolio-full-page.component.scss',
})
export class PortfolioFullPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly i18n = inject(I18nService);
  private readonly projectsService = inject(ProjectsService);

  readonly ready = computed(() => this.i18n.loaded());

  readonly currentLang = computed(() => {
    const lang = this.route.snapshot.paramMap.get('lang');
    return lang === 'en' ? 'en' : 'fr';
  });

  readonly lang = computed(() => {
    const routeLang = this.route.snapshot.paramMap.get('lang');
    return routeLang === 'en' ? 'en' : 'fr';
  });

  async ngOnInit(): Promise<void> {
    const lang = this.route.snapshot.paramMap.get('lang') ?? undefined;
    await this.i18n.init(lang);

    if (lang !== 'fr' && lang !== 'en') {
      await this.router.navigate(['/fr/full-portfolio']);
    }
  }

  readonly projects = this.projectsService.projects;

  t(key: string): string {
    return this.i18n.t(key);
  }

  label(key: string): string {
    return this.i18n.t(key);
  }
}


import { Injectable, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

export type AppLang = 'fr' | 'en';
export type RouteMode = 'portfolio' | 'standalone';

export enum SecondaryPage {
  AnotherUniverse = 'another-universe',
  ServicesFull = 'all-services',
  PortfolioFull = 'full-portfolio',
  ProjectDetail = 'project-detail',
  Cv = 'cv',
}

@Injectable({ providedIn: 'root' })
export class RouteContextService {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly langSignal = signal<AppLang>('fr');
  private readonly modeSignal = signal<RouteMode>('portfolio');
  private readonly fragmentSignal = signal<string | null>(null);
  private readonly secondaryPageSignal = signal<SecondaryPage | null>(null);
  private readonly projectSlugSignal = signal<string | null>(null);

  readonly currentLang = computed(() => this.langSignal());
  readonly mode = computed(() => this.modeSignal());
  readonly secondaryPage = computed(() => this.secondaryPageSignal());
  readonly currentFragment = computed(() => this.fragmentSignal());
  readonly currentProjectSlug = computed(() => this.projectSlugSignal());

  readonly isPortfolio = computed(() => this.modeSignal() === 'portfolio');
  readonly isStandalone = computed(() => this.modeSignal() === 'standalone');
  readonly isProjectDetail = computed(
    () => this.secondaryPageSignal() === SecondaryPage.ProjectDetail,
  );

  constructor() {
    this.updateFromUrl(this.router.url);

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.updateFromUrl(event.urlAfterRedirects);
      });
  }

  private updateFromUrl(url: string): void {
    const [pathPart, fragmentPart] = url.split('#');
    const segments = pathPart.split('/').filter(Boolean);

    const maybeLang = segments[0];
    const lang: AppLang = maybeLang === 'en' ? 'en' : 'fr';

    const childPath = segments[1] ?? null;
    const slug = segments[2] ?? null;

    let mode: RouteMode = 'portfolio';
    let secondaryPage: SecondaryPage | null = null;
    let projectSlug: string | null = null;

    if (childPath === 'another-universe') {
      mode = 'standalone';
      secondaryPage = SecondaryPage.AnotherUniverse;
    } else if (childPath === 'all-services') {
      mode = 'standalone';
      secondaryPage = SecondaryPage.ServicesFull;
    } else if (childPath === 'full-portfolio') {
      mode = 'standalone';
      secondaryPage = SecondaryPage.PortfolioFull;
    } else if (childPath === 'project') {
      mode = 'standalone';
      secondaryPage = SecondaryPage.ProjectDetail;
      projectSlug = slug;
    } else if (childPath === 'cv') {
      mode = 'standalone';
      secondaryPage = SecondaryPage.Cv;
    }

    this.langSignal.set(lang);
    this.modeSignal.set(mode);
    this.secondaryPageSignal.set(secondaryPage);
    this.fragmentSignal.set(fragmentPart ?? null);
    this.projectSlugSignal.set(projectSlug);
  }
}

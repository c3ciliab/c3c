import { Injectable, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

export type AppLang = 'fr' | 'en';
export type RouteMode = 'portfolio' | 'standalone';
export type SecondaryPage = 'another-universe' | null;

@Injectable({ providedIn: 'root' })
export class RouteContextService {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly langSignal = signal<AppLang>('fr');
  private readonly modeSignal = signal<RouteMode>('portfolio');
  private readonly secondaryPageSignal = signal<SecondaryPage>(null);
  private readonly fragmentSignal = signal<string | null>(null);

  readonly currentLang = computed(() => this.langSignal());
  readonly mode = computed(() => this.modeSignal());
  readonly secondaryPage = computed(() => this.secondaryPageSignal());
  readonly currentFragment = computed(() => this.fragmentSignal());

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

    let mode: RouteMode = 'portfolio';
    let secondaryPage: SecondaryPage = null;

    if (childPath === 'another-universe') {
      mode = 'standalone';
      secondaryPage = 'another-universe';
    }

    this.langSignal.set(lang);
    this.modeSignal.set(mode);
    this.secondaryPageSignal.set(secondaryPage);
    this.fragmentSignal.set(fragmentPart ?? null);
  }
}

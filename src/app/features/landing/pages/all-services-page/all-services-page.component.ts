import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { I18nService } from '../../../../core/services/i18n.service';
import { AppShellComponent } from '../../../../core/layout/app-shell/app-shell.component';

@Component({
  selector: 'app-all-services-page',
  imports: [AppShellComponent, RouterLink],
  templateUrl: './all-services-page.component.html',
  styleUrl: './all-services-page.component.scss',
})
export class AllServicesPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly i18n = inject(I18nService);

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
      await this.router.navigate(['/fr/all-services']);
    }
  }

  t(key: string): string {
    return this.i18n.t(key);
  }

  label(key: string): string {
    return this.i18n.t(key);
  }
}

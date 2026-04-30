import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { I18nService, AppLang } from '../../services/i18n.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
  private readonly i18n = inject(I18nService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly currentLang = computed(() => this.i18n.lang());

  async switchTo(lang: AppLang): Promise<void> {
    const currentFragment = window.location.hash.replace('#', '');
    await this.i18n.setLang(lang);
    await this.router.navigate(['/', lang], {
      fragment: currentFragment || 'home',
    });
  }
}

import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { I18nService, AppLang } from '../../services/i18n.service';
import { RouteContextService } from '../../services/route-context.service';

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
  private readonly routeContext = inject(RouteContextService);

  readonly currentLang = computed(() => this.i18n.lang());

  async switchTo(lang: AppLang): Promise<void> {
    const currentFragment = window.location.hash.replace('#', '');
    const mode = this.routeContext.mode();
    const secondaryPage = this.routeContext.secondaryPage();
    const fragment = this.routeContext.currentFragment();

    await this.i18n.setLang(lang);

    if (mode === 'standalone' && secondaryPage === 'another-universe') {
      await this.router.navigate(['/', lang, 'another-universe']);
      return;
    }

    await this.router.navigate(['/', lang], {
      fragment: currentFragment || 'home',
      //fragment: fragment || undefined,
    });
  }
}

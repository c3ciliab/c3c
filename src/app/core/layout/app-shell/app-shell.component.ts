import { Component, Input, signal, computed, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { LeftSideNavComponent } from '../left-side-nav/left-side-nav.component';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { PspadButtonComponent } from "../../../shared/ui/pspad-button/pspad-button.component";

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    LeftSideNavComponent,
    LanguageSwitcherComponent,
    PspadButtonComponent
],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
})
export class AppShellComponent {
  @Input() mode: 'portfolio' | 'standalone' = 'portfolio';
  @Input() showLanguageSwitcher = false;

  readonly isMenuOpen = signal(true);

  private readonly route = inject(ActivatedRoute);
  private readonly i18n = inject(I18nService);

  readonly ready = computed(() => this.i18n.loaded());

  readonly currentLang = computed(() => {
    const lang = this.route.snapshot.paramMap.get('lang');
    return lang === 'en' ? 'en' : 'fr';
  });

  toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }
}

import { Component, Input, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
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

  readonly isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }
}

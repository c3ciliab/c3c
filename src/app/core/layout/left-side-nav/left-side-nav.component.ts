import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NAV_ITEMS } from '../../../data/navigation.data';
import { ActiveSectionService } from '../../services/active-section.service';
import { I18nService } from '../../services/i18n.service';
import { SectionScrollService } from '../../services/section-scroll.service';

@Component({
  selector: 'app-left-side-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './left-side-nav.component.html',
  styleUrl: './left-side-nav.component.scss',
})
export class LeftSideNavComponent {
  private readonly i18n = inject(I18nService);
  private readonly activeSection = inject(ActiveSectionService);
  private readonly sectionScroll = inject(SectionScrollService);
  private readonly router = inject(Router);

  readonly items = NAV_ITEMS;
  readonly activeId = computed(() => this.activeSection.activeSection());

  readonly currentUrl = computed(() => this.router.url);

  readonly currentLang = computed<'fr' | 'en'>(() => {
    const firstSegment = this.router.url.split('/')[1];
    return firstSegment === 'en' ? 'en' : 'fr';
  });

  readonly navMode = computed<'portfolio' | 'standalone'>(() => {
    return this.router.url.includes('/another-universe')
      ? 'standalone'
      : 'portfolio';
  });

  readonly standaloneActiveKey = computed<'portfolio' | 'journey' | 'another-universe'>(() => {
    if (this.router.url.includes('/another-universe')) {
      return 'another-universe';
    }

    if (this.router.url.includes('#journey')) {
      return 'journey';
    }

    return 'portfolio';
  });

  label(key: string): string {
    return this.i18n.t(key);
  }

  goTo(sectionId: string): void {
    if (this.navMode() !== 'portfolio') return;
    if (this.activeId() === sectionId) return;

    this.sectionScroll.scrollToSection(sectionId);
    history.replaceState(null, '', `${window.location.pathname}#${sectionId}`);
  }
}

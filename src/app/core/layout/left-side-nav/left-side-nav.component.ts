import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NAV_ITEMS } from '../../../data/navigation.data';
import { ActiveSectionService } from '../../services/active-section.service';
import { I18nService } from '../../services/i18n.service';
import { SectionScrollService } from '../../services/section-scroll.service';

@Component({
  selector: 'app-left-side-nav',
  standalone: true,
  imports: [],
  templateUrl: './left-side-nav.component.html',
  styleUrl: './left-side-nav.component.scss',
})
export class LeftSideNavComponent {
  private readonly i18n = inject(I18nService);
  private readonly activeSection = inject(ActiveSectionService);
  private readonly sectionScroll = inject(SectionScrollService);
  private readonly router = inject(Router);

  readonly items = NAV_ITEMS;
  readonly currentLang = computed(() => this.i18n.lang());
  readonly activeId = computed(() => this.activeSection.activeSection());

  label(key: string): string {
    return this.i18n.t(key);
  }

  goTo(sectionId: string): void {
    this.sectionScroll.scrollToSection(sectionId);
    history.replaceState(null, '', `${window.location.pathname}#${sectionId}`);
  }
}

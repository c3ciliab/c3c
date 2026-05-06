import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NAV_ITEMS } from '../../../data/navigation.data';
import { ActiveSectionService } from '../../services/active-section.service';
import { I18nService } from '../../services/i18n.service';
import { RouteContextService } from '../../services/route-context.service';
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
  readonly routeContext = inject(RouteContextService);

  readonly items = NAV_ITEMS;
  readonly activeId = computed(() => this.activeSection.activeSection());

  readonly navMode = computed(() => this.routeContext.mode());
  readonly currentLang = computed(() => this.routeContext.currentLang());
  readonly currentFragment = computed(() => this.routeContext.currentFragment());
  readonly secondaryPage = computed(() => this.routeContext.secondaryPage());

  readonly standaloneActiveKey = computed<'portfolio' | 'journey' | 'another-universe'>(() => {
    if (this.secondaryPage() === 'another-universe') {
      return 'another-universe';
    }

    if (this.currentFragment() === 'journey') {
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
    //history.replaceState(null, '', `${window.location.pathname}#${sectionId}`);
  }

  isParentActive(itemId: string): boolean {
    if (this.navMode() === 'portfolio') {
      return this.activeId() === itemId;
    }

    return (
      itemId === 'portfolio' &&
      this.secondaryPage() === 'full-portfolio'
    );
  }

  isChildActive(childId: string): boolean {
    return this.secondaryPage() === childId;
  }
}

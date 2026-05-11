import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NAV_ITEMS } from '../../../data/navigation.data';
import { ActiveSectionService } from '../../services/active-section.service';
import { I18nService } from '../../services/i18n.service';
import { ProjectsService } from '../../services/projects.service';
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
  private readonly projectsService = inject(ProjectsService);
  private readonly router = inject(Router);

  readonly routeContext = inject(RouteContextService);
  readonly items = NAV_ITEMS;
  readonly isMenuOpen = signal(true);

  readonly activeId = computed(() => this.activeSection.activeSection());
  readonly navMode = computed(() => this.routeContext.mode());
  readonly currentLang = computed(() => this.routeContext.currentLang());
  readonly currentFragment = computed(() => this.routeContext.currentFragment());
  readonly secondaryPage = computed(() => this.routeContext.secondaryPage());
  readonly currentProjectSlug = computed(() => this.routeContext.currentProjectSlug());

  readonly currentProjectTitle = computed(() => {
    const slug = this.currentProjectSlug();
    if (!slug) return null;

    const project = this.projectsService.getProjectBySlug(slug);
    return project?.id ?? slug;
  });

  readonly standaloneActiveKey = computed<
    'portfolio' | 'journey' | 'another-universe' | 'all-services' | 'full-portfolio' | 'project'
  >(() => {
    if (this.secondaryPage() === 'another-universe') {
      return 'another-universe';
    }

    if (this.secondaryPage() === 'all-services') {
      return 'all-services';
    }

    if (this.secondaryPage() === 'full-portfolio') {
      return 'full-portfolio';
    }

    if (this.secondaryPage() === 'project-detail') {
      return 'project';
    }

    if (this.currentFragment() === 'journey') {
      return 'journey';
    }

    return 'portfolio';
  });

  label(key: string): string {
    return this.i18n.t(key);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
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

    const portfolioChildren = ['project', 'full-portfolio'];
    const servicesChildren = ['all-services'];

    return (
      (itemId === 'portfolio' && portfolioChildren.includes(this.secondaryPage() ?? '')) ||
      (itemId === 'services' && servicesChildren.includes(this.secondaryPage() ?? ''))
    );
  }

  isChildActive(childId: string): boolean {
    return (
      (childId === 'another-universe' && this.secondaryPage() === 'another-universe') ||
      (childId === 'full-portfolio' && this.secondaryPage() === 'full-portfolio') ||
      (childId === 'project' && this.secondaryPage() === 'project-detail') ||
      (childId === 'all-services' && this.secondaryPage() === 'all-services')
    );
  }
}

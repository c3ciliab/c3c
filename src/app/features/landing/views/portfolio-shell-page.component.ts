import { Component, signal, OnInit, computed, inject, afterNextRender } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { I18nService } from '../../../core/services/i18n.service';
import { AppShellComponent } from '../../../core/layout/app-shell/app-shell.component';
import { SectionFrameComponent } from '../../../core/layout/section-frame/section-frame.component';
import { SectionScrollService } from '../../../core/services/section-scroll.service';

@Component({
  selector: 'portfolio-shell-page.component',
  standalone: true,
  imports: [AppShellComponent, SectionFrameComponent],
  templateUrl: './portfolio-shell-page.component.html',
  styleUrl: './portfolio-shell-page.component.scss',
})
export class PortfolioShellPageComponent implements OnInit {
  protected readonly title = signal('c3c');

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly i18n = inject(I18nService);
  private readonly sectionScroll = inject(SectionScrollService);

  readonly ready = computed(() => this.i18n.loaded());

  async ngOnInit(): Promise<void> {
    const lang = this.route.snapshot.paramMap.get('lang') ?? 'fr';
    await this.i18n.init(lang);

    if (lang !== 'fr' && lang !== 'en') {
      await this.router.navigate(['/fr']);
      return;
    }

    const fragment = this.route.snapshot.fragment;

    if (fragment) {
      afterNextRender(() => {
        this.sectionScroll.scrollToSection(fragment);
      });
    }
  }
}

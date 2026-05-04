import { Component, signal, OnInit, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppShellComponent } from '../../../core/layout/app-shell/app-shell.component';
import { I18nService } from '../../../core/services/i18n.service';

@Component({
  selector: 'portfolio-shell-page.component',
  standalone: true,
  imports: [AppShellComponent],
  templateUrl: './portfolio-shell-page.component.html',
  styleUrl: './portfolio-shell-page.component.scss',
})
export class PortfolioShellPageComponent implements OnInit {
  protected readonly title = signal('c3c');

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly i18n = inject(I18nService);

  readonly ready = computed(() => this.i18n.loaded());

  async ngOnInit(): Promise<void> {
    const lang = this.route.snapshot.paramMap.get('lang') ?? 'fr';
    await this.i18n.init(lang);

    if (lang !== 'fr' && lang !== 'en') {
      await this.router.navigate(['/fr']);
    }
  }
}

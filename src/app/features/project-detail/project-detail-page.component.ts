import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectsService } from '../../core/services/projects.service';
import { AppShellComponent } from '../../core/layout/app-shell/app-shell.component';
import { ChipTagComponent } from '../../shared/ui/chip-tag/chip-tag.component';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  imports: [RouterLink, AppShellComponent, ChipTagComponent],
  templateUrl: './project-detail-page.component.html',
  styleUrl: './project-detail-page.component.scss',
})
export class ProjectDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly projectsService = inject(ProjectsService);

  readonly lang = computed(() => {
    const routeLang = this.route.snapshot.paramMap.get('lang');
    return routeLang === 'en' ? 'en' : 'fr';
  });

  readonly project = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    return this.projectsService.getProjectBySlug(slug);
  });
}

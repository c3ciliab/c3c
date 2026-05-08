import { Component, computed, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../../core/services/i18n.service';
import { ProjectItem } from '../../../core/models/project-item.model';
import { ChipTagComponent } from '../chip-tag/chip-tag.component';
import { CardScreenComponent } from '../card-screen/card-screen.component';

export type CardVariant = 'left' | 'right' | 'center';
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink, ChipTagComponent, CardScreenComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: ProjectItem;
  @Input() lang: 'fr' | 'en' = 'fr';
  @Input() index = 0;
  @Input() variant: CardVariant = 'center';

  private readonly i18n = inject(I18nService);
  readonly currentLang = computed(() => this.i18n.lang());
}

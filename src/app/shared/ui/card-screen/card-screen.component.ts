import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectItem } from '../../../core/models/project-item.model';

export type CardVariant = 'left' | 'center' | 'right';

@Component({
  selector: 'app-card-screen',
  imports: [RouterLink],
  templateUrl: './card-screen.component.html',
  styleUrl: './card-screen.component.scss',
})
export class CardScreenComponent {
  @Input({ required: true }) project!: ProjectItem;
  @Input() lang: 'fr' | 'en' = 'fr';
  @Input() variant: CardVariant = 'center';
}

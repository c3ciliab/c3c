import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectItem } from '../../../core/models/project-item.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: ProjectItem;
  @Input() lang: 'fr' | 'en' = 'fr';
}

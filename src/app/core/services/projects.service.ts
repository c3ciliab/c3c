import { Injectable, computed, signal } from '@angular/core';
import { PROJECTS_DATA } from '../../data/projects.data';
import { ProjectItem } from '../models/project-item.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly projectsSignal = signal<ProjectItem[]>(PROJECTS_DATA);

  readonly projects = computed(() => this.projectsSignal());
  readonly featuredProjects = computed(() =>
    this.projectsSignal().filter((project) => project.featured),
  );

  getProjectBySlug(slug: string): ProjectItem | undefined {
    return this.projectsSignal().find((project) => project.slug === slug);
  }
}

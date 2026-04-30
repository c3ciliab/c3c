import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'fr',
  }, /*
  {
    path: ':lang',
    loadComponent: () =>
      import('./features/landing/pages/portfolio-shell-page.component').then(
        (m) => m.PortfolioShellPageComponent,
      ),
  },
  {
    path: ':lang/project/:slug',
    loadComponent: () =>
      import('./features/project-detail/project-detail-page.component').then(
        (m) => m.ProjectDetailPageComponent,
      ),
  },*/
  {
    path: '**',
    redirectTo: 'fr',
  },
];

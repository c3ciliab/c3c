import { Routes } from '@angular/router';
//import { PortfolioShellPageComponent } from './features/landing/views/portfolio-shell-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'fr',
  },
  {
    path: ':lang',
    loadComponent: () =>
      import('./features/landing/views/portfolio-shell-page.component').then(
        (m) => m.PortfolioShellPageComponent,
      ),
  },/*
  {
    path: ':lang',
    component: PortfolioShellPageComponent,
  },*/
  {
    path: ':lang/project/:slug',
    loadComponent: () =>
      import('./features/project-detail/project-detail-page.component').then(
        (m) => m.ProjectDetailPageComponent,
      ),
  },
  {
    path: '**',
    redirectTo: 'fr',
  },
];

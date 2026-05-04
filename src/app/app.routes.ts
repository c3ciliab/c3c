import { Routes } from '@angular/router';
//import { PortfolioShellPageComponent } from './features/landing/views/portfolio-shell-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'fr',
  },
  {
    path: ':lang/project/:slug',
    loadComponent: () =>
      import('./features/project-detail/project-detail-page.component').then(
        (m) => m.ProjectDetailPageComponent,
      ),
  },
  {
    path: ':lang/another-universe',
    loadComponent: () =>
      import('./features/landing/pages/another-universe-page/another-universe-page.component').then(
        (m) => m.AnotherUniversePageComponent,
      ),
  },
  {
    path: 'another-universe',
    pathMatch: 'full',
    redirectTo: 'fr/another-universe',
  },
  {
    path: ':lang',
    loadComponent: () =>
      import('./features/landing/views/portfolio-shell-page.component').then(
        (m) => m.PortfolioShellPageComponent,
      ),
  },
  /* {
    path: ':lang',
    component: PortfolioShellPageComponent,
  }, */
  {
    path: '**',
    redirectTo: 'fr',
  },
];

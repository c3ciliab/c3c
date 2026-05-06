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
    path: ':lang/full-portfolio',
    loadComponent: () =>
      import('./features/landing/pages/portfolio-full-page/portfolio-full-page.component').then(
        (m) => m.PortfolioFullPageComponent,
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
    path: 'full-portfolio',
    pathMatch: 'full',
    redirectTo: 'fr/full-portfolio',
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

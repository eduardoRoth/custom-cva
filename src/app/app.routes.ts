import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/validate-input/validate-input.page').then(
        (c) => c.ValidateInputPage,
      ),
  },
];

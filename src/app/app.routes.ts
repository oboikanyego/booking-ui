import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadChildren: () =>
      import('./pages/bookings/bookings')
        .then(m => m.Bookings),
  },
  {
  path: 'dashboard',
  loadComponent: () =>
    import('./pages/dashboard/dashboard')
      .then(m => m.Dashboard),
},{
    path: 'bookings',
    loadChildren: () =>
      import('./pages/bookings/bookings')
        .then(m => m.Bookings),
  },
  {
    path: '**',
    redirectTo: 'bookings',
  }
];

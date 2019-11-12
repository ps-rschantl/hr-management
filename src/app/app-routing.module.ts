import { AuthLayoutComponent } from './core/components/layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './core/components/layout/content-layout/content-layout.component';
import { AuthGuard } from './core/guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'employees',
        loadChildren: () =>
          import('./modules/employees/employees.module').then((m) => m.EmployeesModule),
      },
    ],
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

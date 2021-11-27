import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth/auth.guard';
import { HomeComponent } from './theme/views/home/home.component';
import { PageNotFoundComponent } from './theme/views/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    data: { animation: 'users' }
  },
  {
    path: 'bets',
    loadChildren: () => import('./bets/bets.module').then(m => m.BetsModule),
    canActivate: [AuthGuard],
    data: { animation: 'bets' }
  },
  { path: '**', component: PageNotFoundComponent, data: { animation: 'notFound' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

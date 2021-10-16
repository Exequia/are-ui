import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetsDashboardComponent } from './views/bets-dashboard/bets-dashboard.component';
import { BetsNewComponent } from './views/bets-new/bets-new.component';
import { BetsOpensComponent } from './views/bets-opens/bets-opens.component';
import { BetsResultsComponent } from './views/bets-results/bets-results.component';
import { BetsCreationComponent } from './views/bets-creation/bets-creation.component';
import { BetsBetComponent } from './views/bets-bet/bets-bet.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bets'
  },
  {
    path: 'bets',
    component: BetsDashboardComponent
  },
  {
    path: 'new',
    component: BetsNewComponent
  },
  {
    path: 'creation',
    component: BetsCreationComponent
  },
  {
    path: 'opens',
    component: BetsOpensComponent
  },
  {
    path: 'results',
    component: BetsResultsComponent
  },
  {
    path: 'bet',
    component: BetsBetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetsRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CLOSE } from 'app/shared/global.constants';
import { AllBetsComponent } from './views/all-bets/all-bets.component';
import { BetsBetComponent } from './views/bets-bet/bets-bet.component';
import { BetsClosedComponent } from './views/bets-closed/bets-closed.component';
import { BetsCreationComponent } from './views/bets-creation/bets-creation.component';
import { BetsDashboardComponent } from './views/bets-dashboard/bets-dashboard.component';
import { BetsNewComponent } from './views/bets-new/bets-new.component';
import { BetsOpensComponent } from './views/bets-opens/bets-opens.component';

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
    path: 'all-bets/:betId',
    component: AllBetsComponent
  },
  {
    path: 'closed',
    component: BetsClosedComponent
  },
  {
    path: 'result/:betId',
    component: AllBetsComponent
  },
  {
    path: 'bet',
    component: BetsBetComponent
  },
  {
    path: 'close',
    component: BetsBetComponent,
    data: { action: CLOSE }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetsRoutingModule {}

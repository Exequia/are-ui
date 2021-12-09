import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { BetsRoutingModule } from './bets-routing.module';
import { AllBetsComponent } from './views/all-bets/all-bets.component';
import { BetsBetComponent } from './views/bets-bet/bets-bet.component';
import { BetsClosedComponent } from './views/bets-closed/bets-closed.component';
import { BetsCreationComponent } from './views/bets-creation/bets-creation.component';
import { BetsDashboardComponent } from './views/bets-dashboard/bets-dashboard.component';
import { BetsNewComponent } from './views/bets-new/bets-new.component';
import { BetsOpensComponent } from './views/bets-opens/bets-opens.component';
import { BetsResultsComponent } from './views/bets-results/bets-results.component';

@NgModule({
  declarations: [
    BetsDashboardComponent,
    BetsNewComponent,
    BetsOpensComponent,
    BetsResultsComponent,
    BetsCreationComponent,
    BetsBetComponent,
    AllBetsComponent,
    BetsClosedComponent
  ],
  imports: [CommonModule, BetsRoutingModule, SharedModule]
})
export class BetsModule {}

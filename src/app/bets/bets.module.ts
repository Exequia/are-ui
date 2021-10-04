import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetsRoutingModule } from './bets-routing.module';
import { BetsDashboardComponent } from './views/bets-dashboard/bets-dashboard.component';
import { SharedModule } from 'app/shared/shared.module';
import { BetsNewComponent } from './views/bets-new/bets-new.component';
import { BetsOpensComponent } from './views/bets-opens/bets-opens.component';
import { BetsResultsComponent } from './views/bets-results/bets-results.component';
import { BetsCreationComponent } from './views/bets-creation/bets-creation.component';
import { BetsBetComponent } from './views/bets-bet/bets-bet.component';

@NgModule({
  declarations: [BetsDashboardComponent, BetsNewComponent, BetsOpensComponent, BetsResultsComponent, BetsCreationComponent, BetsBetComponent],
  imports: [CommonModule, BetsRoutingModule, SharedModule]
})
export class BetsModule {}

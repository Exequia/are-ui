import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Bet } from 'app/bets/models/bet';
import { DATE_FORMAT } from 'app/shared/global.constants';
import { Observable } from 'rxjs';
import * as fromRoot from 'store';

@Component({
  selector: 'are-bets-results',
  templateUrl: './bets-results.component.html',
  styleUrls: ['./bets-results.component.scss']
})
export class BetsResultsComponent implements OnInit {
  closedBets: Observable<Bet[] | undefined> = this.store.select(fromRoot.getClosedBets);

  constructor(private store: Store<fromRoot.RootState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromRoot.loadClosedBets());
  }

  selectBet(selectedBet: Bet) {
    // this.store.dispatch(fromRoot.setSelectedBet({ selectedBet }));
    this.store.dispatch(fromRoot.Navigate({ path: [`/bets/result/${selectedBet?.config?.id}`] }));
  }

  // closeBet(selectedBet: Bet) {
  //   selectedBet.config.formlyData.model = {};
  //   selectedBet.config.endDate = new Date();
  //   this.store.dispatch(fromRoot.setSelectedBet({ selectedBet }));
  //   this.store.dispatch(fromRoot.Navigate({ path: ['/bets/close'] }));
  // }

  getFormatDate(): string {
    return DATE_FORMAT;
  }
}

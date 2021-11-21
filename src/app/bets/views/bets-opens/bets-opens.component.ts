import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Bet } from 'app/bets/models/bet';
import { DATE_FORMAT } from 'app/shared/global.constants';
import { Observable } from 'rxjs';
import * as fromRoot from 'store';

@Component({
  selector: 'are-bets-opens',
  templateUrl: './bets-opens.component.html',
  styleUrls: ['./bets-opens.component.scss']
})
export class BetsOpensComponent implements OnInit {
  openBets: Observable<Bet[] | undefined> = this.store.select(fromRoot.getOpenBets);

  constructor(private store: Store<fromRoot.RootState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromRoot.loadOpenBets());
  }

  selectBet(selectedBet: Bet) {
    this.store.dispatch(fromRoot.setSelectedBet({ selectedBet }));
    this.store.dispatch(fromRoot.Navigate({ path: ['/bets/bet'] }));
  }

  closeBet(selectedBet: Bet) {
    selectedBet.config.formlyData.model = {};
    selectedBet.config.endDate = new Date();
    this.store.dispatch(fromRoot.setSelectedBet({ selectedBet }));
    this.store.dispatch(fromRoot.Navigate({ path: ['/bets/close'] }));
  }

  getFormatDate(): string {
    return DATE_FORMAT;
  }
}

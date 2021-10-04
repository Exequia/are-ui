import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Bet } from 'app/bets/models/bet';
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
}

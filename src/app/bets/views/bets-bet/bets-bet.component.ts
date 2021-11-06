import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Bet } from 'app/bets/models/bet';
import { Observable } from 'rxjs';
import * as fromRoot from 'store';

@Component({
  selector: 'are-bets-bet',
  templateUrl: './bets-bet.component.html',
  styleUrls: ['./bets-bet.component.scss']
})
export class BetsBetComponent implements OnInit {
  bet: Observable<Bet | undefined> = this.store.select(fromRoot.getSelectedBet);

  constructor(private store: Store<fromRoot.RootState>) {}

  ngOnInit(): void {}

  submit(bet: Bet) {
    if (bet.config.formlyData.form.valid) {
      alert(JSON.stringify(bet.config.formlyData.model));
    }
  }
}

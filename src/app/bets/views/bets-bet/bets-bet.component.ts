import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Bet, BetDataRequest } from 'app/bets/models/bet';
import { CLOSE, DATE_FORMAT } from 'app/shared/global.constants';
import { Observable } from 'rxjs';
import * as fromRoot from 'store';

@Component({
  selector: 'are-bets-bet',
  templateUrl: './bets-bet.component.html',
  styleUrls: ['./bets-bet.component.scss']
})
export class BetsBetComponent implements OnInit {
  bet: Observable<Bet | undefined> = this.store.select(fromRoot.getSelectedBet);
  action: string = '';

  constructor(private store: Store<fromRoot.RootState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(values => (this.action = values?.action)).unsubscribe();
  }

  submit(bet: Bet) {
    if (bet.config.formlyData.form.valid) {
      const betDataRequest: BetDataRequest = {
        betId: bet?.config?.id,
        model: JSON.stringify(bet.config.formlyData.model)
      };
      this.action === CLOSE ? this.store.dispatch(fromRoot.closeBet({ betDataRequest })) : this.store.dispatch(fromRoot.addBet({ betDataRequest }));
    }
  }

  getFormatDate(): string {
    return DATE_FORMAT;
  }
}

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { DataTable } from 'app/shared/models/dataTable';
import { Observable, of } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import * as fromRoot from 'store';
import { Bet } from '../models/bet';
import { BetProfile } from '../models/betProfile';
import { BetsUtilsService } from './bets-utils.service';

@Injectable({
  providedIn: 'root'
})
export class BetsFacadeService {
  constructor(private store: Store<fromRoot.RootState>, private betsUtils: BetsUtilsService, private translate: TranslateService) {}

  getSelectedProfile(): Observable<Bet | undefined> {
    return this.store.pipe(
      withLatestFrom(this.store.select(fromRoot.getSelectedProfile), this.store.select(fromRoot.getUser)),
      map(([store, profile, user]) => {
        return this.betsUtils.getBetFromProfile(profile, user);
      })
    );
  }

  fillProfileWithModel(profile: BetProfile, model: any): Observable<Bet> {
    const bet = this.betsUtils.getBetFromProfile(profile);
    bet.config.formlyData.model = model;
    return of(bet);
  }

  getBetResults(selector: any): Observable<DataTable> {
    return this.store.pipe(
      select(selector),
      map(betResponse => this.betsUtils.castBetResponseToTableData(betResponse))
    );
  }
}

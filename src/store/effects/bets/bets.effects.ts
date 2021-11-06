import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { BetsUtilsService } from 'app/bets/services/bets-utils.service';
import { BetsService } from 'app/bets/services/bets.service';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromRoot from 'store';

@Injectable()
export class BetsEffects {
  constructor(private actions$: Actions, private store: Store<fromRoot.RootState>, private betsService: BetsService, private betsUtils: BetsUtilsService) {}

  loadOpenBets$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromRoot.loadOpenBets),
        mergeMap(() =>
          this.betsService.loadOpenBets().pipe(
            map(openBetsData => {
              const openBets = this.betsUtils.completeBet(openBetsData);
              console.log(openBets);
              return this.store.dispatch(fromRoot.setOpenBets({ openBets }));
            }),
            catchError(error => EMPTY /*this.store.dispatch(fromRoot.ErrorOnGetOpenBets(error))*/)
          )
        )
      ),
    { dispatch: false }
  );

  saveBet$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromRoot.saveBet),
        mergeMap(payload =>
          this.betsService.saveBet(payload.betRequest).pipe(
            map(response => {
              // this.toast.emit(response)
              return fromRoot.Navigate({ path: ['/bets'] });
            }),
            catchError(error => EMPTY /*this.store.dispatch(fromRoot.ErrorOnGetOpenBets(error))*/)
          )
        )
      ),
    { dispatch: false }
  );
}

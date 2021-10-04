import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { BetsService } from 'app/bets/services/bets.service';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromRoot from 'store';

@Injectable()
export class BetsEffects {
  constructor(private actions$: Actions, private store: Store<fromRoot.RootState>, private betsService: BetsService) {}

  openBets$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromRoot.loadOpenBets),
        mergeMap(() =>
          this.betsService.getOpenBets().pipe(
            map(openBets => this.store.dispatch(fromRoot.setOpenBets({ openBets }))),
            catchError(error => EMPTY /*this.store.dispatch(fromRoot.ErrorOnGetOpenBets(error))*/)
          )
        )
      ),
    { dispatch: false }
  );
}

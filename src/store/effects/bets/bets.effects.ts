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

  saveBetCreated$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromRoot.saveBetCreated),
        mergeMap(payload =>
          this.betsService.saveBetCreated(payload.betCreated).pipe(
            map(() => {
              const snackBarConfig = {
                translationPath: 'api.response.saveSuccess',
                actions: [{ label: 'bets.creation.participate', action: () => this.store.dispatch(fromRoot.Navigate({ path: ['/bets/opens'] })) }]
              };
              this.store.dispatch(fromRoot.showSnackBar({ snackBarConfig }));
              return fromRoot.Navigate({ path: ['/bets/opens'] });
            }),
            catchError(error => {
              const snackBarConfig = { translationPath: `api.errors.${error.message || 'saveFail'}` };
              this.store.dispatch(fromRoot.showSnackBar({ snackBarConfig }));
              return EMPTY;
            })
          )
        )
      ),
    { dispatch: false }
  );

  loadOpenBets$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromRoot.loadOpenBets),
        mergeMap(() =>
          this.betsService.loadOpenBets().pipe(
            map(openBetsData => {
              const openBets = this.betsUtils.completeBets(openBetsData);
              return this.store.dispatch(fromRoot.setOpenBets({ openBets }));
            })
          )
        )
      ),
    { dispatch: false }
  );

  addBet$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromRoot.addBet),
        mergeMap(payload =>
          this.betsService.addBet(payload.betDataRequest).pipe(
            map(() => {
              const snackBarConfig = {
                translationPath: 'api.response.saveSuccess'
              };
              this.store.dispatch(fromRoot.showSnackBar({ snackBarConfig }));
              this.store.dispatch(fromRoot.Navigate({ path: ['/bets/opens'] }));
              return EMPTY;
            }),
            catchError(error => {
              const snackBarConfig = { translationPath: `api.errors.${error.message || 'saveFail'}` };
              this.store.dispatch(fromRoot.showSnackBar({ snackBarConfig }));
              return EMPTY;
            })
          )
        )
      ),
    { dispatch: false }
  );

  closeBet$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromRoot.closeBet),
        mergeMap(payload =>
          this.betsService.closeBet(payload.betDataRequest).pipe(
            map(() => {
              const snackBarConfig = {
                translationPath: 'api.response.saveSuccess'
              };
              this.store.dispatch(fromRoot.showSnackBar({ snackBarConfig }));
              this.store.dispatch(fromRoot.Navigate({ path: ['/bets/opens'] }));
              return EMPTY;
            }),
            catchError(error => {
              const snackBarConfig = { translationPath: `api.errors.${error.message || 'saveFail'}` };
              this.store.dispatch(fromRoot.showSnackBar({ snackBarConfig }));
              return EMPTY;
            })
          )
        )
      ),
    { dispatch: false }
  );
}

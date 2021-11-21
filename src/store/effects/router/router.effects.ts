import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import * as fromRoot from 'store';

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private router: Router) {}

  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromRoot.Navigate),
        mergeMap(action => this.router.navigate(action.path))
      ),
    { dispatch: false }
  );
}

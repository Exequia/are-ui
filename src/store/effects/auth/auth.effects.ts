import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AuthResponse } from 'app/users/models/auth';
import { AuthService } from 'app/users/services/auth/auth.service';
import { StorageService } from 'app/users/services/storage/storage.service';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as fromRoot from 'store';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromRoot.doLogin),
      exhaustMap(payload => {
        this.store.dispatch(fromRoot.displayLoading({ display: true }));
        return this.auth.login(payload.credentials).pipe(
          map((authResponse: AuthResponse) => {
            this.store.dispatch(fromRoot.doLoginSuccess({ user: authResponse.user }));
            this.storageService.setCredentials(payload.credentials, authResponse);
            const entryRoute = this.storageService.getRedirectURL();
            this.store.dispatch(fromRoot.displayLoading({ display: false }));

            return fromRoot.Navigate(entryRoute || { path: ['/'] });
          }),
          catchError(error => {
            this.store.dispatch(fromRoot.displayLoading({ display: false }));
            return of(fromRoot.doLoginFail(error.message));
          })
        );
      })
    )
  );

  logOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromRoot.doLogOut),
      map(() => {
        this.storageService.signOut();
        return fromRoot.Navigate({ path: ['/users/login'] });
      })
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromRoot.doCreateUser),
      exhaustMap(payload => {
        return this.auth.createUser(payload.user).pipe(
          map((authResponse: AuthResponse) => {
            this.store.dispatch(fromRoot.doCreateUserSuccess({ user: authResponse.user }));
            this.storageService.setUserCredentials(authResponse);
            return fromRoot.Navigate({ path: ['/'] });
          }),
          catchError(error => of(fromRoot.doCreateUserFail(error.message)))
        );
      })
    )
  );

  saveRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromRoot.saveRedirectOnLogin),
        map(action => this.storageService.saveRedirectURL(action.redirect))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<fromRoot.RootState>, private auth: AuthService, private storageService: StorageService) {}
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AuthResponse } from 'app/users/models/auth';
import { Credentials } from 'app/users/models/credentials';
import { User } from 'app/users/models/user';
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
      exhaustMap((credentials: Credentials) => {
        return this.auth.login(credentials).pipe(
          map((authResponse: AuthResponse) => {
            this.store.dispatch(fromRoot.doLoginSuccess({ user: authResponse.user }));
            this.storageService.setCredentials(credentials, authResponse);
            return fromRoot.Navigate({ path: ['/'] });
          }),
          catchError(error => of(fromRoot.doLoginFail(error.message)))
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
      exhaustMap((user: User) => {
        return this.auth.createUser(user).pipe(
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

  constructor(private actions$: Actions, private store: Store<fromRoot.RootState>, private auth: AuthService, private storageService: StorageService) {}
}

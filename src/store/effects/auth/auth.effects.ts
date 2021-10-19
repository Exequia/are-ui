// import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthResponse } from 'app/users/models/auth';
// import { select, Store } from '@ngrx/store';
// import { TranslateService } from '@ngx-translate/core';
import { Credentials } from 'app/users/models/credentials';
import { AuthService } from 'app/users/services/auth/auth.service';
import { StorageService } from 'app/users/services/storage/storage.service';
// import { environment } from 'environments/environment';
// import { get } from 'lodash';
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
            fromRoot.doLoginSuccess({ user: authResponse.user });
            this.storageService.setCredentials(credentials, authResponse);
            return fromRoot.Navigate({ path: ['/'] });
          }),
          catchError(error => of(fromRoot.doLoginFail(error.message)))
        );
      })
    )
  );

  constructor(private actions$: Actions, private auth: AuthService, private storageService: StorageService) {}
}

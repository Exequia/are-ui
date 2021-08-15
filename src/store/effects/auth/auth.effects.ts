// import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { select, Store } from '@ngrx/store';
// import { TranslateService } from '@ngx-translate/core';
import { Credentials } from 'app/users/models/credentials';
import { AuthService } from 'app/users/services/auth/auth.service';
// import { environment } from 'environments/environment';
// import { get } from 'lodash';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as fromRoot from 'store';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromRoot.DO_LOGIN),
      // map((action: any) => action.payload),
      exhaustMap((credentials: Credentials) => {
        return this.auth.login(credentials).pipe(
          map(result => {
            console.log('login response', result), map(user => fromRoot.doLoginSuccess());
            // if (result.type === CognitoStatus.newPasswordRequired) {
            //   return new fromRoot.GotoNewPassword();
            // }
            // if (result.type === CognitoStatus.onSuccess) {
            //   return new fromRoot.DoLoginSuccess(result.user);
            // }
          }),
          catchError(error => of(fromRoot.doLoginFail(error.message)))
        );
      })
    )
  );

  constructor(private actions$: Actions, private auth: AuthService) {}
}

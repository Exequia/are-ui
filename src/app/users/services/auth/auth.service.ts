import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import * as jwtDecode from 'jwt-decode';
import { EMPTY, from, Observable } from 'rxjs';
import { catchError, delay, map, take } from 'rxjs/operators';
import * as fromRoot from 'store';
// import { errorMessageShowtime } from 'store/effects/ui/show-error';

@Injectable()
export class AuthService {
  apigClient: any;
  cognitoUser: any;
  configuration = [];
  serverName = 'cube-ui-server';

  constructor(private router: Router, private store: Store<fromRoot.AuthState>, private translate: TranslateService) {
    // Hub.listen('auth', data => {
    //   const { channel, payload } = data;
    //   if (channel === 'auth' && payload.event === 'cognitoHostedUI') {
    //     // The user has logged in with the external SSO UI and is now ready to continue DoLoginSuccess flow
    //     this.getCurrentUserInfo()
    //       .pipe(take(1))
    //       .subscribe(user => this.store.dispatch(new fromRoot.DoLoginSuccess(user)));
    //   }
    // });
  }

  // static getValueOrNull(user: any, property: string): string {
  //   if (user && user[property] && user[property] !== 'undefined') {
  //     return user[property];
  //   }
  //   return '';
  // }

  // getAuthenticationToken(): Observable<string> {
  //   return from(Auth.currentSession()).pipe(
  //     catchError(err => {
  //       this.store.dispatch(
  //         new fromRoot.AuthError({
  //           errorLabel: err,
  //           icon: 'error',
  //           duration: errorMessageShowtime.normal
  //         })
  //       );
  //       this.store.dispatch(new fromRoot.Logout());
  //       return EMPTY;
  //     }),
  //     map(session => (session && session.getIdToken()) || null),
  //     map(idToken => (idToken && idToken.getJwtToken()) || null)
  //   );
  // }

  // getCurrentUserInfo(): Observable<User> {
  //   return from(Auth.currentAuthenticatedUser()).pipe(
  //     map(user => {
  //       const userData: any = jwtDecode(user.signInUserSession.idToken.jwtToken);
  //       const userName = userData['custom:override_userid'] ? userData['custom:override_userid'] : userData['cognito:username'];
  //       const { email, family_name: surname, given_name: name } = user.attributes;
  //       return {
  //         userName,
  //         email,
  //         surname,
  //         name
  //       };
  //     })
  //   );
  // }

  // login(userName: string, password: string): Observable<CognitoUser | any> {
  //   return new Observable(observer => {
  //     Auth.signIn(userName, password)
  //       .then((sessionToken: CognitoUser | any) => {
  //         this.cognitoUser = sessionToken;
  //         if (sessionToken.challengeName) {
  //           if (sessionToken.challengeName === 'NEW_PASSWORD_REQUIRED') {
  //             observer.next({
  //               type: CognitoStatus.newPasswordRequired,
  //               result: ''
  //             });
  //           } else {
  //             observer.error({ message: `Unsupported challenge:${sessionToken.challengeName}` });
  //           }
  //         } else {
  //           if (this.getUserFromSessionToken(sessionToken)) {
  //             observer.next(this.loggedUser);
  //           } else {
  //             observer.error({ message: `Bad user:${sessionToken}` });
  //           }
  //         }
  //       })
  //       .catch(err => {
  //         observer.error(err);
  //       });
  //   });
  // }

  // forgotPassword(userName: string): Observable<CognitoResult> {
  //   return new Observable(observer => {
  //     Auth.forgotPassword(userName)
  //       .then(data => {
  //         observer.next();
  //       })
  //       .catch(err => {
  //         console.error(err);
  //         observer.error(err);
  //       });
  //   });
  // }

  // confirmNewPassword(username: string, code: string, newPassword: string): Observable<CognitoResult> {
  //   return new Observable(observer => {
  //     Auth.forgotPasswordSubmit(username, code, newPassword)
  //       .then(() => {
  //         observer.next();
  //       })
  //       .catch(err => {
  //         observer.error(err);
  //       });
  //   });
  // }

  // newPassword(creds: NewPasswordCredentials): Observable<CognitoResult> {
  //   return new Observable(observer => {
  //     if (!this.cognitoUser) {
  //       Auth.signIn(creds.userName, creds.password)
  //         .then((sessionToken: CognitoUser | any) => {
  //           this.cognitoUser = sessionToken;
  //           Auth.completeNewPassword(this.cognitoUser, creds.newPassword, {})
  //             .then(data => {
  //               if (this.getUserFromSessionToken(sessionToken)) {
  //                 observer.next(this.loggedUser);
  //               } else {
  //                 observer.error({ message: `Bad user:${sessionToken}` });
  //               }
  //             })
  //             .catch(err => {
  //               console.error(err);
  //               observer.error(this.getErrorMessage(err));
  //             });
  //         })
  //         .catch(error => {
  //           const { code, message } = error;
  //           const errorMessage = (code && code !== 'NotAuthorizedException' && message) || this.translate.instant('ERROR.AUTH.PASSWORD_LINK_EXPIRED');
  //           observer.error(errorMessage);
  //         });
  //     } else {
  //       Auth.completeNewPassword(this.cognitoUser, creds.newPassword, {})
  //         .then(sessionToken => {
  //           if (this.getUserFromSessionToken(sessionToken)) {
  //             observer.next(this.loggedUser);
  //           } else {
  //             observer.error({ message: `Bad user:${sessionToken}` });
  //           }
  //         })
  //         .catch(err => {
  //           console.error(err);
  //           observer.error(this.getErrorMessage(err));
  //         });
  //     }
  //   });
  // }

  // getErrorMessage(error) {
  //   return (isObject(error) && error.message) || error;
  // }

  // logout() {
  //   Auth.signOut({ global: true })
  //     .then(() => this.goToLogin())
  //     .catch(err => {
  //       // Globlal signout could fail if token is invalid, then ensure we do a local signout
  //       Auth.signOut().then(() => this.goToLogin());
  //     });
  // }

  // goToLogin() {
  //   this.router.navigate(['/login']);
  // }

  // private getUserFromSessionToken(token): Boolean {
  //   if (token && token.signInUserSession && token.signInUserSession.idToken && token.signInUserSession.idToken.payload) {
  //     const user = token.signInUserSession.idToken.payload;
  //     this.loggedUser = {
  //       type: CognitoStatus.onSuccess,
  //       user: {
  //         email: AuthService.getValueOrNull(user, 'email'),
  //         surname: AuthService.getValueOrNull(user, 'family_name'),
  //         name: AuthService.getValueOrNull(user, 'name'),
  //         userName: AuthService.getValueOrNull(user, 'cognito:username'),
  //         roles: null
  //       }
  //     };
  //     return true;
  //   }
  //   return false;
  // }
}

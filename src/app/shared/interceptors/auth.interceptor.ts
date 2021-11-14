import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TOKEN_HEADER_KEY, VALID_STATUS_RESPONSES } from 'app/users/services/auth/auth-constants';
import { StorageService } from 'app/users/services/storage/storage.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import * as fromRoot from 'store';

//https://www.bezkoder.com/angular-12-jwt-auth/#Authentication_Service

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService, private store: Store<fromRoot.RootState>) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request;
    const token = this.storageService.getToken();
    if (token != null) {
      authReq = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    this.store.dispatch(fromRoot.displayLoading({ display: true }));
    return next.handle(authReq).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse && VALID_STATUS_RESPONSES.includes(evt?.status)) {
          // this.toasterService.success(evt.body.success.message, evt.body.success.title, { positionClass: 'toast-bottom-center' });
          this.store.dispatch(fromRoot.displayLoading({ display: false }));
        }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          try {
            console.error(err);
            this.store.dispatch(fromRoot.displayLoading({ display: false }));
            const snackBarConfig = { translationPath: `api.errors.${err.error.message || 'general'}` };
            this.store.dispatch(fromRoot.showSnackBar({ snackBarConfig }));
          } catch (e) {
            const snackBarConfig = { translationPath: 'api.errors.general' };
            this.store.dispatch(fromRoot.showSnackBar({ snackBarConfig }));
          }
        }
        return of(err);
      })
    );
    // catchError(error => {
    //   console.error(error);
    //   this.store.dispatch(fromRoot.displayLoading({ display: false }));
    // })
    // );
  }
}

export const authInterceptorProviders = [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }];

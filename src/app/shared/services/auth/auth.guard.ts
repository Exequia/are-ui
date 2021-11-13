import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { TokenData } from 'app/users/models/auth';
import { AppData } from 'app/users/models/user';
import { UserUtils } from 'app/users/services/utils/userUtils.service';
import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import * as fromRoot from 'store';
import { SnackBarConfiguration } from 'store';
import { RouterUtils } from '../router/router.utils';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromRoot.RootState>, private userUtils: UserUtils, private translate: TranslateService, private routerUtils: RouterUtils) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userUtils.getTokenUserInfo().pipe(
      withLatestFrom(this.store.select(fromRoot.getUser)),
      map(([tokenData, userData]: [TokenData | undefined, AppData | undefined]) => {
        if (!!tokenData && !!userData && tokenData?.email === userData?.email) {
          return true;
        } else {
          this.store.dispatch(fromRoot.doLogOut());
          this.store.dispatch(fromRoot.saveRedirectOnLogin({ redirect: this.routerUtils.getUrlWithParams(route) }));
          const snackBarConfig: SnackBarConfiguration = {
            message: this.translate.instant('commons.errors.authGuard')
          };
          this.store.dispatch(fromRoot.showSnackBar({ snackBarConfig }));
          return false;
        }
      })
    );
  }
}

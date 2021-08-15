import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Credentials } from 'app/users/models/credentials';
import { Observable, of } from 'rxjs';
import * as fromRoot from 'store';

@Injectable({
  providedIn: 'root'
})
export class UserUtils {
  constructor(private store: Store<fromRoot.RootState>) {}

  getAppDataForm(): FormGroup {
    throw new Error('Method not implemented.');
  }
  getPersonalDataForm(): FormGroup {
    throw new Error('Method not implemented.');
  }

  login(credentials: Credentials): Observable<any> {
    this.store.dispatch(fromRoot.doLogin(credentials));
    return of({});
  }

  getUserForm(): FormGroup {
    throw new Error('Method not implemented.');
  }
}

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginRequest } from 'app/users/models/loginRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserUtils {
  getAppDataForm(): FormGroup {
    throw new Error('Method not implemented.');
  }
  getPersonalDataForm(): FormGroup {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  login(login: LoginRequest): Observable<any> {
    throw new Error('Method not implemented.');
  }

  getUserForm(): FormGroup {
    throw new Error('Method not implemented.');
  }
}

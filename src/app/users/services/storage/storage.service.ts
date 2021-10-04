import { Injectable } from '@angular/core';
import { Credentials } from 'app/users/models/credentials';
import { Token } from 'app/users/models/token';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  getCredentials(): Credentials {
    return <Credentials>{
      email: 'fnx@gmail.com',
      password: 'pass',
      rememberMe: true
    };
  }

  setCredentials(credentials: Credentials, token: Token) {
    if (credentials.rememberMe) {
      localStorage.setItem('userEmail', credentials.email);
      localStorage.setItem('accessToken', token.accessToken);
    } else {
      sessionStorage.setItem('userEmail', credentials.email);
      localStorage.setItem('accessToken', token.accessToken);
    }
  }
}

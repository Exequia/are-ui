import { Injectable } from '@angular/core';
import { AuthResponse } from 'app/users/models/auth';
import { Credentials } from 'app/users/models/credentials';
import { environment } from 'environments/environment';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  getCredentials(): Credentials {
    const emailStorage = sessionStorage.getItem('userEmail');
    const email = environment?.production ? '' : 'fnx@gmail.com';
    const password = environment?.production ? '' : 'pass';
    const rememberMe = environment?.production ? '' : true;

    return <Credentials>{
      email: emailStorage || email,
      password,
      rememberMe
    };
  }

  setCredentials(credentials: Credentials, authResponse: AuthResponse) {
    if (credentials.rememberMe) {
      sessionStorage.removeItem(USER_KEY);
      sessionStorage.setItem(USER_KEY, JSON.stringify(authResponse.user));
      sessionStorage.removeItem(TOKEN_KEY);
      sessionStorage.setItem(TOKEN_KEY, authResponse.accessToken);
    } else {
      this.setUserCredentials(authResponse);
    }
  }

  setUserCredentials(authResponse: AuthResponse) {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(authResponse.user));
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, authResponse.accessToken);
  }

  signOut(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  // public saveToken(token: string): void {
  //   window.sessionStorage.removeItem(TOKEN_KEY);
  //   window.sessionStorage.setItem(TOKEN_KEY, token);
  // }

  getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  // public saveUser(user: any): void {
  //   window.sessionStorage.removeItem(USER_KEY);
  //   window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  // }

  public getUser(): any {
    const user = sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}

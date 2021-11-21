import { Injectable } from '@angular/core';
import { Redirect } from 'app/shared/models/redirect';
import { AuthResponse } from 'app/users/models/auth';
import { Credentials } from 'app/users/models/credentials';
import { AppData } from 'app/users/models/user';
import { environment } from 'environments/environment';
import { REDIRECT_URL, TOKEN_KEY, USER_KEY } from './storage-constants';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  private get(key: string) {
    return localStorage.getItem(key);
  }

  private remove(key: string) {
    localStorage.removeItem(key);
  }

  private getObject(key: string): any {
    const data = localStorage.getItem(key);
    return !!data ? JSON.parse(data) : undefined;
  }

  private set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

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

  // public saveUser(user: any): void {
  //   window.sessionStorage.removeItem(USER_KEY);
  //   window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  // }

  getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public getUser(): any {
    const user = sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public saveRedirectURL(url: Redirect) {
    this.set(REDIRECT_URL, url);
  }

  public getRedirectURL() {
    const redirectURL = this.getObject(REDIRECT_URL);
    this.remove(REDIRECT_URL);
    return redirectURL;
  }

  checkSession(): AuthResponse | undefined {
    let authResponse: AuthResponse | undefined = undefined;
    const user: AppData = this.getObject(USER_KEY);
    const accessToken = this.getObject(TOKEN_KEY);
    if (!!user && !!accessToken) {
      authResponse = { user, accessToken };
    }
    return authResponse;
  }
}

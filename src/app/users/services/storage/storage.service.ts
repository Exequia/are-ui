import { Injectable } from '@angular/core';
import { Credentials } from 'app/users/models/credentials';
import { AuthResponse } from 'app/users/models/auth';
import { environment } from 'environments/environment';
import { User } from 'app/users/models/user';

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
      sessionStorage.setItem('userEmail', credentials.email);
      sessionStorage.setItem('accessToken', authResponse.accessToken);
    } else {
      localStorage.setItem('userEmail', credentials.email);
      localStorage.setItem('accessToken', authResponse.accessToken);
    }
  }

  setUserCredentials(authResponse: AuthResponse) {
    localStorage.setItem('userEmail', authResponse?.user?.email);
    localStorage.setItem('accessToken', authResponse?.accessToken);
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Credentials } from 'app/users/models/credentials';
import { AuthResponse } from 'app/users/models/auth';
import { User } from 'app/users/models/user';
import { environment } from 'environments/environment';
import * as jwtDecode from 'jwt-decode';
import { EMPTY, from, Observable, throwError } from 'rxjs';
import { catchError, delay, map, retry, take } from 'rxjs/operators';
import * as fromRoot from 'store';
// import { errorMessageShowtime } from 'store/effects/ui/show-error';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(credentials: Credentials): Observable<AuthResponse> {
    const url = `${environment.apiBaseURL}authenticate/`;
    return this.http.post<AuthResponse>(url, credentials).pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from 'app/users/models/auth';
import { Credentials } from 'app/users/models/credentials';
import { User } from 'app/users/models/user';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserUtils } from '../utils/userUtils.service';
// import { errorMessageShowtime } from 'store/effects/ui/show-error';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private userUtils: UserUtils) {}

  public login(credentials: Credentials): Observable<AuthResponse> {
    const url = `${environment.apiBaseURL}authenticate/`;
    return this.http.post<AuthResponse>(url, credentials).pipe(retry(3), catchError(this.handleError));
  }

  public createUser(user: User): Observable<AuthResponse> {
    const createUserRequest = this.userUtils.castUserToRequest(user);
    const url = `${environment.apiBaseURL}users/`;
    return this.http.post<AuthResponse>(url, createUserRequest).pipe(retry(3), catchError(this.handleError));
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

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AddBetRequest, AddBetResponse, CreateBetRequest } from '../models/bet';

@Injectable({
  providedIn: 'root'
})
export class BetsService {
  constructor(private http: HttpClient) {}

  saveBetCreated(betRequest: CreateBetRequest): Observable<CreateBetRequest> {
    const url = `${environment.apiBaseURL}bets`;
    return this.http.post<CreateBetRequest>(url, betRequest).pipe(retry(3), catchError(this.handleError));
  }

  loadOpenBets(): Observable<AddBetResponse[]> {
    const url = `${environment.apiBaseURL}bets/opens`;
    return this.http.get<AddBetResponse[]>(url).pipe(retry(3), catchError(this.handleError));
  }

  addBet(betRequest: AddBetRequest): Observable<AddBetResponse> {
    const url = `${environment.apiBaseURL}bets/add`;
    return this.http.post<AddBetResponse>(url, betRequest).pipe(retry(3), catchError(this.handleError));
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

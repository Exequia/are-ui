import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { AddBetResponse, BetDataRequest, BetResponse, CreateBetRequest } from '../models/bet';

@Injectable({
  providedIn: 'root'
})
export class BetsService {
  constructor(private http: HttpClient) {}

  saveBetCreated(betRequest: CreateBetRequest): Observable<CreateBetRequest> {
    const url = `${environment.apiBaseURL}bets`;
    return this.http.post<CreateBetRequest>(url, betRequest).pipe(retry(3));
  }

  loadOpenBets(): Observable<BetResponse[]> {
    const url = `${environment.apiBaseURL}bets`;
    return this.http.get<BetResponse[]>(url).pipe(retry(3));
  }

  addBet(betRequest: BetDataRequest): Observable<AddBetResponse> {
    const url = `${environment.apiBaseURL}bets/add`;
    return this.http.post<AddBetResponse>(url, betRequest).pipe(retry(3));
  }

  closeBet(betRequest: BetDataRequest): Observable<AddBetResponse> {
    const url = `${environment.apiBaseURL}bets/close`;
    return this.http.post<AddBetResponse>(url, betRequest).pipe(retry(3));
  }

  loadAllBets(betId: number): Observable<BetResponse> {
    const url = `${environment.apiBaseURL}bets/allBets/${betId}`;
    return this.http.get<BetResponse>(url).pipe(retry(3));
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError('Something bad happened; please try again later.');
  // }
}

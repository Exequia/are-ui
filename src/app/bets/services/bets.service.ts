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

  loadClosedBets(): Observable<BetResponse[]> {
    const url = `${environment.apiBaseURL}bets/closed`;
    return this.http.get<BetResponse[]>(url).pipe(retry(3));
  }
}

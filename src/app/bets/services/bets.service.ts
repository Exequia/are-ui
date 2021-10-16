import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, throwError } from 'rxjs';
import { Bet } from '../models/bet';
import { BetProfile } from '../models/betProfile';
import { BetId } from '../models/betType';
import { BetsUtilsService } from './bets-utils.service';

@Injectable({
  providedIn: 'root'
})
export class BetsService {
  constructor(private http: HttpClient, private betsUtils: BetsUtilsService) {}

  getBetsProfiles(): Observable<BetProfile[]> {
    const profiles: BetProfile[] = [{}];
    return of(profiles);
  }

  getOpenBets(): Observable<Bet[]> {
    const bet: Bet = {
      type: { id: BetId.pregnancy, icon: 'pregnant_woman' },
      config: {
        ownerId: 'Fénix',
        startDate: new Date(),
        endDate: new Date(),
        name: 'Embarazo Laura y Miki',
        status: {
          id: 1,
          name: 'active'
        },
        formlyData: {
          id: 'test',
          model: { name: 'Mini Mike' },
          fields: this.betsUtils.getBetProfileFields(BetId.pregnancy),
          form: new FormGroup({}),
          options: {
            formState: {
              awesomeIsForced: false
            }
          }
        }
      }
    };
    const data: Bet[] = [bet];
    return of(data);

    // const url = `${environment.apiBaseURL}bets/opens`;
    // return this.http.post<Bet[]>(url, {}).pipe(retry(3), catchError(this.handleError));
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

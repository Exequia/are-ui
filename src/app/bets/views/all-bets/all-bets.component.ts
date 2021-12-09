import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { AllBetResponse } from 'app/bets/models/bet';
import { BetsFacadeService } from 'app/bets/services/bets-facade.service';
import { DataTable } from 'app/shared/models/dataTable';
import { Observable } from 'rxjs';
import * as fromRoot from 'store';

@Component({
  selector: 'are-all-bets',
  templateUrl: './all-bets.component.html',
  styleUrls: ['./all-bets.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllBetsComponent implements AfterViewInit {
  allBetsResults: Observable<DataTable> = this.betFacade.getBetResults(fromRoot.getBetResponse);
  reorderable = true;
  ColumnMode = ColumnMode;

  constructor(private store: Store<fromRoot.RootState>, private route: ActivatedRoute, private betFacade: BetsFacadeService) {}

  ngAfterViewInit(): void {
    this.route.paramMap
      .subscribe(params => {
        const betId = Number(params.get('betId')) || 0;
        if (betId) {
          this.store.dispatch(fromRoot.loadAllBets({ betId }));
        }
      })
      .unsubscribe();
  }

  onGetRowClass(row: AllBetResponse): string {
    console.log(row);
    return row?.isResult ? 'result' : row?.isMyBet ? 'mine' : '';
  }
}

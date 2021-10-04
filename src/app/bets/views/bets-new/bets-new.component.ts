import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BetType } from 'app/bets/models/betType';
import { Observable } from 'rxjs';
import * as fromRoot from 'store';

@Component({
  selector: 'are-bets-new',
  templateUrl: './bets-new.component.html',
  styleUrls: ['./bets-new.component.scss']
})
export class BetsNewComponent implements OnInit {
  types: Observable<BetType[]> = this.store.select(fromRoot.getBetTypes);

  constructor(private store: Store<fromRoot.RootState>) {}

  ngOnInit(): void {}

  selectType(selectType: BetType) {
    if (!selectType.disabled) {
      this.store.dispatch(fromRoot.setSelectedType({ selectType }));
      this.store.dispatch(fromRoot.Navigate({ path: ['/bets/creation'] }));
    }
  }
}

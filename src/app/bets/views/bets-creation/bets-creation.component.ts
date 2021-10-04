import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BetType } from 'app/bets/models/betType';
import { Observable } from 'rxjs';
import * as fromRoot from 'store';

@Component({
  selector: 'are-bets-creation',
  templateUrl: './bets-creation.component.html',
  styleUrls: ['./bets-creation.component.scss']
})
export class BetsCreationComponent implements OnInit {
  type: Observable<BetType | undefined> = this.store.select(fromRoot.getSelectedType);

  constructor(private store: Store<fromRoot.RootState>) {}

  ngOnInit(): void {}
}

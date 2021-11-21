import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BetProfile } from 'app/bets/models/betProfile';
import { Observable } from 'rxjs';
import * as fromRoot from 'store';

@Component({
  selector: 'are-bets-new',
  templateUrl: './bets-new.component.html',
  styleUrls: ['./bets-new.component.scss']
})
export class BetsNewComponent implements OnInit {
  profiles: Observable<BetProfile[] | undefined> = this.store.select(fromRoot.getBetsProfiles);

  constructor(private store: Store<fromRoot.RootState>) {}

  ngOnInit(): void {}

  selectProfile(selectProfile: BetProfile) {
    if (!selectProfile.disabled) {
      this.store.dispatch(fromRoot.setSelectedProfile({ selectProfile }));
      this.store.dispatch(fromRoot.Navigate({ path: ['/bets/creation'] }));
    }
  }
}

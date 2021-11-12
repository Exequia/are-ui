import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Bet } from 'app/bets/models/bet';
import { BetsFacadeService } from 'app/bets/services/bets-facade.service';
import { BetsUtilsService } from 'app/bets/services/bets-utils.service';
import { FormlyData } from 'app/shared/models/formlyData';
import { AppData } from 'app/users/models/user';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import * as fromRoot from 'store';

@Component({
  selector: 'are-bets-creation',
  templateUrl: './bets-creation.component.html',
  styleUrls: ['./bets-creation.component.scss']
})
export class BetsCreationComponent implements OnInit {
  profile: Observable<Bet | undefined> = this.betsFacade.getSelectedProfile();
  config: FormlyData | undefined;
  userData: AppData | undefined;

  constructor(private store: Store<fromRoot.RootState>, private betsFacade: BetsFacadeService, private betsUtils: BetsUtilsService) {}

  ngOnInit(): void {
    this.config = this.betsUtils.getBetConfigFormly();
    this.store.pipe(select(fromRoot.getUser), take(1)).subscribe(userData => {
      this.userData = userData;
      this.config!.model.ownerName = this.userData?.nickName;
    });
  }

  submit() {
    // TODO: ARE- create a body and save it in API
    console.log(this.config);
  }
}

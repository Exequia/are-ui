import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Bet, CreateBetRequest } from 'app/bets/models/bet';
import { BetsFacadeService } from 'app/bets/services/bets-facade.service';
import { BetsUtilsService } from 'app/bets/services/bets-utils.service';
import { FormlyData } from 'app/shared/models/formlyData';
import { AppData } from 'app/users/models/user';
import { take } from 'rxjs/operators';
import * as fromRoot from 'store';

@Component({
  selector: 'are-bets-creation',
  templateUrl: './bets-creation.component.html',
  styleUrls: ['./bets-creation.component.scss']
})
export class BetsCreationComponent implements OnInit {
  profile: Bet | undefined;
  config: FormlyData | undefined;
  userData: AppData | undefined;

  constructor(private store: Store<fromRoot.RootState>, private betsFacade: BetsFacadeService, private betsUtils: BetsUtilsService) {}

  ngOnInit(): void {
    this.config = this.betsUtils.getBetConfigFormly();
    this.store.pipe(select(fromRoot.getUser), take(1)).subscribe(userData => {
      this.userData = userData;
      this.config!.model.ownerName = this.userData?.alias;
    });
    this.betsFacade
      .getSelectedProfile()
      .pipe(take(1))
      .subscribe(profile => (this.profile = profile));
  }

  submit() {
    console.log(this.config);
    if (this.config?.form?.valid) {
      this.invokeCreateBet();
    }
  }

  invokeCreateBet() {
    const betCreated: CreateBetRequest = this.getCreateBetRequest();
    console.log(betCreated);
    this.store.dispatch(fromRoot.saveBetCreated({ betCreated }));
  }

  getCreateBetRequest(): CreateBetRequest {
    return <CreateBetRequest>{
      name: this.config?.model.name,
      model: JSON.stringify(this.config?.model || {}),
      // TODO: ARE- getOwnerId
      ownerId: 1,
      profileId: this.profile?.profile?.id || 0
    };
  }
}

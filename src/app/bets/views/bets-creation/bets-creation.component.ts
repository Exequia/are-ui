import { Component, OnInit } from '@angular/core';
import { Bet } from 'app/bets/models/bet';
import { BetsFacadeService } from 'app/bets/services/bets-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'are-bets-creation',
  templateUrl: './bets-creation.component.html',
  styleUrls: ['./bets-creation.component.scss']
})
export class BetsCreationComponent implements OnInit {
  profile: Observable<Bet | undefined> = this.betsFacade.getSelectedProfile();

  constructor(private betsFacade: BetsFacadeService) {}

  ngOnInit(): void {}
}

import { Bet } from 'app/bets/models/bet';
import { BetId, BetType } from 'app/bets/models/betType';

export interface BetsState {
  betTypes: BetType[];
  selectedType?: BetType;
  openBets?: Bet[];
  selectedBet?: Bet;
}

export const initialBetsState: BetsState = {
  betTypes: [
    { id: BetId.pregnancy, icon: 'pregnant_woman' },
    { id: BetId.match, icon: 'people_alt', disabled: true }
  ]
};

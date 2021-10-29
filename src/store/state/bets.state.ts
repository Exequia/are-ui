import { Bet } from 'app/bets/models/bet';
import { BetId, BetProfile } from 'app/bets/models/betProfile';

export interface BetsState {
  betsProfiles?: BetProfile[];
  openBets?: Bet[];
  selectProfile?: BetProfile;
  selectedBet?: Bet;
}

export const initialBetsState: BetsState = {
  betsProfiles: [
    { id: BetId.pregnancy, icon: 'pregnant_woman' },
    { id: BetId.match, icon: 'people_alt', disabled: true }
  ]
};

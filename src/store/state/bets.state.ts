import { Bet } from 'app/bets/models/bet';
import { BetProfile, BetProfileId } from 'app/bets/models/betProfile';

export interface BetsState {
  betsProfiles?: BetProfile[];
  openBets?: Bet[];
  selectProfile?: BetProfile;
  selectedBet?: Bet;
}

export const initialBetsState: BetsState = {
  betsProfiles: [
    { id: BetProfileId.pregnancy, icon: 'pregnant_woman' },
    { id: BetProfileId.match, icon: 'people_alt', disabled: true }
  ]
};

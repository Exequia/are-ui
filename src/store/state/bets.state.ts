import { Bet } from 'app/bets/models/bet';
import { BetType } from 'app/bets/models/betType';

export interface BetsState {
  betTypes: BetType[];
  selectedType?: BetType;
  openBets?: Bet[];
  selectedBet?: Bet;
}

export const initialBetsState: BetsState = {
  betTypes: [
    { id: 'pregnancy', icon: 'pregnant_woman' },
    { id: 'match', icon: 'people_alt', disabled: true }
  ]
};

// selectedType: { id: 'pregnancy', icon: 'pregnant_woman' }
// openBets: [
//   {
//     type: { id: 'pregnancy', icon: 'pregnant_woman' },
//     config: {
//       ownerId: 'fnx',
//       startDate: new Date(),
//       endDate: new Date(),
//       status: { id: 1, name: 'open' },
//       form: {}
//     },
//     results: {}
//   }
// ],
// selectedBet: undefined

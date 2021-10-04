import { createReducer, on } from '@ngrx/store';
import { Bet } from 'app/bets/models/bet';
import { BetType } from 'app/bets/models/betType';
import { setOpenBets, setSelectedBet, setSelectedType } from 'store/actions/bets/bets.actions';
import { initialBetsState } from 'store/state';

const _betsReducer = createReducer(
  initialBetsState,
  on(setSelectedType, (state, payload) => ({ ...state, selectedType: payload.selectType })),
  on(setSelectedBet, (state, payload) => ({ ...state, selectedBet: payload.selectedBet })),
  on(setOpenBets, (state, payload) => ({ ...state, openBets: payload.openBets }))
);

export function betsReducer(state: any, action: any) {
  return _betsReducer(state, action);
}

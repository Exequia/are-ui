import { createReducer, on } from '@ngrx/store';
import { setOpenBets, setSelectedBet, setSelectedProfile } from 'store/actions/bets/bets.actions';
import { initialBetsState } from 'store/state';

const _betsReducer = createReducer(
  initialBetsState,
  on(setSelectedProfile, (state, payload) => ({ ...state, selectProfile: payload.selectProfile })),
  on(setSelectedBet, (state, payload) => ({ ...state, selectedBet: payload.selectedBet })),
  on(setOpenBets, (state, payload) => ({ ...state, openBets: payload.openBets }))
  // on(setBetsProfiles, (state, payload) => ({ ...state, betsProfiles: payload.betsProfiles }))
);

export function betsReducer(state: any, action: any) {
  return _betsReducer(state, action);
}

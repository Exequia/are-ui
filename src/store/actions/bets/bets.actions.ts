import { createAction, props } from '@ngrx/store';
import { Bet, BetDataRequest, BetResponse, CreateBetRequest } from 'app/bets/models/bet';
import { BetProfile } from 'app/bets/models/betProfile';

export const setSelectedProfile = createAction('[Bets Component] Set Selected Types', props<{ selectProfile: BetProfile }>());
export const loadOpenBets = createAction('[Bets Component] Load Opens Bet');
export const setOpenBets = createAction('[Bets Component] Set Opens Bet', props<{ openBets: Bet[] }>());
export const setSelectedBet = createAction('[Bets Component] Set Selected Bet', props<{ selectedBet: Bet }>());
export const errorOnLoadOpenBets = createAction('[Bets Component] Error On GetOpen Bets', props<{ error: any }>());
export const setBetsProfiles = createAction('[Bets Component] Set Bets Profiles', props<{ betsProfiles: BetProfile[] }>());
export const addBet = createAction('[Bets Component] Save Add to Bet', props<{ betDataRequest: BetDataRequest }>());
export const closeBet = createAction('[Bets Component] Close Bet', props<{ betDataRequest: BetDataRequest }>());
export const saveBetCreated = createAction('[Bets Component] Save Bet', props<{ betCreated: CreateBetRequest }>());
export const loadAllBets = createAction('[Bets Component] Load all bets', props<{ betId: number }>());
export const setBetResponse = createAction('[Bets Component] Set all bets', props<{ betReponse: BetResponse }>());
export const loadClosedBets = createAction('[Bets Component] Load ClosedBets');
export const setClosedBets = createAction('[Bets Component] Set Closed Bets', props<{ closedBets: Bet[] }>());

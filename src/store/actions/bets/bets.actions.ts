import { createAction, props } from '@ngrx/store';
import { Bet } from 'app/bets/models/bet';
import { BetType } from 'app/bets/models/betType';

export const setSelectedType = createAction('[Bets Component] Set Selected Types', props<{ selectType: BetType }>());

export const loadOpenBets = createAction('[Bets Component] Load Opens Bet');

export const setOpenBets = createAction('[Bets Component] Set Opens Bet', props<{ openBets: Bet[] }>());

export const setSelectedBet = createAction('[Bets Component] Set Selected Bet', props<{ selectedBet: Bet }>());

export const errorOnLoadOpenBets = createAction('[Bets Component] Error On GetOpen Bets', props<{ error: any }>());

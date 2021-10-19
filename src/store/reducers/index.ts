import { createFeatureSelector } from '@ngrx/store';
import * as fromState from '../state';
export * from './auth/auth.reducer';
export * from './ui/ui.reducer';
export * from './bets/bets.reducer';

// Feature selectors
export const getAuthFeatureState = createFeatureSelector<fromState.AuthState>('auth');
export const getUiFeatureState = createFeatureSelector<fromState.UiState>('ui');
export const getBetsFeatureState = createFeatureSelector<fromState.BetsState>('bets');

import { createFeatureSelector } from '@ngrx/store';
import * as fromState from '../state';
export * from './auth/auth.reducer';
export * from './ui/ui.reducer';

// Feature selectors
export const getAuthFeatureState = createFeatureSelector<fromState.AuthState>('auth');
export const getUiFeatureState = createFeatureSelector<fromState.UiState>('ui');

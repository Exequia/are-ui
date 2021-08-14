import { createFeatureSelector } from '@ngrx/store';
import * as fromState from '../state';
export * from './ui/ui.reducer';

// Feature selectors
export const getUiFeatureState = createFeatureSelector<fromState.UiState>('ui');

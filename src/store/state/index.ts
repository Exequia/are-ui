import { BetsState } from 'store';
import * as authState from './auth.state';
import * as uiState from './ui.state';

export * from './auth.state';
export * from './ui.state';
export * from './bets.state';

export interface RootState {
  auth: authState.AuthState;
  ui: uiState.UiState;
  bets: BetsState;
}

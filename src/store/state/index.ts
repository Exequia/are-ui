import * as uiState from './ui.state';

// export * from './auth.state';
export * from './ui.state';

export interface RootState {
  ui: uiState.UiState;
}

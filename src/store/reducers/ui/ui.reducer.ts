import { createReducer, on } from '@ngrx/store';
import { toggleSidenav } from '../../actions';
import * as fromState from '../../state';

const _uiReducer = createReducer(
  fromState.initialUiState,
  on(toggleSidenav, (state) => ({
    ...state,
    sideBar: { ...state.sideBar, isOpen: !state.sideBar?.isOpen || false },
  }))
);

export function uiReducer(state: any, action: any) {
  return _uiReducer(state, action);
}

export const getSnackBar = (state: fromState.UiState) => state.snackBar;
export const getProgressBarState = (state: fromState.UiState) =>
  state.progressBar;
// export const getNavigationState = (state: fromState.UiState) => state.navigation;
export const getSideBar = (state: fromState.UiState) => state.sideBar;

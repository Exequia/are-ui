import { createReducer, on } from '@ngrx/store';
// import { toggleSidenav } from '../../actions';
import * as fromState from '../../state';

const _authReducer = createReducer(
  fromState.initialAuthState
  // on(toggleSidenav, (state) => ({
  //   ...state,
  //   sideBar: { ...state.sideBar, isOpen: !state.sideBar?.isOpen || false },
  // }))
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}

// export const getSnackBar = (state: fromState.UiState) => state.snackBar;
// export const getProgressBarState = (state: fromState.UiState) =>
//   state.progressBar;
// // export const getNavigationState = (state: fromState.UiState) => state.navigation;
// export const getSideBar = (state: fromState.UiState) => state.sideBar;

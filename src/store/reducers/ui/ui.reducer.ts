import { createReducer, on } from '@ngrx/store';
import { displayLoading, resetSnackBar, showSnackBar, toggleSidenav } from '../../actions';
import * as fromState from '../../state';

const _uiReducer = createReducer(
  fromState.initialUiState,
  on(toggleSidenav, state => ({
    ...state,
    sideBar: { ...state.sideBar, isOpen: !state.sideBar?.isOpen || false }
  })),
  on(showSnackBar, (state, payload) => ({ ...state, snackBar: { ...state.snackBar, visible: true, configuration: payload.snackBarConfig } })),
  on(resetSnackBar, state => ({ ...state, snackBar: { ...state.snackBar, visible: false, configuration: undefined } })),
  on(displayLoading, (state, payload) => ({ ...state, progressBar: { ...state.progressBar, displayLoading: payload.display } }))
);

export function uiReducer(state: any, action: any) {
  return _uiReducer(state, action);
}

import { createReducer, on } from '@ngrx/store';
// import { toggleSidenav } from '../../actions';
import * as fromState from '../../state';

const _authReducer = createReducer(fromState.initialAuthState);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}

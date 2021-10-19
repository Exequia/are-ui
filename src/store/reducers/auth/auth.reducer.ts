import { createReducer, on } from '@ngrx/store';
import { doLogin, doLoginSuccess } from 'store';
import * as fromState from '../../state';

const _authReducer = createReducer(
  fromState.initialAuthState,
  on(doLogin, state => ({ ...state, loading: true })),
  on(doLoginSuccess, (state, payload) => ({ ...state, error: null, loading: false, user: payload.user }))
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}

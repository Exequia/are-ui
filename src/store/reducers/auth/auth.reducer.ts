import { createReducer, on } from '@ngrx/store';
import { doCreateUser, doCreateUserFail, doCreateUserSuccess, doLogin, doLoginFail, doLoginSuccess, doLogOut } from 'store';
import * as fromState from '../../state';

const _authReducer = createReducer(
  fromState.initialAuthState,
  on(doLogin, state => ({ ...state, loading: true })),
  on(doLoginSuccess, (state, payload) => ({ ...state, error: null, loading: false, user: payload.user })),
  on(doLoginFail, (state, payload) => ({ ...state, error: payload.error, loading: false })),
  on(doLogOut, state => ({ ...state, user: undefined })),
  on(doCreateUser, state => ({ ...state, loading: true })),
  on(doCreateUserSuccess, (state, payload) => ({ ...state, error: null, loading: false, user: payload.user })),
  on(doCreateUserFail, (state, payload) => ({ ...state, error: payload.error, loading: false }))
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}

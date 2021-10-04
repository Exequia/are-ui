import { createReducer, on } from '@ngrx/store';
import { setCredentials } from 'store/actions/user/user.actions';
import { initialUserState } from 'store/state/user.state';

const _userReducer = createReducer(
  initialUserState,
  on(setCredentials, state => (state = initialUserState))
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}

import { createAction, props } from '@ngrx/store';
import { Credentials } from 'app/users/models/credentials';

export const DO_LOGIN = '[Auth] Do a Login';
export const doLogin = createAction(DO_LOGIN, props<Credentials>());
export const DO_LOGIN_FAIL = '[Auth] Login Fail';
export const doLoginFail = createAction(DO_LOGIN_FAIL, props<Error | any>());
export const DO_LOGIN_SUCCESS = '[Auth] Login Success';
export const doLoginSuccess = createAction(DO_LOGIN_SUCCESS);
export const RESET_DO_LOGIN_FAIL = '[Auth] Reset Login Fail';
export const resetDoLoginFail = createAction(RESET_DO_LOGIN_FAIL);

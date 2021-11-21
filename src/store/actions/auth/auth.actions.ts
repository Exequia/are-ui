import { createAction, props } from '@ngrx/store';
import { Credentials } from 'app/users/models/credentials';
import { AppData, User } from 'app/users/models/user';

export const checkSession = createAction('[Auth] Check Session');
export const doLogin = createAction('[Auth] Do a Login', props<{ credentials: Credentials }>());
export const doLoginSuccess = createAction('[Auth] Login Success', props<{ user: AppData }>());
export const doLoginFail = createAction('[Auth] Login Fail', props<Error | any>());
export const resetDoLoginFail = createAction('[Auth] Reset Login Fail');
export const doLogOut = createAction('[Auth] Do a Log out');

export const doCreateUser = createAction('[Auth] Create User', props<{ user: User }>());
export const doCreateUserSuccess = createAction('[Auth] Create User Success', props<{ user: AppData }>());
export const doCreateUserFail = createAction('[Auth] Create User Fail', props<Error | any>());

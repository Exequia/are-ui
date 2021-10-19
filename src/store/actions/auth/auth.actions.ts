import { createAction, props } from '@ngrx/store';
import { Credentials } from 'app/users/models/credentials';
import { AppData } from 'app/users/models/user';

export const doLogin = createAction('[Auth] Do a Login', props<Credentials>());
export const doLoginFail = createAction('[Auth] Login Fail', props<Error | any>());
export const doLoginSuccess = createAction('[Auth] Login Success', props<{ user: AppData }>());
export const resetDoLoginFail = createAction('[Auth] Reset Login Fail');

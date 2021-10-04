import { createAction, props } from '@ngrx/store';
import { Credentials } from 'app/users/models/credentials';

export const getCredentials = createAction('[User Component] Get Credentials');
export const setCredentials = createAction('[User Component] Set Credentials', props<Credentials>());

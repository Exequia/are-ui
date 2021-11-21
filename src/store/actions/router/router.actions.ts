import { createAction, props } from '@ngrx/store';
import { NavigationConfig } from 'app/shared/models/navigationConfig';
import { Redirect } from 'app/shared/models/redirect';

export const Navigate = createAction('[Router] Navigation', props<NavigationConfig>());
export const saveRedirectOnLogin = createAction('[Router] Save Redirect Url On Login', props<{ redirect: Redirect }>());

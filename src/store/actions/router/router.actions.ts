import { createAction, props } from '@ngrx/store';
import { NavigationConfig } from 'app/shared/models/navigationConfig';

export const Navigate = createAction('[Router] Navigation', props<NavigationConfig>());

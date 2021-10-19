import { createSelector } from '@ngrx/store';
import { getAuthFeatureState } from 'store';

export const getUser = createSelector(getAuthFeatureState, state => state && state.user);

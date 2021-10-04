import { createSelector } from '@ngrx/store';
import { getUserFeatureState } from 'store/reducers';

export const getUserCredentials = createSelector(getUserFeatureState, state => state && state.credentials);

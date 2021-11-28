import { createSelector } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { getBetsFeatureState } from 'store/reducers';

export const getBetsProfiles = createSelector(getBetsFeatureState, state => cloneDeep(state?.betsProfiles));
export const getSelectedProfile = createSelector(getBetsFeatureState, state => cloneDeep(state?.selectProfile));
export const getOpenBets = createSelector(getBetsFeatureState, state => cloneDeep(state?.openBets));
export const getSelectedBet = createSelector(getBetsFeatureState, state => cloneDeep(state?.selectedBet));
export const getBetResponse = createSelector(getBetsFeatureState, state => cloneDeep(state?.betResponse));

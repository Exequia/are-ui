import { createSelector } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { getBetsFeatureState } from 'store/reducers';

export const getBetTypes = createSelector(getBetsFeatureState, state => cloneDeep(state?.betTypes));
export const getSelectedType = createSelector(getBetsFeatureState, state => cloneDeep(state?.selectedType));
export const getOpenBets = createSelector(getBetsFeatureState, state => cloneDeep(state?.openBets));
export const getSelectedBet = createSelector(getBetsFeatureState, state => cloneDeep(state?.selectedBet));

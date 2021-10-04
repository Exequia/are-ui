import { createSelector } from '@ngrx/store';
import { getBetsFeatureState } from 'store/reducers';

export const getBetTypes = createSelector(getBetsFeatureState, state => state?.betTypes);
export const getSelectedType = createSelector(getBetsFeatureState, state => state?.selectedType);
export const getOpenBets = createSelector(getBetsFeatureState, state => state?.openBets);
export const getSelectedBet = createSelector(getBetsFeatureState, state => state?.selectedBet);

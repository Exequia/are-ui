import { createSelector } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import * as fromFeature from '../../reducers';

export const getSnackBar = createSelector(fromFeature.getUiFeatureState, state => cloneDeep(state?.snackBar));
export const getProgressBarState = createSelector(
  fromFeature.getUiFeatureState,
  cloneDeep(state => state?.progressBar)
);
export const getSideBar = createSelector(fromFeature.getUiFeatureState, state => cloneDeep(state?.sideBar));
export const isSideBarOpen = createSelector(getSideBar, state => cloneDeep(state?.isOpen));
export const isLoading = createSelector(fromFeature.getUiFeatureState, state => cloneDeep(state?.progressBar?.displayLoading));

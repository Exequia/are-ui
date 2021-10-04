import { createSelector } from '@ngrx/store';
import * as fromFeature from '../../reducers';

export const getSideBar = createSelector(fromFeature.getUiFeatureState, state => state?.sideBar);

export const isSideBarOpen = createSelector(getSideBar, state => state?.isOpen);

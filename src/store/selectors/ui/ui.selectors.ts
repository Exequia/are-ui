import { createSelector } from '@ngrx/store';
import * as fromFeature from '../../reducers';
import * as fromUi from '../../reducers/ui/ui.reducer';

// export const getToolBar = createSelector(
//   fromFeature.getUiFeatureState,
//   fromUi.getSearchBarToggleState
// );

// export const getAdvancedSearchCollapsed = createSelector(
//   getToolBar,
//   state => state && state.advancedCollapsed
// );

// export const getExpertSearchCollapsed = createSelector(
//   getToolBar,
//   state => state && state.expertCollapsed
// );

// export const getSnackBar = createSelector(
//   fromFeature.getUiFeatureState,
//   fromUi.getSnackBar
// );

// export const getProgressBar = createSelector(
//   fromFeature.getUiFeatureState,
//   fromUi.getProgressBarState
// );

export const getSideBar = createSelector(
  fromFeature.getUiFeatureState,
  fromUi.getSideBar
);

// export const getRouterProgressBar = createSelector(
//   getProgressBar,
//   state => state && state.routerLoading
// );

// export const getDataProgressBar = createSelector(
//   getProgressBar,
//   state => state && state.dataLoading
// );

// export const getLoadingVisibility = createSelector(
//   getRouterProgressBar,
//   getDataProgressBar,
//   (router, data) => router || data
// );

export const isSideBarOpen = createSelector(
  getSideBar,
  (state) => state && state.isOpen
);

// export const getNavigation = createSelector(
//   fromFeature.getUiFeatureState,
//   fromUi.getNavigationState
// );

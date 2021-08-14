import * as fromActions from '../../actions';
import * as fromState from '../../state';
import { reducer } from './ui.reducer';

describe('Ui Reducer', () => {
  it('should return the default state on undefined Action', () => {
    const action = {} as any;
    const newState = reducer(undefined, action);
    expect(newState).toBe(fromState.initialUiState);
  });

  it('should handle the Show Route Loading Action', () => {
    const newState = reducer(fromState.initialUiState, new fromActions.ShowRouterLoadingVisibility(true));
    expect(newState.progressBar.routerLoading).toBeTruthy();
  });

  it('should handle the Show Data Loading Action', () => {
    const newState = reducer(fromState.initialUiState, new fromActions.ShowDataLoadingVisibility(true));
    expect(newState.progressBar.dataLoading).toBeTruthy();
  });

  it('should handle the Show Snack Bar Action', () => {
    const payload = {
      message: 'hello',
      duration: 1000
    };
    const newState = reducer(fromState.initialUiState, new fromActions.ShowSnackBar(payload));
    expect(newState.snackBar.configuration).toEqual(payload);
    expect(newState.snackBar.visible).toBeTruthy();
  });

  it('should handle the Reset Snack Bar Action', () => {
    const newState = reducer(fromState.initialUiState, new fromActions.ResetSnackBar());
    expect(newState.snackBar.configuration).toBeNull();
    expect(newState.snackBar.visible).toBeFalsy();
  });

  it('should handle the Advanced Search Toogle Action', () => {
    const newState = reducer(fromState.initialUiState, new fromActions.AdvancedSearchToggle());
    expect(newState.searchBar.advancedCollapsed).toBe(!fromState.initialUiState.searchBar.advancedCollapsed);
  });
});

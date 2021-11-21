import * as fromActions from '../../actions';
import * as fromState from '../../state';
import { reducer } from './auth.reducer';

describe('Search Reducer', () => {
  it('should return the default state on undefined Action', () => {
    const action = {} as any;
    const newState = reducer(undefined, action);
    expect(newState).toBe(fromState.initialAuthState);
  });

  it('should handle the Do Search Action', () => {
    const newState = reducer(fromState.initialAuthState, new fromActions.DoLogin({ username: 'xxx', password: 'yyy' }));
    expect(newState.loading).toBeTruthy();
  });

  /*it('should handle the Do Search success Action', () => {
    const newState = reducers(
      fromState.initialSearchState,
      new fromActions.DoSearchSuccess(mockSearchResponseCooked)
    );
    expect(newState.entities).toEqual(mockState.entities);
    expect(newState.ids).toEqual(mockState.ids);
    expect(newState.loading).toBeFalsy();
  });

  it('should handle the Do Search fail Action', () => {
    const newState = reducers(
      fromState.initialSearchState,
      new fromActions.DoSearchFail('error')
    );
    expect(newState.entities).toEqual({});
    expect(newState.loading).toBeFalsy();
  });

  it('should handle the Toggle Search Results Visibility Action', () => {
    const newState = reducers(
      fromState.initialSearchState,
      new fromActions.ToggleSearchResultsVisibility(true)
    );
    expect(newState.resultsVisibility).toBeTruthy();
  });

  it('should handle the Select Search Item Action', () => {
    const payload = '------';
    const newState = reducers(
      fromState.initialSearchState,
      new fromActions.SelectSearchItem(payload)
    );
    expect(newState.selectedItem).toBe(payload);
  });*/
});

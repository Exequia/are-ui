import { uiMockState } from '@ice/mocks';
import * as fromSelectors from './ui.selectors';

describe('Ui selectors', () => {
  describe('Toolbar selectors', () => {
    it('should return Toolbar state', () => {
      expect(fromSelectors.getToolBar.projector(uiMockState)).toBe(uiMockState.searchBar);
    });

    it('should return Advanced Search Bar Collapsed state', () => {
      expect(fromSelectors.getAdvancedSearchCollapsed.projector(uiMockState.searchBar)).toBe(uiMockState.searchBar.advancedCollapsed);
    });
  });

  describe('SnackBar selectors', () => {
    it('should return SnackBar state', () => {
      expect(fromSelectors.getSnackBar.projector(uiMockState)).toBe(uiMockState.snackBar);
    });
  });

  describe('ProgressBar selectors', () => {
    it('should return ProgressBar state', () => {
      expect(fromSelectors.getProgressBar.projector(uiMockState)).toBe(uiMockState.progressBar);
    });

    it('should return Router ProgressBar state', () => {
      expect(fromSelectors.getRouterProgressBar.projector(uiMockState.progressBar)).toBe(uiMockState.progressBar.routerLoading);
    });

    it('should return Data ProgressBar state', () => {
      expect(fromSelectors.getDataProgressBar.projector(uiMockState.progressBar)).toBe(uiMockState.progressBar.dataLoading);
    });

    it('should return Loading ProgressBar Visibility state', () => {
      expect(fromSelectors.getLoadingVisibility.projector(uiMockState.progressBar.routerLoading, uiMockState.progressBar.dataLoading)).toBe(
        uiMockState.progressBar.dataLoading || uiMockState.progressBar.routerLoading
      );
    });
  });
});

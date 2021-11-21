import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
// import { initialNavigation } from 'config/navigation/navigation';

export interface SnackBarConfiguration {
  translationPath: string;
  actions?: SnackBarAction[];
  duration?: number;
  icon?: string;
  position?: {
    horizontalPosition: MatSnackBarHorizontalPosition;
    verticalPosition: MatSnackBarVerticalPosition;
  };
}
export interface SnackBarAction {
  label: string;
  action?(): void;
}

export interface UiState {
  snackBar: {
    visible: boolean;
    configuration: SnackBarConfiguration | undefined;
  };
  progressBar: {
    displayLoading: boolean;
  };
  sideBar: {
    isOpen: boolean | undefined;
  };
}

export const initialUiState: UiState = {
  snackBar: {
    visible: false,
    configuration: {
      translationPath: ''
    }
  },
  progressBar: {
    displayLoading: false
  },
  // navigation: initialNavigation,
  sideBar: {
    isOpen: undefined
  }
};

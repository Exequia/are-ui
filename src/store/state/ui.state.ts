import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
// import { initialNavigation } from 'config/navigation/navigation';

export interface SnackBarConfiguration {
  message: string;
  action?: string;
  duration?: number;
  icon?: string;
  position?: {
    horizontalPosition: MatSnackBarHorizontalPosition;
    verticalPosition: MatSnackBarVerticalPosition;
  };
}

export interface UiState {
  snackBar: {
    visible: boolean;
    configuration: SnackBarConfiguration;
  };
  progressBar: {
    routerLoading: boolean;
    dataLoading: boolean;
  };
  sideBar: {
    isOpen: boolean | undefined;
  };
}

export const initialUiState: UiState = {
  snackBar: {
    visible: false,
    configuration: {
      message: '',
    },
  },
  progressBar: {
    routerLoading: false,
    dataLoading: false,
  },
  // navigation: initialNavigation,
  sideBar: {
    isOpen: undefined,
  },
};

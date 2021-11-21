import { createAction, props } from '@ngrx/store';
import { SnackBarConfiguration } from 'store';

export const toggleSidenav = createAction('[UI Component] Toggle sidenav');
export const showSnackBar = createAction('[UI Component] Show Snackbar', props<{ snackBarConfig: SnackBarConfiguration }>());
export const resetSnackBar = createAction('[Ui] Hide/Reset Snackbar');
export const displayLoading = createAction('[Ui] Show Data Loading Visibility', props<{ display: boolean }>());

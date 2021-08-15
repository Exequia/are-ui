import { createAction } from '@ngrx/store';

export const TOGGLE_SIDENAV = '[UI Component] Toggle sidenav';
export const toggleSidenav = createAction(TOGGLE_SIDENAV);

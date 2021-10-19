import { NavigationExtras } from '@angular/router';
import { Role } from 'app/users/models/roles';
import { AppData, User } from 'app/users/models/user';

export interface AuthState {
  user?: AppData;
  loading: boolean;
  error: any;
  role?: Role;
  entryRoute?: { path: any[]; extras: NavigationExtras };
}

export const initialAuthState: AuthState = {
  loading: false,
  error: null
};

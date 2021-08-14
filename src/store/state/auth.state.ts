import { NavigationExtras } from '@angular/router';
import { Role, RolesName } from 'app/users/models/roles';
import { User } from 'app/users/models/user';

export interface AuthState {
  user: User | undefined;
  loading: boolean;
  error: any;
  role?: Role;
  entryRoute?: { path: any[]; extras: NavigationExtras };
}

export const initialAuthState: AuthState = {
  user: undefined,
  loading: false,
  error: null
};

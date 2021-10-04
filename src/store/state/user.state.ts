import { Credentials } from 'app/users/models/credentials';

export interface UserState {
  credentials: Credentials;
}

export const initialUserState: UserState = {
  credentials: {
    email: '',
    password: ''
  }
};

import { AppData } from './user';

export interface AuthResponse {
  accessToken: string;
  tokenType: string;
  user: AppData;
}

export interface TokenData {
  roles: string[];
  email: string;
}

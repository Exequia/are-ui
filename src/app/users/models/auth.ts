import { AppData } from './user';

export interface AuthResponse {
  accessToken: string;
  tokenType: string;
  user: AppData;
}

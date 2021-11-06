import { BetConfig } from './betConfig';
import { BetProfile } from './betProfile';

export interface Bet {
  profile: BetProfile | undefined;
  config: BetConfig;
  results?: any;
}

export interface BetRequest {
  betId: string;
  model: any;
}

export interface BetResponse {
  profileId: string;
  config: BetConfig;
  model: any;
}

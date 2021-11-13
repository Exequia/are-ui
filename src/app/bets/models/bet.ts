import { BetConfig } from './betConfig';
import { BetProfile, BetProfileId } from './betProfile';

export interface Bet {
  profile: BetProfile | undefined;
  config: BetConfig;
  results?: any;
}

export interface AddBetRequest {
  betId: string;
  model: any;
}

export interface AddBetResponse {
  profileId: BetProfileId;
  config: BetConfig;
  model: any;
}

export interface CreateBetRequest {
  name: string;
  model: string;
  ownerId: number;
  profileId?: BetProfileId;
}

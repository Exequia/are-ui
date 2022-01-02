import { BetConfig } from './betConfig';
import { BetProfile, BetProfileId } from './betProfile';

export interface Bet {
  profile: BetProfile | undefined;
  config: BetConfig;
  results?: any;
}
export interface BetResponse {
  id: number;
  name: string;
  profileId: number;
  fields: string;
  model: string;
  result?: string;
  statusId?: number;
  startDate?: Date;
  endDate?: Date;
  addedBet?: string;
  allBets?: AllBetResponse[];
  ownerId?: number;
}

export interface BetDataRequest {
  betId: number;
  model: string;
}

export interface AddBetResponse {
  profileId: BetProfileId;
  config: BetConfig;
  model: any;
}

export interface CreateBetRequest {
  name: string;
  fields: string;
  model: string;
  profileId?: BetProfileId;
}

export interface AllBetResponse {
  userName: string;
  model: string;
  isMine?: boolean;
  isResult?: boolean;
}

import { BetConfig } from './betConfig';
import { BetType } from './betType';

export interface Bet {
  type: BetType;
  config: BetConfig;
  results?: any;
}

import { BetStatus } from './betStatus';

export interface BetConfig {
  endDate?: Date;
  form: any;
  name: string;
  ownerId?: string;
  startDate?: Date;
  status?: BetStatus;
}

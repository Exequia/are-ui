import { FormlyData } from 'app/shared/models/formlyData';
import { BetId } from './betProfile';
import { BetStatus } from './betStatus';

export interface BetConfig {
  endDate?: Date;
  formlyData: FormlyData;
  id: string;
  model: FormlyData;
  name: string;
  ownerName?: string;
  profileId?: BetId;
  startDate?: Date;
  status?: BetStatus;
}

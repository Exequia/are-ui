import { FormlyData } from 'app/shared/models/formlyData';
import { BetStatus } from './betStatus';

export interface BetConfig {
  endDate?: Date;
  formlyData: FormlyData;
  name: string;
  ownerId?: string;
  startDate?: Date;
  status?: BetStatus;
}

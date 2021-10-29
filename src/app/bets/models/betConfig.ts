import { FormlyData } from 'app/shared/models/formlyData';
import { BetStatus } from './betStatus';

export interface BetConfig {
  id: string;
  endDate?: Date;
  formlyData: FormlyData;
  name: string;
  ownerId?: string;
  startDate?: Date;
  status?: BetStatus;
}

import { FormlyData } from 'app/shared/models/formlyData';
import { BetProfileId } from './betProfile';

export interface BetConfig {
  endDate?: Date;
  formlyData: FormlyData;
  id: number;
  model: FormlyData;
  name: string;
  ownerName?: string;
  profileId?: BetProfileId;
  startDate?: Date;
  statusId?: number;
  isNew?: boolean;
  isMine?: boolean;
}

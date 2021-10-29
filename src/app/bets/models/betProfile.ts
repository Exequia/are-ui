export interface BetProfile {
  id: BetId;
  icon?: string;
  disabled?: boolean;
}

export enum BetId {
  pregnancy = 'pregnancy',
  match = 'match'
}

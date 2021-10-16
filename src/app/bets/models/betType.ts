export interface BetType {
  id: BetId;
  icon?: string;
  disabled?: boolean;
}

export enum BetId {
  pregnancy = 'pregnancy',
  match = 'match'
}

export interface BetProfile {
  id: BetProfileId;
  icon?: string;
  disabled?: boolean;
}

export enum BetProfileId {
  pregnancy = 1,
  match = 2
}

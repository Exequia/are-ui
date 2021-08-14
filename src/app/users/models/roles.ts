export interface Role {
  id: number;
  name: RolesName;
  description?: string;
}

export enum RolesName {
  admin,
  premium,
  regular,
  guest
}

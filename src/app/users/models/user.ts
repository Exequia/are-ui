import { Role } from './roles';

export interface User {
  userName: string;
  name: string;
  surname?: string;
  lastName?: string;
  email: string;
  roles?: Role[];
  organizations?: any;
  gender?: Genders;
}

export enum Genders {
  male,
  female,
  undefined
}

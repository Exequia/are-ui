import { Role } from './roles';

export interface User {
  personalData: PersonalData;
  appData: AppData;
}

export enum Genders {
  male,
  female,
  undefined
}

export interface PersonalData {
  name: string;
  surname?: string;
  lastName?: string;
  sex: Sex;
  birthDay?: Date;
  gender?: Genders;
}

export enum Sex {
  male,
  female,
  undefined
}

export interface AppData {
  nickName: string;
  email: string;
  password: string;
  status?: Status;
  profile?: Profile;
  roles?: Role[];
  organizations?: any;
}

export enum Status {
  active,
  inactive
}

export enum Profile {
  god,
  premium,
  regular,
  guest
}

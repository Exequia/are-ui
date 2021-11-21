import { NavigationExtras } from '@angular/router';

export interface Redirect {
  path: any[];
  extras: NavigationExtras;
}

export interface RouterStateUrl {
  url: string;
  params: { [key: string]: string };
  queryParams: { [key: string]: string };
  section: string;
  view: SectionRouterViews;
  paths: string[];
}

export enum SectionRouterViews {
  home = 'HOME',
  user = 'USER',
  bets = 'BETS',
  games = 'GAMES'
}

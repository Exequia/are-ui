import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Redirect, RouterStateUrl } from 'app/shared/models/redirect';
import { map } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class RouterUtils {
  public extractActivatedRouterData(snapshot: ActivatedRouteSnapshot): RouterStateUrl {
    let params = {};
    let paths: string[] = [];
    let queryParams: any;
    let section;
    let view;
    while (snapshot.firstChild) {
      params = { ...params, ...snapshot.params };
      queryParams = snapshot.queryParams;
      if (snapshot.url.length) {
        paths = [...paths, ...map(snapshot.url, 'path')];
      }
      snapshot = snapshot.firstChild;
      if (snapshot.data.section) {
        section = snapshot.data.section;
      }
      if (snapshot.data.view) {
        view = snapshot.data.view;
      }
    }
    return { url: paths.join('/'), params, queryParams, section, view, paths };
  }

  public getUrlWithParams(snapshot: ActivatedRouteSnapshot): Redirect {
    const { url, queryParams } = this.extractActivatedRouterData(snapshot);
    const redirectObject = {
      path: [url],
      extras: { queryParams }
    };
    return redirectObject;
  }

  // public getSectionUrl(section: string): string {
  //   const sectionData = find(SectionsConfig, { name: section });
  //   if (sectionData) {
  //     return sectionData.url;
  //   }
  //   let url: string;
  //   forEach(allNavigation, nav => {
  //     forEach(nav.children, sectionParent =>
  //       forEach(sectionParent.children, childrenSection => {
  //         if (childrenSection.id === section) {
  //           url = ((childrenSection.url || '').match(`\/[^/]*\/[^/]*`) || [''])[0];
  //         }
  //       })
  //     );
  //   });
  //   return url;
  // }
  // public getSectionPath(section: string): string[] {
  //   const url = this.getSectionUrl(section);
  //   return url ? [`${url}`] : [`copyright/${section}`];
  // }
  // public isNewElementPage(url: string): boolean {
  //   const patterns = ['/new', '/edit'];
  //   const match = patterns.find(pattern => url.indexOf(pattern) > -1);
  //   return !!match;
  // }
  // public getSectionFromUrl(router: Router) {
  //   if (router) {
  //     const paths = router.url.split('/');
  //     if (paths.length > 2) {
  //       return paths[2].includes('?') ? paths[2].substring(0, paths[2].indexOf('?')) : paths[2];
  //     }
  //   }
  //   return null;
  // }
}

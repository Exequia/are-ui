import { SectionRouterViews, SectionsConfig } from 'config/sections-config';
import { RouterStateUrl } from 'store/root/reducers';

export const routerMocks: { description: string; snapshot: any; expect: RouterStateUrl }[] = [
  {
    description: 'should return a correct works search RouterStateUrl object',
    snapshot: {
      component: null,
      data: {},
      fragment: null,
      outlet: 'primary',
      params: {},
      queryParams: { term: 'smells' },
      routeConfig: null,
      url: [],
      root: null,
      parent: null,
      children: null,
      pathFromRoot: null,
      paramMap: null,
      queryParamMap: null,
      firstChild: {
        component: null,
        data: {},
        fragment: null,
        outlet: 'primary',
        params: {},
        queryParams: { term: 'smells' },
        routeConfig: {
          loadChildren: () => import('../../../../../../../../../../../../git/cube-ui/src/@ice/material.module').then(m => m.IceMaterialModule),
          path: 'copyright'
        },
        url: [{ path: 'copyright', parameters: {}, parameterMap: null }],
        root: null,
        parent: null,
        children: null,
        pathFromRoot: null,
        paramMap: null,
        queryParamMap: null,
        firstChild: {
          component: null,
          data: {},
          fragment: null,
          outlet: 'primary',
          params: {},
          queryParams: { term: 'smells' },
          routeConfig: {
            children: [],
            path: ''
          },
          url: [],
          root: null,
          parent: null,
          children: null,
          pathFromRoot: null,
          paramMap: null,
          queryParamMap: null,
          firstChild: {
            component: null,
            data: {
              section: 'works'
            },
            fragment: null,
            outlet: 'primary',
            params: {},
            queryParams: { term: 'smells' },
            routeConfig: {
              loadChildren: () => import('../../../../../../../../../../../../git/cube-ui/src/@ice/material.module').then(m => m.IceMaterialModule),
              path: ''
            },
            url: [{ path: 'works', parameters: {}, parameterMap: null }],
            root: null,
            parent: null,
            children: null,
            pathFromRoot: null,
            paramMap: null,
            queryParamMap: null,
            firstChild: {
              component: null,
              data: {
                view: SectionRouterViews.search
              },
              fragment: null,
              outlet: 'primary',
              params: {},
              queryParams: { term: 'smells' },
              routeConfig: {
                loadChildren: () => import('../../../../../../../../../../../../git/cube-ui/src/@ice/material.module').then(m => m.IceMaterialModule),
                path: ''
              },
              url: [{ path: 'search', parameters: {}, parameterMap: null }],
              root: null,
              parent: null,
              children: null,
              pathFromRoot: null,
              paramMap: null,
              queryParamMap: null,
              firstChild: {
                component: null,
                data: {
                  view: SectionRouterViews.search
                },
                fragment: null,
                outlet: 'primary',
                params: {},
                queryParams: { term: 'smells' },
                routeConfig: {
                  loadChildren: () => import('../../../../../../../../../../../../git/cube-ui/src/@ice/material.module').then(m => m.IceMaterialModule),
                  path: ''
                },
                url: [],
                root: null,
                parent: null,
                children: null,
                pathFromRoot: null,
                paramMap: null,
                queryParamMap: null,
                firstChild: null
              }
            }
          }
        }
      }
    },
    expect: {
      params: {},
      paths: ['copyright', 'works', 'search'],
      queryParams: {
        term: 'smells'
      },
      section: SectionsConfig.WORKS.name,
      url: 'copyright/works/search',
      view: SectionRouterViews.search
    }
  },
  {
    description: 'should return a correct works detail RouterStateUrl object',
    snapshot: {
      component: null,
      data: {},
      fragment: null,
      outlet: 'primary',
      params: {},
      queryParams: {},
      routeConfig: null,
      url: [],
      root: null,
      parent: null,
      children: null,
      pathFromRoot: null,
      paramMap: null,
      queryParamMap: null,
      firstChild: {
        component: null,
        data: {},
        fragment: null,
        outlet: 'primary',
        params: {},
        queryParams: {},
        routeConfig: {},
        url: [{ path: 'copyright', parameters: {}, parameterMap: null }],
        root: null,
        parent: null,
        children: null,
        pathFromRoot: null,
        paramMap: null,
        queryParamMap: null,
        firstChild: {
          component: null,
          data: {},
          fragment: null,
          outlet: 'primary',
          params: {},
          queryParams: {},
          routeConfig: {
            children: [],
            path: ''
          },
          url: [],
          root: null,
          parent: null,
          children: null,
          pathFromRoot: null,
          paramMap: null,
          queryParamMap: null,
          firstChild: {
            component: null,
            data: {
              section: 'works'
            },
            fragment: null,
            outlet: 'primary',
            params: {},
            queryParams: {},
            routeConfig: {
              loadChildren: () => import('../../../../../../../../../../../../git/cube-ui/src/@ice/material.module').then(m => m.IceMaterialModule),
              path: ''
            },
            url: [{ path: 'works', parameters: {}, parameterMap: null }],
            root: null,
            parent: null,
            children: null,
            pathFromRoot: null,
            paramMap: null,
            queryParamMap: null,
            firstChild: {
              component: null,
              data: {
                view: SectionRouterViews.detail
              },
              fragment: null,
              outlet: 'primary',
              params: { key: 'ICE:32199202' },
              queryParams: {},
              routeConfig: {
                loadChildren: () => import('../../../../../../../../../../../../git/cube-ui/src/@ice/material.module').then(m => m.IceMaterialModule),
                path: ''
              },
              url: [{ path: 'ICE:32199202', parameters: {}, parameterMap: null }],
              root: null,
              parent: null,
              children: null,
              pathFromRoot: null,
              paramMap: null,
              queryParamMap: null,
              firstChild: {
                component: null,
                data: {},
                fragment: null,
                outlet: 'primary',
                params: { tab: 'details' },
                queryParams: {},
                routeConfig: {
                  loadChildren: () => '',
                  path: ''
                },
                url: [{ path: 'details', parameters: {}, parameterMap: null }],
                root: null,
                parent: null,
                children: null,
                pathFromRoot: null,
                paramMap: null,
                queryParamMap: null,
                firstChild: {
                  component: null,
                  data: {},
                  fragment: null,
                  outlet: 'primary',
                  params: { tab: 'details' },
                  queryParams: {},
                  routeConfig: {
                    loadChildren: () => '',
                    path: ''
                  },
                  url: [],
                  root: null,
                  parent: null,
                  children: null,
                  pathFromRoot: null,
                  paramMap: null,
                  queryParamMap: null,
                  firstChild: null
                }
              }
            }
          }
        }
      }
    },
    expect: {
      params: { key: 'ICE:32199202', tab: 'details' },
      paths: ['copyright', 'works', 'ICE:32199202', 'details'],
      queryParams: {},
      section: SectionsConfig.WORKS.name,
      url: 'copyright/works/ICE:32199202/details',
      view: SectionRouterViews.detail
    }
  }
];

import { RouterUtils } from '@ice';
import { routerMocks } from '@ice/utils/router/router.mocks';

describe('RouterUtils', () => {
  describe('extractActivatedRouterData', () => {
    routerMocks.forEach(spec => {
      it(spec.description, () => {
        expect(RouterUtils.extractActivatedRouterData(spec.snapshot)).toEqual(spec.expect);
      });
    });
  });
});

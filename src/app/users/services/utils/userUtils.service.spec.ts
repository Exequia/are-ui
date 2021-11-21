import { TestBed } from '@angular/core/testing';

import { UserUtils } from './userUtils.service';

describe('UserUtilsService', () => {
  let service: UserUtils;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserUtils);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

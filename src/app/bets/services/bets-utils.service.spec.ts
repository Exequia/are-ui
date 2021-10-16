import { TestBed } from '@angular/core/testing';

import { BetsUtilsService } from './bets-utils.service';

describe('BetsUtilsService', () => {
  let service: BetsUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetsUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BetsFacadeService } from './bets-facade.service';

describe('BetsFacadeService', () => {
  let service: BetsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

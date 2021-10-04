import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsBetComponent } from './bets-bet.component';

describe('BetsBetComponent', () => {
  let component: BetsBetComponent;
  let fixture: ComponentFixture<BetsBetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetsBetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

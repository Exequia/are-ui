import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsResultsComponent } from './bets-results.component';

describe('BetsResultsComponent', () => {
  let component: BetsResultsComponent;
  let fixture: ComponentFixture<BetsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

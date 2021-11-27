import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBetsComponent } from './all-bets.component';

describe('AllBetsComponent', () => {
  let component: AllBetsComponent;
  let fixture: ComponentFixture<AllBetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

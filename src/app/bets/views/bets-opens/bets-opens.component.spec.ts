import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsOpensComponent } from './bets-opens.component';

describe('BetsOpensComponent', () => {
  let component: BetsOpensComponent;
  let fixture: ComponentFixture<BetsOpensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetsOpensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsOpensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

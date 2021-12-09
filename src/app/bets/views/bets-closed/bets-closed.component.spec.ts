import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BetsClosedComponent } from './bets-closed.component';

describe('BetsResultsComponent', () => {
  let component: BetsClosedComponent;
  let fixture: ComponentFixture<BetsClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetsClosedComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsNewComponent } from './bets-new.component';

describe('BetsNewComponent', () => {
  let component: BetsNewComponent;
  let fixture: ComponentFixture<BetsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyFieldTimeInputComponent } from './formly-field-time-input.component';

describe('FormlyFieldTimeInputComponent', () => {
  let component: FormlyFieldTimeInputComponent;
  let fixture: ComponentFixture<FormlyFieldTimeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyFieldTimeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyFieldTimeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDataFormComponent } from './app-data-form.component';

describe('AppDataFormComponent', () => {
  let component: AppDataFormComponent;
  let fixture: ComponentFixture<AppDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

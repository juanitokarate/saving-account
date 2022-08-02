import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSavingAccountComponent } from './form-saving-account.component';

describe('FormSavingAccountComponent', () => {
  let component: FormSavingAccountComponent;
  let fixture: ComponentFixture<FormSavingAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSavingAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSavingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

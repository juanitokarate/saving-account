import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSavingAccountComponent } from './card-saving-account.component';

describe('CardSavingAccountComponent', () => {
  let component: CardSavingAccountComponent;
  let fixture: ComponentFixture<CardSavingAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSavingAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSavingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

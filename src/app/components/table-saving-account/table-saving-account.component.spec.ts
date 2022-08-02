import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSavingAccountComponent } from './table-saving-account.component';

describe('TableSavingAccountComponent', () => {
  let component: TableSavingAccountComponent;
  let fixture: ComponentFixture<TableSavingAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSavingAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSavingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

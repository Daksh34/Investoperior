import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtfundComponent } from './debtfund.component';

describe('DebtfundComponent', () => {
  let component: DebtfundComponent;
  let fixture: ComponentFixture<DebtfundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebtfundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

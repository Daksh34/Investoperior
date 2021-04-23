import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityFundComponent } from './equity-fund.component';

describe('EquityFundComponent', () => {
  let component: EquityFundComponent;
  let fixture: ComponentFixture<EquityFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquityFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

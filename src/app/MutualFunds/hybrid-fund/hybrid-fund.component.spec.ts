import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridFundComponent } from './hybrid-fund.component';

describe('HybridFundComponent', () => {
  let component: HybridFundComponent;
  let fixture: ComponentFixture<HybridFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

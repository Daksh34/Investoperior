import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTIIStocksComponent } from './htiistocks.component';

describe('HTIIStocksComponent', () => {
  let component: HTIIStocksComponent;
  let fixture: ComponentFixture<HTIIStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTIIStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HTIIStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

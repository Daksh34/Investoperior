import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Featured1Component } from './featured1.component';

describe('Featured1Component', () => {
  let component: Featured1Component;
  let fixture: ComponentFixture<Featured1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Featured1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Featured1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

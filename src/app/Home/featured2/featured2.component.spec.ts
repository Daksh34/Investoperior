import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Featured2Component } from './featured2.component';

describe('Featured2Component', () => {
  let component: Featured2Component;
  let fixture: ComponentFixture<Featured2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Featured2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Featured2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

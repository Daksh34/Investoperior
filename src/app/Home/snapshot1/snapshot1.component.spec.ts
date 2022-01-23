import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snapshot1Component } from './snapshot1.component';

describe('Snapshot1Component', () => {
  let component: Snapshot1Component;
  let fixture: ComponentFixture<Snapshot1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Snapshot1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Snapshot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

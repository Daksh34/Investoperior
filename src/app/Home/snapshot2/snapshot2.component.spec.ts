import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snapshot2Component } from './snapshot2.component';

describe('Snapshot2Component', () => {
  let component: Snapshot2Component;
  let fixture: ComponentFixture<Snapshot2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Snapshot2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Snapshot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

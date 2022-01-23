import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snapshot3Component } from './snapshot3.component';

describe('Snapshot3Component', () => {
  let component: Snapshot3Component;
  let fixture: ComponentFixture<Snapshot3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Snapshot3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Snapshot3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

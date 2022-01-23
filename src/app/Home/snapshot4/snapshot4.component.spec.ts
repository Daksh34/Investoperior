import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snapshot4Component } from './snapshot4.component';

describe('Snapshot4Component', () => {
  let component: Snapshot4Component;
  let fixture: ComponentFixture<Snapshot4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Snapshot4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Snapshot4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

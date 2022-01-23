import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTSMIYTComponent } from './htsmiyt.component';

describe('HTSMIYTComponent', () => {
  let component: HTSMIYTComponent;
  let fixture: ComponentFixture<HTSMIYTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTSMIYTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HTSMIYTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

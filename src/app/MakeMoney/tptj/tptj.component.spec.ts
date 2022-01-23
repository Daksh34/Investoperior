import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPTJComponent } from './tptj.component';

describe('TPTJComponent', () => {
  let component: TPTJComponent;
  let fixture: ComponentFixture<TPTJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TPTJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TPTJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

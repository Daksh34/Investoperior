import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TWTMMComponent } from './twtmm.component';

describe('TWTMMComponent', () => {
  let component: TWTMMComponent;
  let fixture: ComponentFixture<TWTMMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TWTMMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TWTMMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

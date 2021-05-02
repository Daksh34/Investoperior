import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BGTCIComponent } from './bgtci.component';

describe('BGTCIComponent', () => {
  let component: BGTCIComponent;
  let fixture: ComponentFixture<BGTCIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BGTCIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BGTCIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

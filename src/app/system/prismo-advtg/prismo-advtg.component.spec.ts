import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismoAdvtgComponent } from './prismo-advtg.component';

describe('PrismoAdvtgComponent', () => {
  let component: PrismoAdvtgComponent;
  let fixture: ComponentFixture<PrismoAdvtgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrismoAdvtgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismoAdvtgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

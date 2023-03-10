import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleBookingsComponent } from './double-bookings.component';

describe('DoubleBookingsComponent', () => {
  let component: DoubleBookingsComponent;
  let fixture: ComponentFixture<DoubleBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

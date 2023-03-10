import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestConfirmedBookingsComponent } from './latest-confirmed-bookings.component';

describe('LatestConfirmedBookingsComponent', () => {
  let component: LatestConfirmedBookingsComponent;
  let fixture: ComponentFixture<LatestConfirmedBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestConfirmedBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestConfirmedBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingEndingComponent } from './booking-ending.component';

describe('BookingEndingComponent', () => {
  let component: BookingEndingComponent;
  let fixture: ComponentFixture<BookingEndingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingEndingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingEndingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

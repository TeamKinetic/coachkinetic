import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInvoicingComponent } from './customer-invoicing.component';

describe('CustomerInvoicingComponent', () => {
  let component: CustomerInvoicingComponent;
  let fixture: ComponentFixture<CustomerInvoicingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerInvoicingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

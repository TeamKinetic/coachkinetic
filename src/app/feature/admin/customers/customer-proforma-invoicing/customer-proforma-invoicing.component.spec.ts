import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProformaInvoicingComponent } from './customer-proforma-invoicing.component';

describe('CustomerProformaInvoicingComponent', () => {
  let component: CustomerProformaInvoicingComponent;
  let fixture: ComponentFixture<CustomerProformaInvoicingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerProformaInvoicingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProformaInvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerInvoicingComponent } from './customer-invoicing/customer-invoicing.component';
import { CustomerProformaInvoicingComponent } from './customer-proforma-invoicing/customer-proforma-invoicing.component';
import { OutstandingInvoicesComponent } from './outstanding-invoices/outstanding-invoices.component';
import { SummaryReportComponent } from './summary-report/summary-report.component';
import { ViewEditCustomersComponent } from './view-edit-customers/view-edit-customers.component';

@NgModule({
  declarations: [
    CustomerHomeComponent,
    AddCustomerComponent,
    CustomerInvoicingComponent,
    CustomerProformaInvoicingComponent,
    OutstandingInvoicesComponent,
    SummaryReportComponent,
    ViewEditCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }

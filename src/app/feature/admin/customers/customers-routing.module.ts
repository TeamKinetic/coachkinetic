import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerInvoicingComponent } from './customer-invoicing/customer-invoicing.component';
import { CustomerProformaInvoicingComponent } from './customer-proforma-invoicing/customer-proforma-invoicing.component';
import { OutstandingInvoicesComponent } from './outstanding-invoices/outstanding-invoices.component';
import { SummaryReportComponent } from './summary-report/summary-report.component';
import { ViewEditCustomersComponent } from './view-edit-customers/view-edit-customers.component';

const routes: Routes = [
  {path:'', component: CustomerHomeComponent,
  children: [
    {path:'view-edit-customer', component: ViewEditCustomersComponent},
    {path:'add-customer', component: AddCustomerComponent},
    {path:'summary-report', component: SummaryReportComponent},
    {path:'customer-invoicing',  component: CustomerInvoicingComponent},
    {path:'customer-proforma', component: CustomerProformaInvoicingComponent},
    {path:'outstanding-invoices', component: OutstandingInvoicesComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

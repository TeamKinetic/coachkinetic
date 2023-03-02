import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
{path:'', component: AdminHomeComponent,
  children: [
    {path: 'session', loadChildren:()=> 
    import('./sessions/sessions.module')
    .then((m)=> m.SessionsModule)},

    {path: 'customer', loadChildren:()=> 
    import('./customers/customers.module')
    .then((m)=> m.CustomersModule)},


  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './feature/public/index/index.component';
import { LoginAdminComponent } from './core/components/login/login-admin/login-admin.component';
import { LoginCoachComponent } from './core/components/login/login-coach/login-coach.component';
import { LoginProviderComponent } from './core/components/login/login-provider/login-provider.component';
import { ResetComponent } from './core/components/login/reset/reset.component';

const routes: Routes = [
  {path:'index', component: IndexComponent},
  {path:'login-admin', component: LoginAdminComponent},
  {path:'login-coach', component: LoginCoachComponent},
  {path:'login-provider', component: LoginProviderComponent},
  {path:'reset', component: ResetComponent},


  { path: 'admin', loadChildren:()=> import('./feature/admin/admin.module')
  .then((m)=> m.AdminModule)},
  { path: 'coach', loadChildren:()=> import('./feature/coach/coach.module')
  .then((m)=> m.CoachModule)},

  { path: '', redirectTo: 'index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

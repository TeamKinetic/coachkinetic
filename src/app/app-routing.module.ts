import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './feature/public/index/index.component';

const routes: Routes = [
  {path:'index', component: IndexComponent},

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

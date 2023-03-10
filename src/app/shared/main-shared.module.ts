import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
   
  ],
  exports: [
    TopNavComponent,
    SideNavComponent
  ]
})
export class MainSharedModule { }
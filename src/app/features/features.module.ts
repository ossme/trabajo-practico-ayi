import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { UserFormComponent } from './components/user-form/user-form.component';



@NgModule({
  declarations: [UserListComponent, UserDetailComponent,TarjetasComponent, UserFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    UserListComponent,
    UserDetailComponent,
    UserFormComponent
  ]
})
export class FeaturesModule { }

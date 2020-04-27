import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [UserListComponent, UserDetailComponent,TarjetasComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule
  ],
  exports:[
    UserListComponent,
    UserDetailComponent,
  ]
})
export class FeaturesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';



@NgModule({
  declarations: [LoginComponent, UserlistComponent],
  imports: [
    CommonModule
  ],
  exports:[LoginComponent]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormsModule }        from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, UserlistComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[LoginComponent]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserListComponent } from './features/components/user-list/user-list.component';
import { UserDetailComponent } from './features/components/user-detail/user-detail.component';
import { UserFormComponent } from './features/components/user-form/user-form.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserListComponent },
  { path: 'user-detail/:idUser', component: UserDetailComponent },
  { path: 'user-form', component: UserFormComponent },
  { path: '**',pathMatch:'full', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

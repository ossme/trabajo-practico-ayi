import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserListComponent } from './features/components/user-list/user-list.component';
import { UserDetailComponent } from './features/components/user-detail/user-detail.component';
import {AuthGuard} from './shared/guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserListComponent,canActivate: [AuthGuard] },
  { path: 'user-detail/:idUser', component: UserDetailComponent ,canActivate: [AuthGuard]},
  { path: '**',pathMatch:'full', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { AuthGuard } from './service/auth.guard';
import { AuthAdminGuard } from './service/auth.guard';
import { Error404Component } from './sharedComponents/error404/error404.component';
import { CreateEditUserComponent } from './user/create-edit/create-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListContactsComponent } from './contacts/list/list.component';
import { CreateEditContactsComponent } from './contacts/create-edit/create-edit.component';
import { ListUserComponent } from './user/list/list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'contacts-create-edit', component: CreateEditContactsComponent, canActivate: [AuthGuard] },
  { path: 'contacts-list', component: ListContactsComponent, canActivate: [AuthGuard] },
  { path: 'user-create-list', component: CreateEditUserComponent, canActivate: [AuthAdminGuard] },
  { path: 'user-list', component: ListUserComponent, canActivate: [AuthAdminGuard]}
  //{ path: '**', component: Error404Component}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

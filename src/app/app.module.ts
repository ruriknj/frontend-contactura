import { NavigationBarComponent } from './sharedComponents/navigation-bar/navigation-bar.component';
import { Error404Component } from './sharedComponents/error404/error404.component';
import { ListUserComponent } from './user/list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CreateEditContactsComponent } from './contacts/create-edit/create-edit.component';
import { ListContactsComponent } from './contacts/list/list.component';
import { CreateEditUserComponent } from './user/create-edit/create-edit.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateEditContactsComponent,
    CreateEditUserComponent,
    ListContactsComponent,
    ListUserComponent,
    Error404Component,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

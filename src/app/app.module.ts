import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { UsersSearchInputComponent } from './components/users-search-input/users-search-input.component';
import { UsersSearchOutputComponent } from './components/users-search-output/users-search-output.component';

import {GitUsersApiService} from "./services/git-users-api.service";
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UsersSearchInputComponent,
    UsersSearchOutputComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    MaterialModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [GitUsersApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

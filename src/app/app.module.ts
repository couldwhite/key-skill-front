import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {ModComponent} from './mod/mod.component';
import {AdminComponent} from './admin/admin.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from "./auth/auth-interceptor";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ExerciseComponent} from './exercise/exercise.component';
import {MatDialogModule} from "@angular/material/dialog";
import { NewUserModalComponent } from './new-user-modal/new-user-modal.component';
import {SignUpInfo} from "./auth/signup-info";
import { LogoutComponent } from './logout/logout.component';
import { NewExerciseModalComponent } from './new-exercise-modal/new-exercise-modal.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserComponent,
    ModComponent,
    AdminComponent,
    ExerciseComponent,
    NewUserModalComponent,
    LogoutComponent,
    NewExerciseModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}

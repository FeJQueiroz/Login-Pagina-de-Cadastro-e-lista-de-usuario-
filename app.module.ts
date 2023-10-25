import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MyComponentsComponent } from './my-components/my-components.component';
import { LoginComponent } from './pages/login/login.component';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MyComponentsComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';
import { RegisterComponent } from 'src/app/auth/pages/register/register.component';
import { RouterModule } from '@angular/router';
import { AuthLayoutRoutes } from './auth-layout-routing.module';

@NgModule({
  declarations: [ LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(AuthLayoutRoutes)
  ]
})
export class AuthLayoutModule { }

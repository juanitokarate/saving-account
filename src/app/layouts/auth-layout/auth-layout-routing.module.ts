import {  Routes } from '@angular/router';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';
import { RegisterComponent } from 'src/app/auth/pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
  { path: 'login',          component: LoginComponent },
  { path: 'registrar',       component: RegisterComponent },
];

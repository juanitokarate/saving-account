import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthGuardService } from './services/auth-guard.service';

export const AppRoutingModule: Routes = [
  { 
    path:'',
    component:AdminLayoutComponent,
    canActivate:[AuthGuardService],
    children: [
      {
        path:"", 
        loadChildren: () => import("./layouts/admin-layout/admin-layout.module")
        .then(m => m.AdminLayoutModule)
      }
    ]
  },
  { 
    path:'', 
    component:AuthLayoutComponent,  
    children: [
      {
        path: '', 
        loadChildren: () => import('./layouts/auth-layout/auth-layout.module')
        .then(m => m.AuthLayoutModule )
      }
    ]
  },
  {
    path: "**",
    redirectTo: "cuenta-ahorro",
  },
  {
    path: "",
    redirectTo: "cuenta-ahorro",
    pathMatch: "full",
  },
];
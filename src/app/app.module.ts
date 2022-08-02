import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';


import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { CardSavingAccountComponent } from './components/card-saving-account/card-saving-account.component';
import { TableSavingAccountComponent } from './components/table-saving-account/table-saving-account.component';
import { AuthGuardService } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    CardSavingAccountComponent,
    TableSavingAccountComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutingModule),
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

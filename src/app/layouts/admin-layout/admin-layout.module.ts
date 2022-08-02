import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionComponent } from 'src/app/page/transaction/transaction.component';
import { SavingAccountComponent } from 'src/app/page/saving-account/saving-account.component';
import { AdminLayoutRoutes } from './admin-layout-routing.module';
import { RouterModule } from '@angular/router';
import { FormSavingAccountComponent } from 'src/app/components/form-saving-account/form-saving-account.component';
import { FormTransactionComponent } from 'src/app/components/form-transaction/form-transaction.component';
import { TableTransactionComponent } from 'src/app/components/table-transaction/table-transaction.component';


@NgModule({
  declarations: [
    SavingAccountComponent,
    TransactionComponent,
    FormSavingAccountComponent,
    FormTransactionComponent,
    TableTransactionComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class AdminLayoutModule { }

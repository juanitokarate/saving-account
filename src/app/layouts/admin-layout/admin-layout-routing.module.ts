import {  Routes } from '@angular/router';
import { SavingAccountComponent } from 'src/app/page/saving-account/saving-account.component';
import { TransactionComponent } from 'src/app/page/transaction/transaction.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'cuenta-ahorro/:nombreCuentaAhorro' , component: SavingAccountComponent },
  { path: 'transaccion/:nombreCuentaAhorro'   , component: TransactionComponent   },
  { path: 'cuenta-ahorro'                     , component: SavingAccountComponent },
  { path: 'transaccion'                       , component: TransactionComponent   },
];

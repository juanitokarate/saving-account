import { Component, EventEmitter, OnInit, Output  } from '@angular/core'
import { SavingAccountService                     } from '../../services/saving-account.service'
import { ISavingAccount                           } from '../../model/isaving-account'
import { Router                                   } from '@angular/router'

@Component({
  selector: 'app-table-saving-account',
  templateUrl: './table-saving-account.component.html',
  styleUrls: ['./table-saving-account.component.css']
})
export class TableSavingAccountComponent implements OnInit {

  listSavingAccount:ISavingAccount[] = []
  @Output()
  viewOutputItemSavingAccount : EventEmitter<ISavingAccount> = new EventEmitter()

  constructor(
    private savinAccountService:SavingAccountService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.savinAccountService
    .getAllSavingAccount()
    .subscribe(
      (res: ISavingAccount[]) => {
        Object.keys(res).map(
          key => {
            const DATASAVINGACCOUNT:ISavingAccount={
              name:key,
              cuenta:res[key]
            }
            this.listSavingAccount.push(DATASAVINGACCOUNT)
          }
        )
        this.listSavingAccount = this.listSavingAccount
        .filter(
          savingAccount => 
          (
            savingAccount
            .cuenta
            .idCliente != "" 
            && 
            savingAccount
            .cuenta
            .numeroCuenta != ""
          )
          ||
          ( 
            savingAccount
            .cuenta
            .numeroCuenta 
            && 
            savingAccount
            .cuenta
            .estado
          )
        )
        .reverse()
      }
    )
  }

  viewSavingAccount(itemSavingAccount:ISavingAccount){
    this.viewOutputItemSavingAccount.emit(itemSavingAccount)
  }
}

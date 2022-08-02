import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ISavingAccount } from 'src/app/model/isaving-account';
import { SavingAccountService } from '../../services/saving-account.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  postSavingAccount         : ISavingAccount
  showListTransaction:boolean = false
  constructor(
    private routerParam:ActivatedRoute,
    private savingAccountService:SavingAccountService
  ) { 
    this.routerParam.params
    .subscribe(
      paramSavingAccount => {
        paramSavingAccount["nombreCuentaAhorro"]
        if (paramSavingAccount["nombreCuentaAhorro"]) {
          this.savingAccountService.getAllSavingAccount()
          .subscribe(
            (data:ISavingAccount[]) => {
              Object.keys(data).map(
                key => {
                  if (key === paramSavingAccount["nombreCuentaAhorro"]) {
                    const POSTSAVINGACCOUNT :ISavingAccount = {
                      name: key,
                      cuenta:data[key]
                    }
                    this.postSavingAccount = POSTSAVINGACCOUNT
                  }
                }
              )              
            }
          )
        }
      } 
    )
  }

  ngOnInit(): void {
    this.routerParam.params
    .subscribe(
      paramSavingAccount => {
        paramSavingAccount["nombreCuentaAhorro"]
        
      } 
    )
  }

}

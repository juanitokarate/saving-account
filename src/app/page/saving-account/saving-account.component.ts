import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ISavingAccount } from 'src/app/model/isaving-account'
import { SavingAccountService } from '../../services/saving-account.service'

@Component({
  selector: 'app-saving-account',
  templateUrl: './saving-account.component.html',
  styleUrls: ['./saving-account.component.css']
})
export class SavingAccountComponent implements OnInit {

  @Input() viewItemInputSavingAccount: ISavingAccount
           viewSavingAccount         : ISavingAccount
           postSavingAccount         : ISavingAccount
           
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
    
  }

}

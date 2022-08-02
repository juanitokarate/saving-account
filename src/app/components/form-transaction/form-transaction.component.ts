import { FormControl, FormGroup, Validators } from '@angular/forms'
import { TransactionService                 } from '../../services/transaction.service'
import { Component, Input, OnInit           } from '@angular/core'
import { ITransaction                       } from '../../model/itransaction'
import { Router                             } from '@angular/router'
import { ISavingAccount } from '../../model/isaving-account';

@Component({
  selector: 'app-form-transaction',
  templateUrl: './form-transaction.component.html',
  styleUrls: ['./form-transaction.component.css']
})
export class FormTransactionComponent implements OnInit {
  @Input() savingAccountToPost: ISavingAccount
  @Input() dataAccountToPost  : ISavingAccount[]
  transactionControl          : FormGroup
  savingAccountData           : ISavingAccount
  transactionData             : ITransaction
  constructor(
    private transactionService: TransactionService,
    private router            : Router
  ) {
    this.transactionControl = this.CreateFormGroup()
   }
   dataToPost(){
    let ACCOUNT= this.savingAccountData.cuenta.numeroCuenta
    this.transactionControl.controls["numeroCuenta"].setValue(ACCOUNT)
  }
  ngOnInit(): void {
    console.log(this.savingAccountToPost);
    
    if (this.savingAccountToPost) {
      this.savingAccountData = this.savingAccountToPost
      this.dataToPost()
    }
  }

  CreateFormGroup() {
    return new FormGroup
    (
      {
        fechaUltimaAct: new FormControl(new Date().toISOString().slice(0,10), [Validators.required]),
        numeroCuenta:   new FormControl("", [Validators.required]),
        terminal:       new FormControl("", [Validators.required]),
        usuario:        new FormControl("desarrollo@prueba.com", [Validators.required]),
        monto:          new FormControl(0.0, [Validators.required]),
        tipo:           new FormControl("DEPOSITO", [Validators.required]),
      }
    )
  }

  onSaveForm(){
    const DATATRANSACTION:ITransaction={name:"",transaccion:this.transactionControl.value}
    this.transactionData = DATATRANSACTION    
    if (this.transactionControl.valid) {
      this.transactionService
      .postTransaction(this.transactionData)
      .subscribe(
        (res) => {
          console.log(res)
          this.router.navigate(["/transaccion"])
        }
      )
    }else this.onResetForm()

    console.log(this.transactionData)
  }

  onResetForm(){
    this.transactionControl.reset()
    this.transactionControl = this.CreateFormGroup()
  }

  get fechaUltimaAct()    { return this.transactionControl.get("fechaUltimaAct") }
  get numeroCuenta()      { return this.transactionControl.get("numeroCuenta") }
  get terminal()          { return this.transactionControl.get("terminal") }
  get usuario()           { return this.transactionControl.get("usuario") }
  get monto()             { return this.transactionControl.get("monto") }
  get tipo()              { return this.transactionControl.get("tipo") }
}

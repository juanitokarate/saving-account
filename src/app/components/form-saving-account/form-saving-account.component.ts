import { FormControl, FormGroup, Validators } from '@angular/forms'
import { SavingAccountService               } from '../../services/saving-account.service'
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISavingAccount                     } from '../../model/isaving-account'
import { Router                             } from '@angular/router'

@Component({
  selector: 'app-form-saving-account',
  templateUrl: './form-saving-account.component.html',
  styleUrls: ['./form-saving-account.component.css']
})
export class FormSavingAccountComponent implements OnInit, OnChanges {

  @Input() savingAccountToPost: ISavingAccount
  @Input() dataAccountToPost  : ISavingAccount[]
  savingAccountControl        : FormGroup
  savingAccountData           : ISavingAccount
  constructor(
    private savingAccountService:SavingAccountService,
    private router              :Router
  ) { 
    this.savingAccountControl = this.CreateFormGroup()

  }

  dataToPost(){
    let CLIENT= this.savingAccountData.cuenta.idCliente
    this.savingAccountControl.controls["idCliente"].setValue(CLIENT)
  }

  onSaveForm(){
    this.savingAccountData.cuenta = this.savingAccountControl.value
    if (this.savingAccountControl.valid) {
      this.savingAccountService
      .postSavingAccount(this.savingAccountData)
      .subscribe(
        (res) => {
          this.router.navigate(["cuenta-ahorro"])
        }
      )
    }else this.onResetForm()

    console.log(this.savingAccountData)
    
  }

  ngOnInit(): void {
    console.log(this.savingAccountToPost);
    if (this.savingAccountToPost) {
      this.savingAccountData = this.savingAccountToPost
      this.dataToPost()
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes.savingAccountToPost.currentValue);
      this.savingAccountData = changes.savingAccountToPost.currentValue
      this.dataToPost();
  }
  CreateFormGroup() {
    return new FormGroup(
      {
        fechaUltimaAct: new FormControl(new Date().toISOString().slice(0,10), [Validators.required]),
        numeroCuenta  : new FormControl("", [Validators.required]),
        idCliente     : new FormControl("", [Validators.required]),
        estado        : new FormControl("ACTIVA", [Validators.required]),
        saldo         : new FormControl(0.0, [Validators.required]),
      }
    )
  }

  onResetForm(){
    this.savingAccountControl.reset()
    this.savingAccountControl = this.CreateFormGroup()
  }

  get fechaUltimaAct()    { return this.savingAccountControl.get("fechaUltimaAct") }
  get numeroCuenta()      { return this.savingAccountControl.get("numeroCuenta") }
  get idCliente()         { return this.savingAccountControl.get("idCliente") }
  get estado()            { return this.savingAccountControl.get("estado") }
  get saldo()             { return this.savingAccountControl.get("saldo") }
}

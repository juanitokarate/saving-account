import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { ISavingAccount                                     } from '../../model/isaving-account'

@Component({
  selector: 'app-card-saving-account',
  templateUrl: './card-saving-account.component.html',
  styleUrls: ['./card-saving-account.component.css']
})
export class CardSavingAccountComponent implements OnInit, OnChanges {
  @Input()  viewItemInputSavingAccount:ISavingAccount
            viewSavingAccount         :ISavingAccount
  constructor() { }

  ngOnInit(): void {
    this.changeCardSavingAccount()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.viewSavingAccount = changes.viewItemInputSavingAccount.currentValue
  }

  changeCardSavingAccount(){
    this.viewSavingAccount = this.viewItemInputSavingAccount
  }
}

import { TransactionService } from '../../services/transaction.service'
import { Component, OnInit  } from '@angular/core'
import { ITransaction       } from '../../model/itransaction'

@Component({
  selector: 'app-table-transaction',
  templateUrl: './table-transaction.component.html',
  styleUrls: ['./table-transaction.component.css']
})
export class TableTransactionComponent implements OnInit {
  listTransaction:ITransaction[] = []
  constructor(
    private transactionService:TransactionService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }
  
  getAll(){
    this.transactionService
    .getallTransaction()
    .subscribe(
      (res:ITransaction[]) => {
        Object
        .keys(res)
        .map(
          (key) => {
            const 
            DATATRANSACTION:ITransaction = {
              transaccion :res[key],
              name        :key
            }
            this.listTransaction.push(DATATRANSACTION)
          }
        )       
        this.listTransaction.reverse() 
      }
    )
  }

}

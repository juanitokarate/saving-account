import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from "rxjs/operators"
import { JwtService } from './jwt.service';
import { ITransaction } from '../model/itransaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private readonly baseURI = "https://mibanco-333616-default-rtdb.firebaseio.com/transacciones/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json?auth="
  private readonly requestDataURI = this.baseURI + this.jwt.jwt;
  constructor(
    private httpClient:HttpClient,
    private jwt:JwtService
  ) { }

  postTransaction(transactionFormData:ITransaction):Observable<any>{
    return this.httpClient
    .post(this.requestDataURI, transactionFormData.transaccion)
    .pipe(
      catchError(this.handleError)
    )
  }

  getallTransaction():Observable<ITransaction[]>{
    return this.httpClient
    .get<ITransaction[]>(this.requestDataURI)
    .pipe(
      retry(1)
    )
  }

  private handleError(error: HttpErrorResponse){
    let ErrorMessage = ""
    if (error.error instanceof ErrorEvent) {
      ErrorMessage = error.error.message
    } 
    else {
      ErrorMessage = error.error + error.status
    }
    return throwError(ErrorMessage)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators"
import { JwtService } from './jwt.service';
import { ISavingAccount } from '../model/isaving-account';

@Injectable({
  providedIn: 'root'
})
export class SavingAccountService {
  private readonly baseURI = "https://mibanco-333616-default-rtdb.firebaseio.com/cuentaAhorro/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json?auth="
  private readonly requestDataURI = this.baseURI + this.jwt.jwt

  constructor(
    private httpClient:HttpClient,
    private jwt:JwtService
    ) { }

  postSavingAccount(savingAccountFormData:ISavingAccount):Observable<any>{
    return this.httpClient
    .post(this.requestDataURI, savingAccountFormData.cuenta)
    .pipe(
      catchError(this.handleError)
    )
  }

  getAllSavingAccount():Observable<ISavingAccount[]>{
    return this.httpClient
    .get<ISavingAccount[]>(this.requestDataURI)
    .pipe(
      catchError(this.handleError)
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

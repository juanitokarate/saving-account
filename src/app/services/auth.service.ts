import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators"
import { IAuth } from '../model/iauth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseURI = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB-p8CKoaQr097NJ8YJRpoWpezJj5xRRUI"
  constructor(private httpClient: HttpClient) { }

  login(loginFormData:IAuth):Observable<any>{
    return this.httpClient
    .post(this.baseURI,loginFormData)
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

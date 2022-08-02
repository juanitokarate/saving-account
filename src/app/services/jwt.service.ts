import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class JwtService {
  jwt:string
  decodedToken: {[key:string]:string}
  constructor(
    private localStorageService :LocalStorageService,
    ) {
    var token = localStorageService.get("access_token")
    if(token != null)
      this.setToken(token)
   }

   setToken(token:string){
    if(token){
      this.jwt = token;
      this.localStorageService.set("access_token", this.jwt)
    }
   }

   removeToken() {
    this.jwt = "";
    this.decodedToken = null;
    this.localStorageService.remove("access_token");
    return true;
  }
  
  decodeToken() {
    if (this.jwt) {
      this.decodedToken = jwt_decode(this.jwt);
    }
  }

  getDecodeToken() {
    return jwt_decode(this.jwt);
  }

  getUser() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.user_id : null;
  }

  getEmailId() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.email : null;
  }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? Number(this.decodedToken.exp) : null;
  }


  isTokenExpired(): boolean {
    const expiryTime: number = this.getExpiryTime();
    if (expiryTime) {
      return 1000 * expiryTime - new Date().getTime() < 5000;
    } else {
      return false;
    }
  }
}

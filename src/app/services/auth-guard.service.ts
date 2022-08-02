import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { LocalStorageService } from './local-storage.service';
import { JwtService } from './jwt.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(
    private localStorageService: LocalStorageService,
    private jwtService: JwtService,
    private router:Router
  ) { }
  canActivate
  (
    next:ActivatedRouteSnapshot, 
    state:RouterStateSnapshot
  ):Observable<boolean> | Promise<boolean> | boolean {
    if (this.jwtService.getUser()) {
      if (this.jwtService.isTokenExpired()) {
        this.router.navigate(["/login"])
      }
      else
        return true
    }
    else{
      this.localStorageService.remove("access_token")
      this.router.navigate(["/login"])
      return false
    }
    return true;
  }
}

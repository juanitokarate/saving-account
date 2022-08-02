import { Component, OnInit } from '@angular/core';
import { ISavingAccount } from '../../model/isaving-account';
import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  viewSavingAccount:ISavingAccount
  userEmail:string;
  userImg:string
  constructor(
    private jwtService:JwtService
  ) { }

  ngOnInit(): void {
    this.userEmail = this.jwtService.getEmailId()
    this.userImg ="./../../../assets/img/theme/default.png"
    
  }

  viewSavingAccountOfTable(emitedItemSavingAccount:ISavingAccount){
    this.viewSavingAccount = emitedItemSavingAccount
  }

  logOut(){
    if (this.jwtService.removeToken()) {
      alert("CERRANDO SESIÓN")
    }
  }

  imgClick(){
    debugger
    if (this.userImg.toString() === "./../../../assets/img/theme/default.png") {
      this.userImg = "./../../../assets/img/theme/sketch.jpg"
    }
    else{
      this.userImg = "./../../../assets/img/theme/default.png"
    }
  }

}

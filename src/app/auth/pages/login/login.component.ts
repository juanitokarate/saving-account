import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAuth } from 'src/app/model/iauth';
import { JwtService } from 'src/app/services/jwt.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginControl: FormGroup
  authData    : IAuth
  show        : boolean = false
  constructor(
    private authService :AuthService,
    private router      :Router,
    private jwt         :JwtService
    ) { }

  doingLogin(loginAuthData?:IAuth){
    
    this.authService.login(loginAuthData?loginAuthData:this.authData)
    .subscribe(
      (res:any) => {
        this.jwt    .setToken(res.idToken)
        this.router .navigate(["/"])
      },
      (err) => {
        console.error(err)
        alert("ERROR AL INICIAR SESION")
      }
    )
  }

  login() {
    const pass = prompt("INGRESA LA CONTRASEÑA DE: DESARROLLO@PRUEBA.COM ")
    const confirmElement = confirm(`SEGURO QUE QUIERES USAR LOGIN AUTH CON LA CONTRASEÑA ${Object.keys(pass).map(key => "*")} `)
    if (confirmElement) {
      if (pass.toLowerCase() === "pruebas001") {
        const POSTAUTH:IAuth = {
          "email":"desarrollo@prueba.com",
          "password":"pruebas001",
          "returnSecureToken":true
        }
        this.doingLogin(POSTAUTH)
      }else{
        alert("ERROR AL INICIAR SESIÓN")
      }
    }
  }

  onSaveForm(){
    this.show     = false;
    this.authData = this.loginControl.value;
    if (this.loginControl.valid)
      this.doingLogin()
    else
      this.onResetForm();
  }

  ngOnInit(): void {
    this.loginControl = this.CreateFormGroup();
  }

  CreateFormGroup() {
    return new FormGroup({
      returnSecureToken : new FormControl(true,  [Validators.required]),
      password          : new FormControl("",       [Validators.required, Validators.minLength(6)]),
      email             : new FormControl("",       [Validators.required, Validators.email]),
    });
  }

  onResetForm(){
    this.loginControl.reset();
    this.loginControl = this.CreateFormGroup();
  }

  get email() { return this.loginControl.get("email") }
  get password() { return this.loginControl.get("password") }
}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import  { Database}  from '../data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  constructor(private  router:Router,private loginService:LoginService){}
  personne:any;
  database :any=Database;
  ngOnInit(): void {
      console.log(this.database)
      console.log(localStorage.getItem("role"))
  }

  loginform= new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.min(8)]),
  })

 
  get user(){
    return this.loginform.get('user');
  }
 get password(){
  return this.loginform.get('password')
 }

 autentification(){
  
  this.personne=this.database.forEach((item: {  role: string;  cni: string; password: string | null | undefined; email: AbstractControl<any, any> | null | undefined; }) => {
    if(item.email == this.user?.value && item.password==this.password?.value ){
      localStorage.setItem("cni",item.cni)
      localStorage.setItem("role",item.role)
       this.router.navigate(['dashboard']);
    }
  });
 }

 
}

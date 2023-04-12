import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  constructor(private  router:Router,private loginService:LoginService){}
  personne:any;
  ngOnInit(): void {
   console.log( this.loginService.findAll().subscribe(
      (Response)=>this.personne=Response))
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
   
  this.router.navigate(['dashboard']);
  
  localStorage.setItem("id","1");
  localStorage.getItem("")
    
 }

 
}

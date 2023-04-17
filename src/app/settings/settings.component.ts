import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Database } from '../data';
import { Router } from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  email: any;

  constructor(private  router:Router) { }
data=Database
  ngOnInit(): void {
  
      console.log(this.helper);
  }

    updateForm= new FormGroup({
    password:new FormControl('',[Validators.required,Validators.min(8)]),
    passwordConfirmed:new FormControl('',[Validators.required,Validators.min(8)]),
  })
  
helper:any[]=[]
list=this.data.forEach(item=>{
  if(item.cni== localStorage.getItem("cni"))
  this.helper.push(item.email)
})
  
  login(){
    const email=this.updateForm.get('email');
    const passwordc=this.updateForm.get('password');
    const password=this.updateForm.get('passwordConfirmed');
    this.router.navigate(['dashboard'])
  }

}

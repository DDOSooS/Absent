import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit(): void {
    console.log( this.loginService.findAll)
  }
save(){
    let id =sessionStorage.getItem('id');
  console.log(id);
 }
 telechargement(id:number){
  this.router.navigate(['telecharger',id])
 }
 absence(id:number){
  this.router.navigate(['absence',id])
 }
}

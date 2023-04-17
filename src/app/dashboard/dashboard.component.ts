import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Database } from '../data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
      if(localStorage.getItem("role")=="1")
    this.student=true
    else if(localStorage.getItem("role")=="2")
    this.professeur=true;


  }

  constructor(private router:Router,private loginService:LoginService) { }
 
  professeur :Boolean;
 student:Boolean;

 data=Database
 hepler:any[]=[]

 list=this.data.forEach(item => {
      if(item.cni==localStorage.getItem("cni")){ 
      return item.module.forEach(item1=>{
          this.hepler.push([item1.id,item1.nomModule,item1.total])
      }
      
      )
    }
  return this.hepler;
 });

  check(){
  
    console.log(this.professeur);
    console.log(this.student);
  }
  helpe:any[]=[]
 list1=this.data.forEach(item=>{
  if(item.cni==localStorage.getItem("cni")){
    
    item.module.forEach(element=>{
       this.helpe.push ([element.id, element.formation ,element.nomModule])
    })
  }
 })
  


 telechargement(id:number){
  this.router.navigate(['telecharger',id])
 }
 absencelist(id:number){
  this.router.navigate(['abdencelist',id])
 }
 absence(id:number){
  this.router.navigate(['absence',id])
 }
}

import { Component, OnInit } from '@angular/core';
import { navbarData } from '../sidenav/nav-data';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Database } from '../data';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
[x: string]: any;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() 
  {
              console.log("mylistttttttttttttttttttttttttttttttttttttttttt")
   console.log("helper",this.helper)
  this.data.forEach(item=>{
  console.log(item.module)
  item.module.forEach(element=>{
    if(element.id==this.route.snapshot.paramMap.get("id") && item.cni ==localStorage.getItem("cni")){
      console.log(element.list)
    }

  })  
})

  }
firstButtonClicked=false;
absent:boolean=false;

devices=["TP","TD","COURS"]
type:String
onChange(deviceValue:any) {
      this.type=deviceValue.target.value;
      console.log(deviceValue.target.value);
}

data=Database
helper:any[]=[]
list=this.data.forEach(item=>{
  item.module.forEach(element=>{
    if(element.id==this.route.snapshot.paramMap.get("id") && item.cni ==localStorage.getItem("cni")){
      this.helper.push(element.list)
    }
    
  })  
})




  fieldsChange(values:any):void {
    console.log(values.currentTarget.checked);
  }

  



  refresh(): void {
    window.location.reload();
}
saveAbsence(){
    console.log("s");
    this.router.navigate(['dashboard']);
    
  }
}


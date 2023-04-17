import { Component, OnInit } from '@angular/core';
import { Database } from '../data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-absence-list',
  templateUrl: './absence-list.component.html',
  styleUrls: ['./absence-list.component.css']
})
export class AbsenceListComponent implements OnInit {
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
    console.log(this.helper)
    this.check()
  }
  data=Database;
  helper:any[]=[];
  list=this.data.forEach(element => {
    if(element.cni==localStorage.getItem("cni")  ){
      element.module.forEach(item => {
       if( item.id==this.route.snapshot.paramMap.get('id'))
        this.helper.push(item.list)
      });
    }
    
  });
  check(){
    for(let hel of this.helper){
      console.log(hel)
      for(let he of hel)
      console.log(he.date)
    }

  }

}

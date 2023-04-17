import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../model/user'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

private usersUrl: string;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8019/personne';
   
  }
    users: User[]=[];
  
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}`);
    
  }

  isAuthentication( email:any,password:any){

    this.findAll().subscribe(data=>{
      this.users=data;
    })
    console.log(this.users)
  
    
  }

}

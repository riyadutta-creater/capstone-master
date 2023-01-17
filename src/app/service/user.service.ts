import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login, signUp } from '../user-auth/login';
import { User } from '../user-auth/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    public url="api/users";
    products:User[]=[];
    invalidUserAuth= new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private router:Router) { }
  userSignUp(user:signUp){
   this.http.post((this.url),user,{observe:'response'})
   .subscribe((result)=>{
    if(result){
      localStorage.setItem('user',JSON.stringify(result.body));
      this.router.navigate(['home']);
    }
    
   })
    
  }
  userLogin(data:login){
    this.http.get<signUp[]>(`this.url?email=${data.email}&password=${data.password}`,
    {observe:'response'}
    ).subscribe((result)=>{
      if(result && result.body?.length){
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        this.router.navigate(['home']);
        this.invalidUserAuth.emit(false)
      }else{
        this.invalidUserAuth.emit(true)
      }
    })
  }

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/']);
    }
  }
}
import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { login, signUp } from '../user-auth/login';
// import { Seller } from '../admin-auth/admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public url="api/seller";
  // seller!:Seller[];
  isSellerLoggedIn= new BehaviorSubject<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false)

  constructor(private http:HttpClient, private router:Router) { }
  userSignUp(data:signUp){
    this.http.post('this.url',
    data,
    {observe:'response'}).subscribe((result)=>{
      console.warn(result)
      if(result){
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['home'])
      }
    })
  } 
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['home'])
    }
  }
  userLogin(data:login){
   this.http.get(`this.url?email=${data.email}&password=${data.password}`,
   {observe:'response'}).subscribe((result:any)=>{
    console.warn(result)
    if(result && result.body && result.body.length===1){
      this.isLoginError.emit(false)
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['home'])
    }else{
      console.warn("login failed");
      this.isLoginError.emit(true)
    }
   })
  }
}
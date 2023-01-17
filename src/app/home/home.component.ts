import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../user/auth.service';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  id!: string|null;  
  constructor(private router: Router, private loginService: LoginService) { }  
  ngOnInit() {  
    this.id = localStorage.getItem('token');    
  } 
  logout() {  
    console.log('logout');   
    this.router.navigate(['/login']);  
  } 
  
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  role: string = "";
  isLoggedIn: boolean = false;
  username: string = "";
  constructor() { }

  setLogin(r: string, logged: boolean, user: string) {
    this.role = r;
    this.isLoggedIn = logged;
    this.username= user;
  }
}

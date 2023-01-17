import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { LoginService } from '../service/login.service';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public totalItem: number = 0;
  public searchTerm !: string;
  public islogged: boolean = false;
  public username: string = '';
  public isButtonVisible: boolean  = false;
  constructor(private cartService: CartService, private loginService: LoginService, private router: Router) { 
    router.events.subscribe((ev) => {
      this.islogged = this.loginService.isLoggedIn;
      this.username = this.loginService.username;
      if (this.loginService.role == "admin") {
        this.isButtonVisible = true;
      }
      else if (this.loginService.role == "user") {
        this.isButtonVisible = false;
      }
    })
  }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
    this.islogged = this.loginService.isLoggedIn;
    this.username = this.loginService.username;
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
  logout() {
    // console.log("bdasbdjsabd");
    this.islogged = false;
    this.loginService.isLoggedIn = false;
    this.loginService.role = "";
    this.loginService.username = "";

    this.router.navigate(['/', 'login']);

  }
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from './authservice';
import { LoginService } from '../service/login.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle: string = 'Login Form';
  loginForm!: FormGroup;
  // horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  // verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private router: Router, private loginService: LoginService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  cancel(): void {

    this.router.navigate(['home']);
  }
  onSubmit(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const username = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      //this user is logged in

      // this.authService.login(username, password);

      // if (this.authService.redirectToUrl) {
      //   this.router.navigateByUrl(this.authService.redirectToUrl);
      if (username == "admin" && password == "admin123") {
        this.loginService.setLogin("admin", true, username);
        this.router.navigateByUrl("product");
      }
      else if (username == "abc" && password == "abc123") {
        this.loginService.setLogin("user", true, username);
        this.router.navigateByUrl("product");
      }
      else if (username == "xyz" && password == "xyz123") {
        this.loginService.setLogin("user", true, username);
        this.router.navigateByUrl("product");
      }
      else {
        this._snackBar.open("Wrong Credentials", "Close", {
          duration: 5000,
          // panelClass: "my-custom-snackbar",
          // verticalPosition: "bottom",
          // horizontalPosition: "center",
        });
      }
    }
    else{
      this._snackBar.open("No match", "close", {
        duration: 5000,
      });
    }
  }
}
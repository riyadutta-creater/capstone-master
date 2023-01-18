import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
    public paymentMethod: number = 3;
    public grandTotal : number = 0
    constructor(private router: Router, private _snackBar: MatSnackBar, private cartService: CartService ){
        this.grandTotal=this.cartService.getTotalPrice();
     }
    //after the button click this will be shown
    onPlaceOrder() {
      this._snackBar.open("Order Placed Successfully", "Close", {
        duration: 5000,
        verticalPosition:"top",
        horizontalPosition: "right"
      });
      //after the button click navigate to the home page
      this.router.navigate(["home"]);
      //and all the cat values are removed
      this.cartService.removeAllCart();
    }
}




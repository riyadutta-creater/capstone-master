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
    constructor(private router: Router, private _snackBar: MatSnackBar, private cartService: CartService ){ }
    onPlaceOrder() {
      this._snackBar.open("Order Placed Successfully", "Close", {
        duration: 5000,
        verticalPosition:"top",
        horizontalPosition: "right"
      });
      this.router.navigate(["home"]);
      this.cartService.removeAllCart();
    }
}




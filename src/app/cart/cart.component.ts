import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { IProduct } from '../user-product/product';
import { ICart } from './cart';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  //function is for increment of the quantity in cart page
  increaseQuan(id: any, quantity: any, item: any) {
    for (let i = 0; i < this.carts.length; i++) {
      if (item.quantity < 5) {
        if (id == this.carts[i].id) {
          this.carts[i].quantity += 1;
          this.carts[i].total += this.carts[i].price;
          this.grandTotal += this.carts[i].price;
        }
        else {
          if (this.carts[i].id == id)
            this.cartService.addtoCart(this.carts);
          }
        }
        else {
          this._snackBar.open("Maximum Selected", "Close", {
            duration: 5000,
            verticalPosition: "bottom",
            horizontalPosition: "right",
          })
        }
      }
    }
  //function is for decrement of the quantity in cart page
  decreaseQuan(id: any, quantity: any, item: any) {
    for (let i = 0; i < this.carts.length; i++) {
      if (item.quantity != 0) {
        if (id == this.carts[i].id) {
          this.carts[i].quantity -= 1;
          this.carts[i].total -= this.carts[i].price;
          this.grandTotal -= this.carts[i].price;
        }
      }
      else {
        this.cartService.removeCartItem(item);
      }
    }
  }
  carts!: ICart[];
  grandTotal!: number;
  constructor(private cartService: CartService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
   //getting the cart items from products along with the price
    this.cartService.getProducts()
      .subscribe(res => {
        this.carts = res;
        this.grandTotal = this.cartService.getTotalPrice();
        //console.log(this.grandTotal);
        console.log(this.carts);
      })
  }
  //it will remove one particular item from the cart
  removeItem(item: any) {
    console.log(item);
    this.grandTotal = item.quantity * item.price;
    this.cartService.removeCartItem(item);
  }
  //it will remove all item from the cart at once
  emptycart() {
    alert("Confirm to Clear the Cart");
    {
      this.cartService.removeAllCart();
    }
  }
}

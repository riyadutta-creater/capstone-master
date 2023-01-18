import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICart } from '../cart/cart';
import { IProduct } from '../user-product/product';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList = new BehaviorSubject<ICart[]>([]);
  public search = new BehaviorSubject<string>("");

  constructor(private _snackBar: MatSnackBar) { }

  //get the product item using observable
  getProducts() {
    return this.productList.asObservable();
  }
  
  //set the products into the carts
  setProduct(carts: ICart[]) {
    this.cartItemList.push(...carts);
    this.productList.next(carts);
  }

  //function of adding products to the cart
  addtoCart(carts: ICart[]) {
    this.cartItemList.push(carts);
    this.productList.next(this.cartItemList);
    //get the initial price when added to the cart
    this.getTotalPrice();
    
  }

  //function for calculating the grand total price
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.price * a.quantity;
    })
    return grandTotal;
  }

  //function for removing 1 item at a time from cart
  removeCartItem(carts: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (carts.id === a.id) {
        this.cartItemList.splice(index, 1);
        this._snackBar.open("Item Removed", "Close", {
          duration: 5000,
          verticalPosition: "bottom",
          horizontalPosition: "right",
        });
      }
    })
    this.productList.next(this.cartItemList);
  }

  //function for remove all the items from the cart
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
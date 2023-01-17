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
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(carts: ICart[]) {
    this.cartItemList.push(...carts);
    this.productList.next(carts);
  }
  addtoCart(carts: ICart[]) {
    this.cartItemList.push(carts);
    
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    // console.log(this.cartItemList)
    // console.log(this.cartItemList.id);
    
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.price * a.quantity;
    })
    return grandTotal;
  }
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
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
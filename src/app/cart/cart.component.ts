import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { IProduct } from '../user-product/product';
import { ICart } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  increaseQuan(id: any, quantity: any) {
    for (let i = 0; i < this.carts.length; i++) {
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
  }
  decreaseQuan(id: any, quantity: any) {
    for (let i = 0; i < this.carts.length; i++) {
      if (id == this.carts[i].id) {
        this.carts[i].quantity -= 1;
        this.carts[i].total -= this.carts[i].price;
        this.grandTotal -= this.carts[i].price;
      }
      else {

      }
    }
  }
  carts!: ICart[];
  grandTotal!: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.carts = res;
        this.grandTotal = this.cartService.getTotalPrice();
        //console.log(this.grandTotal);
        console.log(this.carts);
      })
  }
  removeItem(item: any) {
    console.log(item);
    
    this.grandTotal = item.quantity * item.price;
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    alert("Confirm to Clear the Cart");
    {
      this.cartService.removeAllCart();
    }
  }
}

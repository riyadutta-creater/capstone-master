import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';
import { IProduct } from './product';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle: string = "InstaSmart | Product-List";
  sub!: Subscription;
  href: string = '';
  filterCategory: IProduct[] = [];
  searchKey: string = "";
  errorMessage: string = '';
  products: IProduct[] = [];
  isButtonVisible: boolean = false;

  constructor(private productService: ProductService, private router: Router, private cartService: CartService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.href = this.router.url;
    this.sub = this.productService.getProducts().subscribe(
      (resp) => {
        this.products = resp;
        this.filterCategory = resp;
        this.checkCartProducts();
        this.products.forEach((a: any) => {
          if (a.category === "women's clothing" || a.category === "men's clothing") {
            a.category = "fashion"
          }
          Object.assign(a, { quantity: 1, total: a.price });
          // console.log(this.products)
        });
      });
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
    /*this.href=this.router.url;
this.productService.getProducts()
.subscribe(res=>{
this.products = res;
this.filterCategory = res;
this.products.forEach((a:any) => {
  if(a.category ==="women's clothing" || a.category ==="men's clothing"){
    a.category ="fashion"
  }
  Object.assign(a,{quantity:1,total:a.price});
});
console.log(this.products)
});

this.cartService.search.subscribe((val:any)=>{
this.searchKey = val;
})*/
    if (this.loginService.role == "admin") {
      this.isButtonVisible = true;
    }
    else if (this.loginService.role == "user") {
      this.isButtonVisible = false;
    }
    else {
      this.router.navigate(['/', 'login']);
    }
  }

  checkCartProducts() {
    var cartProducts: string[] = [];
    this.cartService.getProducts().subscribe((data: any) => {
      cartProducts = data;
    })
    for (let i = 0; i < cartProducts.length; i++) {
      // console.log(cartProducts[i]["id"]);
      const updatedItem = this.filterCategory.map((j) => {
        return j.id == cartProducts[i]["id"] ? {
          ...j,
          "button": true
        } : j;
      })
      this.filterCategory = updatedItem;
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  newProduct(): void {
    this.productService.changeSelectedProduct(this.productService.newProduct());
    this.router.navigate(['addProduct']);
  }

  productSelected(product: IProduct): void {
    this.productService.changeSelectedProduct(product);
    this.router.navigate([this.href, 'editProduct']);
  }


  deleteProduct(product: IProduct): void {
    if (product && product.id) {
      if (confirm(`Are You sure to delete ${product.title} details`)) {
        this.productService.deleteProduct(product.id).subscribe(
          (resp) => this.productService.changeSelectedProduct(null),
          err => this.errorMessage = err
        );
      } else {
        this.productService.changeSelectedProduct(null);
      }
    }
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
    const updatedItem = this.filterCategory.map((i) => {
      return i.id == item.id ? {
        ...i,
        "button": true
      } : i;
    })
    this.filterCategory = updatedItem;
    // var flag: number = 0;
    // for (let i in this.filterCategory) {
    //   if (this.filterCategory[i].id == item.id) {
    //     flag = 1;
    //     break;
    //   }
    // }
    // if (flag == 1) {
    //   this.isButtonVisible = item.id;
    // }
  }
  filter(category: string) {
    this.filterCategory = this.products
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }
}

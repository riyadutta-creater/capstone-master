import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { ICart } from "./cart/cart";
import { IProduct } from "./user-product/product";

@Injectable({ providedIn: 'root' })

export class InMemoryEventDbService
  implements InMemoryDbService {

  createDb() {
    const products: IProduct[] = [
      {
        "id": 100,
        "title": "Orange",
        "price": 180,
        "description": "Gold plated",
        "category": "jewelery",
        "image": "../../assets/image/ring.jpeg",
        "rating": 4.5,
        "button":false
      },
      {
        "id": 101,
        "title": "Crange",
        "price": 180,
        "description": "Gold plated",
        "category": "grocery",
        "image": "../../assets/image/onion.webp",
        "rating": 3.2,
        "button":false
      },
      {
        "id": 103,
        "title": "Zrange",
        "price": 180,
        "description": "Gold plated",
        "category": "electronics",
        "image": "../../assets/image/laptop.webp",
        "rating": 4,
        "button":false
      },
      {
        "id": 104,
        "title": "Diamond Earning",
        "price": 180,
        "description": "Gold plated",
        "category": "jewelery",
        "image": "../../assets/image/earing.webp",
        "rating": 4.8,
        "button": false
      },
      {
        "id": 105,
        "title": "Floating Dress",
        "price": 10000,
        "description": "Party Wear",
        "category": "women's clothing",
        "image": "../../assets/image/dress.webp",
        "rating": 3.6,
        "button": false
      },
      {
        "id": 106,
        "title": "Jean's",
        "price": 1800,
        "description": "Comfortable and Stretchable",
        "category": "men's clothing",
        "image": "../../assets/image/men.jpeg",
        "rating": 4.1,
        "button":false
      },
      {
        "id": 107,
        "title": "Office Shoe",
        "price": 180,
        "description": "Gold plated",
        "category": "shoe",
        "image": "../../assets/image/shoe1.webp",
        "rating": 3.1,
        "button":false
      }];

    return { products };
  }
}
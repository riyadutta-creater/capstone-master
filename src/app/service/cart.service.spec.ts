import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICart } from '../cart/cart';
import { IProduct } from '../user-product/product';
import { CartService } from './cart.service';


describe('CartService', () => {
  let service: CartService;



  beforeEach(() => {
    TestBed.configureTestingModule({
    imports:[],
    //providers:[CartService]
    providers:[MatSnackBar]
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //check add to cart method functionality in cart service
  it('should check addtoCart method', () => {
    
    let products:ICart[]=[
        {
            "id": 100,
            "title": "Ring",
            "price": 5000,
            "description": "Gold plated",
            "image": "../../assets/image/ring.jpeg",
            "quantity": 1,
            "total": 5000
        }
    ]
    service.addtoCart(products);
    expect(service.cartItemList[0]).toEqual(products);
  });
  
  //check get Total Price method functionality in cart service
  it('should check getTotalprice method', () => {
    
    let products:ICart[]=[
        {
            "id": 100,
            "title": "Ring",
            "price": 5000,
            "description": "Gold plated",
            "image": "../../assets/image/ring.jpeg",
            "quantity": 3,
            "total": 5000
        },
        {
            "id": 101,
            "title": "Earing",
            "price": 1000,
            "description": "Gold plated",
            "image": "../../assets/image/ring.jpeg",
            "quantity": 2,
            "total": 1000
        }
    ]
    service.cartItemList=products;
    expect(service.getTotalPrice()).toEqual(17000);
  });

  //check remove cart method functionality in cart service
  it('should check removeCart method', () => {
    
    let products:ICart[]=[
        {
            "id": 100,
            "title": "Ring",
            "price": 5000,
            "description": "Gold plated",
            "image": "../../assets/image/ring.jpeg",
            "quantity": 3,
            "total": 5000
        },
        {
            "id": 101,
            "title": "Earing",
            "price": 1000,
            "description": "Gold plated",
            "image": "../../assets/image/ring.jpeg",
            "quantity": 2,
            "total": 1000
        }
    ]
    service.addtoCart(products);
    service.removeCartItem(products[0]);
    expect(service.cartItemList.length).toEqual(1);
  });

  //check remove cart all method functionality in cart service
  it('should check removeCartAll method', () => {
    
    let products:ICart[]=[
        {
            "id": 100,
            "title": "Ring",
            "price": 5000,
            "description": "Gold plated",
            "image": "../../assets/image/ring.jpeg",
            "quantity": 3,
            "total": 5000
        },
        {
            "id": 101,
            "title": "Earing",
            "price": 1000,
            "description": "Gold plated",
            "image": "../../assets/image/ring.jpeg",
            "quantity": 2,
            "total": 1000
        }
    ]
    service.addtoCart(products);
    service.removeAllCart();
    expect(service.cartItemList.length).toEqual(0);
  });

});

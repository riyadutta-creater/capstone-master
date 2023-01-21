import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { ProductService } from '../service/product.service';
import { getCurrentProduct } from '../state/products/product.selectors';
import { State } from '../state/products/product.state';
import { IProduct } from './product';
import * as ProductActions from "../state/products/product.actions";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  pageTitle:string="Edit Product";
  errorMessage='';
  product$!: Observable<IProduct | null | undefined>;
  addProduct!: FormGroup;
  product!:IProduct | null |undefined;
  sub!:Subscription;

  constructor(private store:Store<State>, private formBuilder:FormBuilder, private router:Router, private productService:ProductService){}
  
  ngOnInit(): void {
    this.addProduct= this.formBuilder.group({
      id:['',[Validators.required]],
      title:['',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
      description:['',[Validators.required,Validators.maxLength(20)]],
      category:['',[Validators.required]],
      image:['..\\assets\\images\\chicken.jpeg',[Validators.required]],
      price:[,[Validators.required, Validators.min(0), Validators.max(10000)]],
      rating:[,[Validators.required, Validators.min(1), Validators.max(5)]]
    });
    
    //this will fetch the current product from product store
    this.product$= this.store.select(getCurrentProduct).pipe(
     tap(currentProduct => this.displayProduct(currentProduct))
    );
    
    this.product$.subscribe(resp=> this.product=resp);

  }

  //getter
  get id(){
    return this.addProduct.get("id");
  }
  get title(){
    return this.addProduct.get("title");
  }
  get description(){
    return this.addProduct.get("description");
  }
  get image(){
    return this.addProduct.get("image");
  }
  get price(){
    return this.addProduct.get("price");
  }
  get rating(){
    return this.addProduct.get("rating");
  }
  get category(){
    return this.addProduct.get("category");
  }
  
  displayProduct(productParam:IProduct | null | undefined ):void{
    this.product=productParam;
    if(this.product){
      this.addProduct.reset();
      this.addProduct.patchValue({
        id:this.product.id,
        title:this.product.title,
        description:this.product.description,
        category:this.product.category,
        image:this.product.image,
        price:this.product.price,
        rating:this.product.rating
      })
    }
  }

  //after clicking the save button this method will call and edit product service is called to adding products
  saveProduct(originalProduct : IProduct | undefined | null):void{

    if(this.addProduct.valid){
      if(this.addProduct.dirty){

        const product={...originalProduct,...this.addProduct.value};
        
        //it will dispatch the product action to update a product
        this.store.dispatch(ProductActions.updateProduct({product}));
      }

      this.router.navigate(['product']);
    }
  }
  cancel():void{
    this.router.navigate(['product']);
  }
}

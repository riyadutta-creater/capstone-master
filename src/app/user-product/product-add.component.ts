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
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  pageTitle:string="Add New Product";
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
      image:['',[Validators.required]],
      price:[0,[Validators.required, Validators.min(0), Validators.max(30000)]],
      rating:[,[Validators.required, Validators.min(1), Validators.max(5)]]
    });

    this.product$= this.store.select(getCurrentProduct).pipe(
     tap(currentProduct => this.displayProduct(currentProduct))
    );

    this.product$.subscribe(resp=> this.product=resp);

  }

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
  
  displayProduct(productParam:IProduct| null | undefined ):void{
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

  saveProduct(originalProduct : IProduct | undefined | null):void{

    if(this.addProduct.valid){
      if(this.addProduct.dirty){

        const product={...originalProduct,...this.addProduct.value};

        this.store.dispatch(ProductActions.createProduct({product}));
      }

      this.router.navigate(['product']);
    }
  }
  cancel():void{
    this.router.navigate(['product']);
  }
}

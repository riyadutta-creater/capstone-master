import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { ProductAddComponent } from './product-add.component';

describe('ProductAddComponent', () => {
  let component: ProductAddComponent;
  let fixture: ComponentFixture<ProductAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({})],
        schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //check for the presence of product id in add form
  it('should have the Product ID',()=>{
    expect(fixture.debugElement.query(By.css('#id'))).toBeTruthy();
  });

  //check for the presence of product title in add form
  it('should have the Product Title',()=>{
    expect(fixture.debugElement.query(By.css('#title'))).toBeTruthy();
  });

  //check for the presence of product description in add form
  it('should have the Product Description',()=>{
    expect(fixture.debugElement.query(By.css('#description'))).toBeTruthy();
  });

  //check for the presence of product price in add form
  it('should have the Product Price',()=>{
    expect(fixture.debugElement.query(By.css('#price'))).toBeTruthy();
  });

  //check for the presence of product image in add form
  it('should have the Product Image',()=>{
    expect(fixture.debugElement.query(By.css('#image'))).toBeTruthy();
  });

  //check for the presence of product category in add form
  it('should have the Product Category',()=>{
    expect(fixture.debugElement.query(By.css('#category'))).toBeTruthy();
  });

  //check for the presence of product rating in add form
  it('should have the Product Rating',()=>{
    expect(fixture.debugElement.query(By.css('#rating'))).toBeTruthy();
  });

  //check for the input type of product id in add form
  it('should check the input type of Product Id',()=>{
    const id3=fixture.debugElement.query(By.css('#id'));
    const id:any=component.addProduct.get("id");
    const id2= 100;
    id.setValue(id2);
    fixture.detectChanges();
    expect(parseInt(id3.nativeElement.value)).toEqual(id2);
  });

  //check for the input type of product title in add form
  it('should check the input type of Product Title',()=>{
    const title3=fixture.debugElement.query(By.css('#title'));
    const title:any=component.addProduct.get("title");
    const title2='Potato';
    title.setValue(title2);
    fixture.detectChanges();
    expect(title3.nativeElement.value).toEqual(title2);
  });

  //check for the input type of product description in add form
  it('should check the input type of Product Description',()=>{
    const description3=fixture.debugElement.query(By.css('#description'));
    const description:any=component.addProduct.get("description");
    const description2='Fresh';
    description.setValue(description2);
    fixture.detectChanges();
    expect(description3.nativeElement.value).toEqual(description2);
  });
  
  //check for the input type of product price in add form
  it('should check the input type of Product Price',()=>{
    const price3=fixture.debugElement.query(By.css('#price'));
    const price:any=component.addProduct.get("price");
    const price2=500;
    price.setValue(price2);
    fixture.detectChanges();
    expect(parseInt(price3.nativeElement.value)).toEqual(price2);
  });

  //check for the input type of product image in add form
  it('should check the input type of Product Image',()=>{
    const image3=fixture.debugElement.query(By.css('#image'));
    const image:any=component.addProduct.get("image");
    const image2='../url';
    image.setValue(image2);
    fixture.detectChanges();
    expect(image3.nativeElement.value).toEqual(image2);
  });
  
  //check for the input type of product category in add form
  it('should check the input type of Product Category',()=>{
    const category3=fixture.debugElement.query(By.css('#category'));
    const category:any=component.addProduct.get("category");
    const category2="fashion";
    category.setValue(category2);
    fixture.detectChanges();
    expect(category3.nativeElement.value).toEqual(category2);
  });

  //check for the input type of product rating in add form
  it('should check the input type of Product Rating',()=>{
    const rating3=fixture.debugElement.query(By.css('#rating'));
    const rating:any=component.addProduct.get("rating");
    const rating2=500;
    rating.setValue(rating2);
    fixture.detectChanges();
    expect(parseInt(rating3.nativeElement.value)).toEqual(rating2);
  });

  //check for the form control name of product id 
  it('should check the form control name of Product Id',()=>{
    const id=fixture.debugElement.query(By.css('#id'));
    const id2=id.nativeElement.getAttribute('formControlName');
    expect(id2).toEqual('id');
  });

  //check for the form control name of product title 
  it('should check the form control name of Product Title',()=>{
    const title=fixture.debugElement.query(By.css('#title'));
    const title2=title.nativeElement.getAttribute('formControlName');
    expect(title2).toEqual('title');
  });

  //check for the form control name of product description 
  it('should check the form control name of Product Description',()=>{
    const description=fixture.debugElement.query(By.css('#description'));
    const description2=description.nativeElement.getAttribute('formControlName');
    expect(description2).toEqual('description');
  });

  //check for the form control name of product price 
  it('should check the form control name of Product Price',()=>{
    const price=fixture.debugElement.query(By.css('#price'));
    const price2=price.nativeElement.getAttribute('formControlName');
    expect(price2).toEqual('price');
  });

  //check for the form control name of product rating 
  it('should check the form control name of Product Rating',()=>{
    const rating=fixture.debugElement.query(By.css('#rating'));
    const rating2=rating.nativeElement.getAttribute('formControlName');
    expect(rating2).toEqual('rating');
  });

  //check for the form control name of product image 
  it('should check the form control name of Product image',()=>{
    const image=fixture.debugElement.query(By.css('#image'));
    const image2=image.nativeElement.getAttribute('formControlName');
    expect(image2).toEqual('image');
  });

  //check for the form control name of product category 
  it('should check the form control name of Product Category',()=>{
    const category=fixture.debugElement.query(By.css('#category'));
    const category2=category.nativeElement.getAttribute('formControlName');
    expect(category2).toEqual('category');
  });

  //check for the button when data is not valid
  it('should check the save button when Invalid',()=>{
    const id:any=component.addProduct.get("id");
    const id2=100;
    id.setValue(id2);

    const title:any=component.addProduct.get("title");
    const title2='Pot';
    title.setValue(title2);

    const description:any=component.addProduct.get("description");
    const description2='Fresh';
    description.setValue(description2);

    const price:any=component.addProduct.get("price");
    const price2=5000;
    price.setValue(price2);

    const rating:any=component.addProduct.get("rating");
    const rating2=6;
    rating.setValue(rating2);

    const image:any=component.addProduct.get("image");
    const image2='../url';
    image.setValue(image2);

    const category:any=component.addProduct.get("category");
    const category2='fashion';
    category.setValue(category2);

    fixture.detectChanges();

    const btn=fixture.debugElement.query(By.css('#btn1'));
    expect(btn.nativeElement.disabled).toBeTruthy();
  });
  
});

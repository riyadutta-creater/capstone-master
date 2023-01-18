import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, inject, TestBed } from "@angular/core/testing";
import { IProduct } from "../user-product/product";
import { ProductService } from "./product.service";


describe('ProductService',()=>{
  let service:ProductService;
  let injector: TestBed;

  let httpMock: HttpTestingController;
  let products:IProduct[]=[];

  beforeEach(()=>{
     TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ProductService],
     });
    service=TestBed.get(ProductService);
    injector = getTestBed();

    httpMock = injector.get(HttpTestingController);

    products=[
        {
            "id": 100,
            "title": "Ring",
            "price": 50000,
            "description": "Gold plated",
            "category": "jewelery",
            "image": "../../assets/image/ring.jpeg",
            "rating": 4.5,
            "button":false
          },
          {
            "id": 101,
            "title": "Onion",
            "price": 210,
            "description": "Fresh vegetable",
            "category": "grocery",
            "image": "../../assets/image/onion.webp",
            "rating": 3.2,
            "button":false
          },
          {
            "id": 103,
            "title": "Laptop",
            "price": 180,
            "description": "8GB RAM",
            "category": "electronics",
            "image": "../../assets/image/laptop.webp",
            "rating": 4,
            "button":false
          },
          {
            "id": 104,
            "title": "Diamond Earning",
            "price": 180,
            "description": "Stylish Design 24 Carat",
            "category": "jewelery",
            "image": "../../assets/image/earing.webp",
            "rating": 4.8,
            "button":false
          },
          {
            "id": 105,
            "title": "Floating Dress",
            "price": 10000,
            "description": "Party Wear",
            "category": "fashion",
            "image": "../../assets/image/dress.webp",
            "rating": 3.6,
            "button":false
          },
          {
            "id": 106,
            "title": "Jean's",
            "price": 1800,
            "description": "Comfortable and Stretchable",
            "category": "fashion",
            "image": "../../assets/image/men.jpeg",
            "rating": 4.1,
            "button":false
          }
      
    ];

  });
  it('should be created',()=>{
    expect(service).toBeTruthy();
  });
  
  //check the working functionally of get products
  it('should check getProducts() method',inject([HttpTestingController,ProductService],
    (httpMock:HttpTestingController,service:ProductService)=>{

          service.getProducts().subscribe(resp=>expect(products).toEqual(resp));

          const mockReq = httpMock.expectOne(service.url);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(products);

        httpMock.verify();


  }));

   //check the working functionally of add products
  it('should check createproduct() method',()=>{
    let product1:IProduct={
        "id": 110,
        "title": "Leggings",
        "price": 2800,
        "description": "Stretchable",
        "category": "fashion",
        "image": "../../assets/image/men.jpeg",
        "rating": 4,
        "button":false
    };
    let product2:IProduct={
        "id": 111,
        "title": "Neklace",
        "price": 1800,
        "description": "Gold chain",
        "category": "jewellery",
        "image": "../../assets/image/men.jpeg",
        "rating": 3.7,
        "button":false
    };

    products=[...products,product1];
    service.createProduct(product1).subscribe(resp=>expect(resp).toEqual(product1));

     expect(products.length).toEqual(7);

     const req = httpMock.expectOne(service.url);
     expect(req.request.method).toBe('POST');
     //the product is the response flushed as the response body
     req.flush(product1);
  });

   //check the working functionally of edit products
  it('should check the updateProduct() method',()=>{
    let product2={
        "id": 111,
        "title": "Neklace",
        "price": 1800,
        "description": "Gold chain",
        "category": "jewellery",
        "image": "../../assets/image/men.jpeg",
        "rating": 3.7,
        "button":false
    };

    service.updateProduct(product2).subscribe(resp=>expect((resp)).toEqual(product2));


       const req = httpMock.expectOne(`${service.url}/${product2.id}`);
       expect(req.request.method).toBe('PUT');
       req.flush({product2 });
  });

   //check the working functionally of delete products
  it('should check the deleteProduct() method',()=>{

    let product1:IProduct={
        "id": 110,
        "title": "Leggings",
        "price": 2800,
        "description": "Stretchable",
        "category": "fashion",
        "image": "../../assets/image/men.jpeg",
        "rating": 4,
        "button":false
    };
    let product2={
        "id": 111,
        "title": "Neklace",
        "price": 1800,
        "description": "Gold chain",
        "category": "jewellery",
        "image": "../../assets/image/men.jpeg",
        "rating": 3.7,
        "button":false
    };

    products=[...products,product1,product2];

    service.deleteProduct(product2.id).subscribe(resp=>console.log(resp));

    expect(products.length).toEqual(8);

    const req = httpMock.expectOne(`${service.url}/${product2.id}`);
     expect(req.request.method).toBe('DELETE');
     req.flush(product2);
     
  });
})
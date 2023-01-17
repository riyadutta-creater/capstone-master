import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap , BehaviorSubject, throwError, map } from "rxjs";
import { IProduct } from "../user-product/product";

@Injectable({
    providedIn:'root'
})
export class ProductService{
    public url="api/products";
    products:IProduct[]=[];
    private selectedProductSource= new BehaviorSubject<IProduct | null >(null);
    selectedProductChanges$=this.selectedProductSource.asObservable();
    constructor(private http:HttpClient){}

    getProducts():Observable<IProduct[]>{
       return this.http.get<IProduct[]>(this.url).pipe(
            tap(data=>{
               this.products=data;
           }),
           catchError(this.errorHandler)
        );
  }

    /*productList():Observable<IProduct[]>{
      return this.http.get<IProduct[]>(this.url).pipe(
        tap(data=>{
         
        },
            catchError(this.errorHandler)
        )
      )

    }
    */

  errorHandler=(err:any)=>{
    let errorMessage:string;
    if(err.error instanceof ErrorEvent)
    {
       errorMessage = `An error has occured ${err.error.message}`
    }
    else{
      errorMessage =  `Backend error code ${err.status} ${err.body.error}`;
    }
     console.log(err);
     return throwError(errorMessage);
  }

  changeSelectedProduct(selectedProduct: IProduct|null ):void{
    this.selectedProductSource.next(selectedProduct);
  }

  newProduct():IProduct{
    return {
      "id":0,
      "title":" ",
      "price":0,
      "description":" ",
      "category":" ",
      "image":"../../assets/images/orange.jpeg",
      "rating":0,
      "button":false
    };
  }

  createProduct(product:IProduct):Observable<IProduct>{
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    const newProduct={...product};
    return  this.http.post<IProduct>(this.url,newProduct,{headers}).pipe(
        tap(data=>{
         
        },
            catchError(this.errorHandler)
        )
      )
  }

  deleteProduct(id:number):Observable<{}>{
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    const url= `${this.url}/${id}`;
    return this.http.delete<IProduct>(url,{headers}).pipe(
      tap(data=>{
    
      },
      catchError(this.errorHandler))
    );
  }

   updateProduct(product:IProduct):Observable<IProduct>{
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    const url= `${this.url}/${product.id}`;
    return this.http.put<IProduct>(url,product, {headers}).pipe(
    tap(()=>{

    }),
    map(()=>product),
    catchError(this.errorHandler)
    );
   }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { IProduct } from "../user-product/product";

@Injectable({
    providedIn:'root'
})

export class ApiService{
    public url="api/products";
    products:IProduct[]=[];
    constructor(private http: HttpClient){}

    //getProducts():Observable<IProduct[]>{
    //    return this.http.get<IProduct[]>(this.url)
    //    .pipe(map((res:any)=>{
    //            return res;
    //        }))
    //}
    getProducts():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.url).pipe(
            tap(data=>{
                this.products=data;
            }),
            catchError(this.errorHandler)
        );
    }
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
}
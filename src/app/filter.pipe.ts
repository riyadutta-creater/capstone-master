import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './user-product/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products : IProduct[], filterString: string, propName:string) {
    const result:any=[];
    if(!products || filterString==='' || propName ===''){
      return products;
    }
    products.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}

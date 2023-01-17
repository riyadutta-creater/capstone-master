import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductAddComponent } from "../user-product/product-add.component";
import { ProductEditComponent } from "../user-product/product-edit.component";

const productRoutes:Routes=[
    {path: 'addProduct', component: ProductAddComponent },
    {path: 'editProduct', component: ProductEditComponent }
];

@NgModule({
    imports:[
    RouterModule.forChild(productRoutes)],
    exports:[RouterModule]})
    
export class ProductRoutingModule{

}
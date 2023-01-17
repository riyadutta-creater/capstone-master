/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }*/

import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from '../user-product/product-add.component';
import { ProductEditComponent } from '../user-product/product-edit.component';
import { ProductsComponent } from '../user-product/products.component';
import { StarComponent } from '../star/star.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product.routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { productReducer } from '../state/products/product.reducer';
import { ProductEffects } from '../state/products/product.effects';
import { FilterPipe } from '../filter.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    StarComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects])
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class ProductModule { }

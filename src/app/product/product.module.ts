import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../material/material.module';

import { ProductComponent } from './components/product/product.component';
import { ProductsContainer } from './containers/products/products.container';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [ProductComponent, ProductsContainer, ProductDetailComponent],
  imports: [CommonModule, ProductRoutingModule, SharedModule, MaterialModule],
})
export class ProductModule {}

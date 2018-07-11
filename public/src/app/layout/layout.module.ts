import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    HomeModule
  ],
  declarations: [LayoutComponent, ProductsComponent]
})
export class LayoutModule { }

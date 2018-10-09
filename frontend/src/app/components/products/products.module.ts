import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
// import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { SharedModule } from '../shared/shared.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';
// import { ProductDetailsComponent } from './product-details/product-details.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ProductsComponent } from './products.component';
// import { ProductsCatalogComponent } from './products-catalog/products-catalog.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
// import { ProductsBriefComponent } from './products-brief/products-brief.component';
import { ProductsDetailSideComponent } from './products-detail-side/products-detail-side.component';
// import { ProductsDetailMainComponent } from './products-detail-main/products-detail-main.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    // CloudinaryModule,
    SharedModule,
  ],
  exports: [],
  declarations: [
    ProductsListComponent,
    // ProductDetailsComponent,
    BreadcrumbComponent,
    ProductsComponent,
    // ProductsCatalogComponent,
    ProductsDetailComponent,
    // ProductsBriefComponent,
    ProductsDetailSideComponent,
    // ProductsDetailMainComponent,
  ]
})
export class ProductsModule { }

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
// import { ProductItemDetailComponent } from '../shared/product-item-detail/product-item-detail.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';

const productsRoutes: Routes = [
  {
    path: 'ch',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductsListComponent,
      },
      {
        path: '',
        component: BreadcrumbComponent,
        outlet: 'breadcrumb',
      },
      {
        path: ':category_id',
        component: ProductsListComponent,
      },
      {
        path: ':category_id',
        component: BreadcrumbComponent,
        outlet: 'breadcrumb',
      },
      {
        path: ':category_id/details/:product_id',
        component: ProductsDetailComponent,
      },
      {
        path: ':category_id/details/:product_id',
        component: BreadcrumbComponent,
        outlet: 'breadcrumb',
      },
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      productsRoutes
    )],
  exports: [RouterModule]
})

export class ProductsRoutingModule {}

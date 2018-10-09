import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { CatalogService } from '../../../services/catalog.service';
import { mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {
  category_id: string;
  product_id: string;
  product: any; // IProduct
  siblings: string[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private catalogService: CatalogService,
  ) { }

  ngOnInit() {

    this.route.paramMap.pipe(
      mergeMap(paramMap => {
        this.category_id = paramMap.get('category_id');
        this.product_id = paramMap.get('product_id');
        return forkJoin (
          this.productService.getProductById(this.product_id, true),
          this.productService.getProductsByCategory(this.category_id, true)
        );
      })
    )
      .subscribe(
        result => {
          this.product = result[0].data;
          this.siblings = result[1].data;
        }
      );
  }

}

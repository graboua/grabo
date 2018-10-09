import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../../../services/catalog.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  category_id: string;
  categoryName: string;
  currentCategory: any;
  hierarchyCategory: any;
  product_id: string;
  productName: any;
  processing = true;

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    const $paramMap = this.route.paramMap;
    const $queryParamMap = this.route.queryParamMap;
    combineLatest(
      $paramMap
        .pipe(
        mergeMap(paramMap => {
          this.processing = true;
          this.category_id = paramMap.get('category_id');
          if (!this.category_id) {
            return this.catalogService.getAllParents('products');
          }
          return this.catalogService.getAllParents(this.category_id);
        })
      )
      ,
      $queryParamMap
    )
      .subscribe(result => {
          this.productName = result[1].get('name');
          this.hierarchyCategory = result[0].data[0].hierarchy;
          this.hierarchyCategory.push(result[0].data[0]);
          this.hierarchyCategory.splice(0, 3);
          this.processing = false;
        },
        err => console.log('Помилка breadcrumb', err)
      );
  }
}

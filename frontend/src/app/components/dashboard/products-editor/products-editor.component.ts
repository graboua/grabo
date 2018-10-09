import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/index';
import { mergeMap } from 'rxjs/operators';
import { SharedService } from '../../../services/shared.service';
import { DesignService } from '../../../services/design.service';
import { CatalogService } from '../../../services/catalog.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { config } from '../../../app.config';

@Component({
  selector: 'app-products-editor',
  templateUrl: './products-editor.component.html',
  styleUrls: ['./products-editor.component.scss']
})
export class ProductsEditorComponent implements OnInit {
  descendants: any;
  catalogForm: FormGroup;
  products: any;
  parentCategory_id: string;
  parentCategoryName: string;
  config = config;
  noMoreDescendants = false;

    constructor(
    private catalogService: CatalogService,
    private sharedService: SharedService,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.descendants = [];
    this.catalogForm = new FormGroup({
      categories : new FormArray([this.initCategories()]),
    });

    this.catalogService.getDescendants('products')
      .subscribe(result => this.descendants[0] = result.data,
        err => console.log('помилка завантаження категорій', err)
      );
  }

  onSelectCategory(event, level) {
    // if (level + 2 === this.catalogForm.get('categories')['controls'].length) {
    //   const control = <FormArray>this.catalogForm.get('categories');
    //   control.controls[level + 1].setValue(null);
    //   // this.catalogForm.get('categories')['controls'].setValue(null);
    // }
    while (level + 1 < this.catalogForm.get('categories')['controls'].length) {
      this.removeCategory(this.catalogForm.get('categories')['controls'].length - 1);
    }
    this.catalogService.getDescendants(event.value)
      .subscribe(result => {
        if (result.data.length) {
          this.products = null;
          this.descendants[level + 1] = result.data;
          this.noMoreDescendants = false;
          this.addCategory();
        } else {
          this.productService.getProductsByCategory(event.value, false)
            .subscribe(result => this.products = result.data,
              err => console.log('помилка завантаження категорій', err)
            );
          this.parentCategory_id = event.value;
          this.parentCategoryName = event.source.triggerValue;
          this.noMoreDescendants = true;
        }
        this.descendants[level + 1] = result.data;
        },
        err => console.log('помилка завантаження категорій', err)
      );
  }

  onCatalogFormSubmit() {
  }

  addCategory() {
    const control = <FormArray>this.catalogForm.get('categories');
    control.push(this.initCategories());
  }

  removeCategory(i: number) {
    const control = <FormArray>this.catalogForm.get('categories');
    control.removeAt(i);
  }

  initCategories() {
    return new FormControl('', [
      Validators.required,
    ]);
  }
}



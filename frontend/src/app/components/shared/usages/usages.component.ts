import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { MatDialog } from '@angular/material';
import { config } from '../../../app.config';
import { DesignPopupComponent } from '../design-popup/design-popup.component';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../interfaces/product-interface';
import { FormControl, FormGroup } from '@angular/forms';
import { IDesignPopUpData, IRecommendation } from '../../../interfaces/interface';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usages',
  templateUrl: './usages.component.html',
  styleUrls: ['./usages.component.scss']
})
export class UsagesComponent implements OnInit {
  config = config;

  recommendations: IRecommendation[];
  recommendation_id: string;
  recommendation_parent: string;
  products: IProduct[];
  recomForm: FormGroup;

  constructor(
    public dialog: MatDialog,
    public media: ObservableMedia,
    private productService: ProductService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.recomForm = new FormGroup({
      recommendations: new FormControl([])
    });

    this.productService.getRecommendations().pipe(
      mergeMap(result => {
        this.recommendations = result.data;
        return this.route.paramMap;
      })
    )
      .subscribe(paramMap => {
          this.recommendation_id = paramMap.get('_id');
          if (!this.recommendation_id) {
            this.recomForm.get('recommendations').setValue(this.recommendations[3].sub[6]._id);
            this.onSelectCategory({value: this.recommendations[3].sub[6]._id});
          } else {
            this.recomForm.get('recommendations').setValue(this.recommendation_id);
            this.onSelectCategory({value: this.recommendation_id});
          }
        },
        err => console.log('Помилка', err)
      );
  }

  onSelectCategory(event) {
    const recommendation = event.value;
    this.productService.getRecommendationsByIds([recommendation]).pipe(
      mergeMap(result => {
          this.recommendation_parent = result.data[0]._id;
          return this.productService.getProductsByRecommendation(recommendation);
        }
      ))
      .subscribe(result => {
          this.products = result.data;
        },
        err => console.log('error get products by recommendation', err));
  }

  openDialog(image, title): void {
    const imageObject = <IDesignPopUpData>{
      image,
      cloudinaryOptions: '/c_fill,w_1100,h_550,f_auto/',
      title
    };

    const dialogRef = this.dialog.open(DesignPopupComponent, {
      // width: '400px',
      data: imageObject,
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        },
        err => console.log('err delete', err)
      );
  }
}

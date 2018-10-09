import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { IConfirmPopupData, IDesign, IDesignPopUpData } from '../../../interfaces/interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { config } from '../../../app.config';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-design-popup',
  templateUrl: './design-popup.component.html',
  styleUrls: ['./design-popup.component.scss']
})

export class DesignPopupComponent implements OnInit {
  @ViewChild('productSelect') productSelect;
  confirmPopupData: IConfirmPopupData;
  config = config;
  cloudinaryOptions: string;
  designProducts: {};
  // productForm: FormGroup;

  constructor(
    private sharedService: SharedService,
    private router: Router,
    public dialogRef: MatDialogRef<DesignPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDesignPopUpData
  ) { }

  ngOnInit() {
    this.data.cloudinaryOptions ?
      this.cloudinaryOptions = this.data.cloudinaryOptions :
      this.cloudinaryOptions = '/c_fill,w_650,h_650,f_auto/';

    this.designProducts = this.data.designProducts;
  }

  onClose() {
    this.dialogRef.close();
  }

  onProductSelect(product) {
    if (this.data.closer) {
      this.sharedService.sharingEvent(['closeSidenav']);
    }
    this.onClose();
    this.router.navigate(['/products', 'ch', {outlets: {primary: [product.category_id[0], 'details', product._id], //product.category_id[0]
      breadcrumb: [product.category_id[0], 'details', product._id]}}], {queryParams: {name: product.name}});
  }
}

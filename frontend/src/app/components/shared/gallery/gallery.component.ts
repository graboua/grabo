import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DesignPopupComponent } from '../design-popup/design-popup.component';
import { IProduct } from '../../../interfaces/product-interface';
import { ProductService } from '../../../services/product.service';
import { ObservableMedia } from '@angular/flex-layout';
import { IDesignPopUpData } from '../../../interfaces/interface';
import { config } from '../../../app.config';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  config = config;
  productsWithGallery: IProduct[];

  constructor(
    public dialog: MatDialog,
    public media: ObservableMedia,
    private productService: ProductService,
  ) { }

  ngOnInit() {

    this.productService.getProductsWithGallery()
      .subscribe(
        result => this.productsWithGallery = result.data,
        err => console.log('getProductsWithGallery error')
  );
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

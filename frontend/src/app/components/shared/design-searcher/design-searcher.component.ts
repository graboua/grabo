import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/index';
import { FormControl, FormGroup } from '@angular/forms';
import { IDesign, IDesignPopUpData, IDesignProducts } from '../../../interfaces/interface';
import { config } from '../../../app.config';
import { SharedService } from '../../../services/shared.service';
import { MatDialog } from '@angular/material';
import { DesignService } from '../../../services/design.service';
import { ProductService } from '../../../services/product.service';
import { map, startWith, tap } from 'rxjs/operators';
import { DesignPopupComponent } from '../design-popup/design-popup.component';

@Component({
  selector: 'app-design-searcher',
  templateUrl: './design-searcher.component.html',
  styleUrls: ['./design-searcher.component.scss']
})
export class DesignSearcherComponent implements OnInit {
  @ViewChild('designSelector') designSelector;
  config = config;
  findDesignForm: FormGroup;
  designs: IDesign[];
  designs_id = [];
  filteredDesigns: Observable<string[]>;
  designValidity = false;
  @Input() closer;

  constructor(
    private sharedService: SharedService,
    private designService: DesignService,
    private productService: ProductService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.findDesignForm = new FormGroup({
      findDesign: new FormControl('', [
      ]),
    });

    // Design finder
    this.designService.getDesigns()
      .subscribe(result => {
          this.designs = result.data;
          this.designs.map(design => this.designs_id.push(design._id));
        },
        err => console.log('Помилка завантеження дизайнів', err)
      );

    this.filteredDesigns = this.findDesignForm.get('findDesign').valueChanges.pipe(
      startWith(''),
      tap(value => this.designValidity = this._checkDesignValidity(value)),
      map(value => this._filter(value))
    );
  }

  // Design finder
  private _filter(filterValue: string): string[] {
    return this.designs_id
      .filter(option => option.indexOf(filterValue) === 0 ); // filter by input value
  }

  private _checkDesignValidity(value: string): boolean {
    return this.designs_id.indexOf(value) !== -1;
  }

  _getDesign(_id) {
    return this.designs.filter(design => design._id === _id)[0];
  }

  onSelectDesign(design, closer) {
    this.findDesignForm.get('findDesign').reset();
    this.productService.getProductsByDesignId(design._id)
      .subscribe(result => {
          const imageObject = <IDesignPopUpData>{
            image: design.image,
            designProducts: <IDesignProducts[]>result.data,
            title: design._id,
            cloudinaryOptions: '/c_fill,w_650,h_650,f_auto/',
            closer
          };

          const dialogRef = this.dialog.open(DesignPopupComponent, {
            // height: '80vh',
            data: imageObject,
            panelClass: 'custom-dialog-container'
          });

          dialogRef.afterClosed()
            .subscribe(() => {
              },
              err => console.log('err delete', err)
            );
        },
        err => console.log('Помилка',  err)
      );
  }

}

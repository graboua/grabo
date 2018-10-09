import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormArray, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { config } from '../../../app.config';
import { IDesign, IRecommendation, ITechAsset } from '../../../interfaces/interface';
import { ProductService } from '../../../services/product.service';
import { DesignService } from '../../../services/design.service';
import { mergeMap, startWith, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-products-editor-form',
  templateUrl: './products-editor-form.component.html',
  styleUrls: ['./products-editor-form.component.scss']
})
export class ProductsEditorFormComponent implements OnInit {
  @ViewChild('f') productFormDirective: FormGroupDirective;
  @ViewChild('addDesignButton') addDesignButtonDirective;
  @ViewChild('addTechAssetsButton') addTechAssetsButtonDirective;
  @ViewChild('addCertAssetsButton') addCertAssetsButtonDirective;

  config = config;
  productForm: FormGroup;
  processingLoadAssets = -1;
  processingLoadTechAssets = -1;
  processingLoadCertAssets = -1;
  processingLoadImage = false;
  processingLoadBriefImage = false;

  editMode = false;
  edited_id: string;
  parentCategory_id: string;
  parentCategories: string[];
  parentCategoryName: string;
  designs: IDesign[];
  designs_id = [];
  product: any;

  techAssets: ITechAsset[];
  filteredTechAssets: Observable<string[]>;
  techAssets_id = [];
  techAssetValidity = false;

  certAssets: ITechAsset[];
  filteredCertAssets: Observable<string[]>;
  certAssets_id = [];
  certAssetValidity = false;

  recommendations: IRecommendation[];

  filteredDesigns: Observable<string[]>;
  designValidity = false;

  constructor(
    private matSnackBar: MatSnackBar,
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private designService: DesignService,
  ) { }

  ngOnInit() {

    this.productForm = new FormGroup({
      _id: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      // parent: new FormControl('', [
      //   // Validators.required,
      // ]),
      display: new FormControl('', [
        Validators.required,
      ]),
      order: new FormControl('', [
        Validators.required,
      ]),
      mainImage: new FormControl('', [
        Validators.required,
      ]),
      briefImage: new FormControl('', [
        Validators.required,
      ]),
      assets: new FormArray([]),
      techAssets: new FormArray([]),
      tech:  new FormControl('', []),
      certAssets: new FormArray([]),
      cert:  new FormControl('', []),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(2500),
      ]),
      recommendations: new FormArray([]),
      designs: new FormArray([]),
      des:  new FormControl('', [
        ]),
      techDescriptions: new FormArray([]),
    });

    this.productService.getRecommendations().pipe(
      mergeMap(result => {
        this.recommendations = result.data;
        return this.route.paramMap;
      }),
      mergeMap(paramMap => {
        this.edited_id = paramMap.get('_id');
        this.parentCategory_id = paramMap.get('parentCategory_id');
        this.parentCategoryName = paramMap.get('parentCategoryName');
        if (!this.edited_id) {
          return of(null);
        }
        return this.productService.getProductById(this.edited_id, false);
      })
    )
    .subscribe(result => {
        if (result) {
          this.editMode = true;
          this.parentCategories = result.parent;
          for (let i = 0; i < result.data.designs.length; i++) {
            this.addDesignsControl();
          }
          for (let i = 0; i < result.data.recommendations.length; i++) {
            this.addRecommendationsControl();
          }
          for (let i = 0; i < result.data.assets.length; i++) {
            this.addAssetsControl();
          }
          for (let i = 0; i < result.data.techAssets.length; i++) {
            this.addTechAssetsControl();
          }
          for (let i = 0; i < result.data.certAssets.length; i++) {
            this.addCertAssetsControl();
          }
          for (let i = 0; i < result.data.techDescriptions.length; i++) {
            this.addTechDescriptionsControl();
          }
          this.productForm.patchValue(result.data);
          this.productForm.get('_id').disable();
        } else {
          this.parentCategories = [this.parentCategory_id];
        }
      },
      err => console.log('Помилка', err)
    );

    this.productService.getTechAssets()
      .subscribe(result => {
          this.techAssets = result.data;
          this.techAssets.map(techAsset => this.techAssets_id.push(techAsset._id));
        },
        err => console.log('Помилка завантеження тех властивостей', err)
      );

    this.productService.getCertAssets()
      .subscribe(result => {
          this.certAssets = result.data;
          this.certAssets.map(certAsset => this.certAssets_id.push(certAsset._id));
        },
        err => console.log('Помилка завантеження сертифікатів', err)
      );

    this.designService.getDesigns()
      .subscribe(result => {
        this.designs = result.data;
        this.designs.map(design => this.designs_id.push(design._id));
        },
        err => console.log('Помилка завантеження дизайнів', err)
      );

    this.filteredTechAssets = this.productForm.get('tech').valueChanges.pipe(
      startWith(''),
      tap(value => this.techAssetValidity = this._checkTechAssetValidity(value)),
      map(value => this._filterTechAssets(value))
    );

    this.filteredCertAssets = this.productForm.get('cert').valueChanges.pipe(
      startWith(''),
      tap(value => this.certAssetValidity = this._checkCertAssetValidity(value)),
      map(value => this._filterCertAssets(value))
    );

    this.filteredDesigns = this.productForm.get('des').valueChanges.pipe(
      startWith(''),
      tap(value => this.designValidity = this._checkDesignValidity(value)),
      map(value => this._filter(value))
    );

  }

  private _filterTechAssets(filterValue: string): string[] {
    const techAssetsForm = this.productForm.get('techAssets').value;
    return this.techAssets_id
      .filter(option => techAssetsForm.indexOf(option) === -1) // remove designs, which already in form
      .filter(option => option.indexOf(filterValue) === 0 ); // filter by input value
  }

  private _checkTechAssetValidity(value: string): boolean {
    return this.techAssets_id.indexOf(value) !== -1;
  }

  private _filterCertAssets(filterValue: string): string[] {
    const certAssetsForm = this.productForm.get('certAssets').value;
    return this.certAssets_id
      .filter(option => certAssetsForm.indexOf(option) === -1) // remove designs, which already in form
      .filter(option => option.indexOf(filterValue) === 0 ); // filter by input value
  }

  private _checkCertAssetValidity(value: string): boolean {
    return this.certAssets_id.indexOf(value) !== -1;
  }

  private _filter(filterValue: string): string[] {
    const designsFromForm = this.productForm.get('designs').value;
    return this.designs_id
      .filter(option => designsFromForm.indexOf(option) === -1) // remove designs, which already in form
      .filter(option => option.indexOf(filterValue) === 0 ); // filter by input value
  }

  private _checkDesignValidity(value: string): boolean {
    return this.designs_id.indexOf(value) !== -1;
  }

  // takes design object (from local designs array) by design_id
  getDesign(_id) {
    return this.designs.filter(design => design._id === _id)[0];
  }

  getTechAsset(_id) {
    return this.techAssets.filter(techAsset => techAsset._id === _id)[0];
  }

  getCertAsset(_id) {
    return this.certAssets.filter(certAsset => certAsset._id === _id)[0];
  }

  // getDesignByImage(image) {
  //   return this.designs.filter(design => design.image === image)[0];
  // }

  addTechAsset() {
    if (this._checkTechAssetValidity(this.productForm.get('tech').value)) {
      const techAssetsList = this.productForm.get('techAssets').value || [];
      techAssetsList.push(this.productForm.get('tech').value);
      this.addTechAssetsControl();
      this.productForm.get('techAssets').setValue(techAssetsList);
      this.productForm.get('tech').reset();
    } else {
      console.log('add design false');
    }
  }

  addCertAsset() {
    if (this._checkCertAssetValidity(this.productForm.get('cert').value)) {
      const certAssetsList = this.productForm.get('certAssets').value || [];
      certAssetsList.push(this.productForm.get('cert').value);
      this.addCertAssetsControl();
      this.productForm.get('certAssets').setValue(certAssetsList);
      this.productForm.get('cert').reset();
    } else {
      console.log('add design false');
    }
  }

  addDesign() {
    if (this._checkDesignValidity(this.productForm.get('des').value)) {
      const designsList = this.productForm.get('designs').value || [];
      designsList.push(this.productForm.get('des').value);
      this.addDesignsControl();
      this.productForm.get('designs').setValue(designsList);
      this.productForm.get('des').reset();
    } else {
      console.log('add design false');
    }
  }

  addMainImage(event) {
    this.processingLoadImage = true;
    const file = event.target.files[0];
    const checkFile = this.productService.checkFile(file);

    if (!checkFile.success) {
      this.matSnackBar.open(checkFile.message || 'Помилка', '',
        {duration: 3000, panelClass: 'snack-bar-danger'});
      this.processingLoadImage = false;
      // if (!this.editMode) {
      //   this.productForm.get('_id').enable();
      // }
      // this.designForm.get('structure').enable();
    } else {

      // this.designForm.get('image').setValue(file);
      console.log('added file', this.productForm.get('mainImage').value);
      this.productService.productAddMainImage(file, this.productForm.get('_id').value)
        .subscribe(result => {
            this.productForm.get('mainImage').setValue(result.data);
            this.processingLoadImage = false;
            // if (!this.editMode) {
            //   this.designForm.get('_id').enable();
            // }
            // this.designForm.get('structure').enable();
          },
          err => {
            this.matSnackBar.open(err.error || 'Помилка', '',
              {duration: 3000, panelClass: 'snack-bar-danger'});
            this.processingLoadImage = false;
            // if (!this.editMode) {
            //   this.designForm.get('_id').enable();
            // }
            // this.designForm.get('structure').enable();
          }
        );
    }
  }

  addBriefImage(event) {
    this.processingLoadBriefImage = true;
    const file = event.target.files[0];
    const checkFile = this.productService.checkFile(file);

    if (!checkFile.success) {
      this.matSnackBar.open(checkFile.message || 'Помилка', '',
        {duration: 3000, panelClass: 'snack-bar-danger'});
      this.processingLoadBriefImage = false;
    } else {
      this.productService.productAddBriefImage(file, this.productForm.get('_id').value)
        .subscribe(result => {
            this.productForm.get('briefImage').setValue(result.data);
            this.processingLoadBriefImage = false;
          },
          err => {
            this.matSnackBar.open(err.error || 'Помилка', '',
              {duration: 3000, panelClass: 'snack-bar-danger'});
            this.processingLoadBriefImage = false;
          }
        );
    }
  }

  addAssets(event) {
    this.processingLoadAssets = this.productForm.get('assets').value.length;
    const file = event.target.files[0];
    const checkFile = this.productService.checkFile(file);

    if (!checkFile.success) {
      this.matSnackBar.open(checkFile.message || 'Помилка', '',
        {duration: 3000, panelClass: 'snack-bar-danger'});
      this.processingLoadAssets = -1;
    } else {
      const filesLinks = this.productForm.get('assets').value;
      filesLinks.push(config.defaultProductImg);
      this.addAssetsControl();
      this.productForm.get('assets').setValue(filesLinks);
      this.productService.productAddAssets(file, this.productForm.get('_id').value)
        .subscribe(result => {
            filesLinks.pop();
            filesLinks.push(result.data);
            this.productForm.get('assets').setValue(filesLinks);
            this.processingLoadAssets = -1;
          },
          err => {
            this.matSnackBar.open(err.error || 'Помилка', '',
              {duration: 3000, panelClass: 'snack-bar-danger'});
            this.removeAssetsControl(this.productForm.get('assets').value.length - 1);
            filesLinks.pop();
            this.processingLoadAssets = -1;
          }
        );
    }
  }

  addTechAssets(event) {
    this.processingLoadTechAssets = this.productForm.get('techAssets').value.length;
    const file = event.target.files[0];
    const checkFile = this.productService.checkFile(file);

    if (!checkFile.success) {
      this.matSnackBar.open(checkFile.message || 'Помилка', '',
        {duration: 3000, panelClass: 'snack-bar-danger'});
      this.processingLoadTechAssets = -1;
    } else {
      const filesLinks = this.productForm.get('techAssets').value;
      filesLinks.push(config.defaultProductImg);
      this.addTechAssetsControl();
      this.productForm.get('techAssets').setValue(filesLinks);
      this.productService.productAddTechAssets(file, this.productForm.get('_id').value)
        .subscribe(result => {
            filesLinks.pop();
            filesLinks.push(result.data);
            this.productForm.get('techAssets').setValue(filesLinks);
            this.processingLoadTechAssets = -1;
          },
          err => {
            this.matSnackBar.open(err.error || 'Помилка', '',
              {duration: 3000, panelClass: 'snack-bar-danger'});
            this.removeAssetsControl(this.productForm.get('techAssets').value.length - 1);
            filesLinks.pop();
            this.processingLoadTechAssets = -1;
          }
        );
    }
  }

  onProductFormSubmit(goBack) {

    const sortedDesigns = this.productForm.get('designs').value.sort(function (a, b) {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    });

    console.log('this.productForm.get(\'recommendations\').value', this.productForm.get('recommendations').value);
    this.product = {
      _id: this.productForm.getRawValue()._id, // raw because may be disabled
      name: this.productForm.get('name').value,
      order: this.productForm.get('order').value,
      parent: this.parentCategories,
      display: this.productForm.get('display').value,
      mainImage: this.productForm.get('mainImage').value,
      briefImage: this.productForm.get('briefImage').value,
      assets: this.productForm.get('assets').value,
      techAssets: this.productForm.get('techAssets').value,
      certAssets: this.productForm.get('certAssets').value,
      description: this.productForm.get('description').value,
      techDescriptions: this.productForm.get('techDescriptions').value,
      recommendations: this.productForm.get('recommendations').value,
      designs: sortedDesigns,
    };

    console.log('this.product', this.product);
    //
    this.productService.productUpsert(this.product)
      .subscribe(result => {
          this.matSnackBar.open(result.message, '',
            {duration: 3000});
          if (goBack) {
            this.resetForm();
            this.goBack();
          }
        },
        err => this.matSnackBar.open(err.error, '',
          {duration: 3000, panelClass: 'snack-bar-danger'})
      );
  }

  resetForm() {
    this.productFormDirective.resetForm();
  }

  goBack() {
    this.location.back();
  }

  onSelectDesign() {
    this.addDesignButtonDirective.focus();
  }

  onSelectTechAssets() {
    this.addTechAssetsButtonDirective.focus();
  }

  onSelectCertAssets() {
    this.addCertAssetsButtonDirective.focus();
  }

  addAssetsControl() {
    const control = <FormArray>this.productForm.get('assets');
    control.push(this.initAssetsControl());
  }

  removeAssetsControl(i: number) {
    const control = <FormArray>this.productForm.get('assets');
    control.removeAt(i);
  }

  initAssetsControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }

  addTechAssetsControl() {
    const control = <FormArray>this.productForm.get('techAssets');
    control.push(this.initTechAssetsControl());
  }

  removeTechAssetsControl(i: number) {
    const control = <FormArray>this.productForm.get('techAssets');
    control.removeAt(i);
  }

  initTechAssetsControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }

  addCertAssetsControl() {
    const control = <FormArray>this.productForm.get('certAssets');
    control.push(this.initCertAssetsControl());
  }

  removeCertAssetsControl(i: number) {
    const control = <FormArray>this.productForm.get('certAssets');
    control.removeAt(i);
  }

  initCertAssetsControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }

  addRecommendationsControl() {
    const control = <FormArray>this.productForm.get('recommendations');
    control.push(this.initRecommendationsControl());
  }

  removeRecommendationsControl(i: number) {
    const control = <FormArray>this.productForm.get('recommendations');
    control.removeAt(i);
  }

  initRecommendationsControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }

  addDesignsControl() {
    const control = <FormArray>this.productForm.get('designs');
    control.push(this.initDesignsControl());
  }

  removeDesignsControl(i: number) {
    const control = <FormArray>this.productForm.get('designs');
    control.removeAt(i);
  }

  initDesignsControl() {
    return new FormControl('', [
      Validators.required,
    ]);
  }

  addTechDescriptionsControl() {
    const control = <FormArray>this.productForm.get('techDescriptions');
    control.push(this.initTechDescriptionsControl());
  }

  removeTechDescriptionsControl(i: number) {
    const control = <FormArray>this.productForm.get('techDescriptions');
    control.removeAt(i);
  }

  initTechDescriptionsControl() {
    return new FormGroup ({
      techName: new FormControl('', [
        Validators.required,
      ]),
      techUnit: new FormControl('', [
        Validators.required,
      ]),
      techValue: new FormControl('', [
        Validators.required,
      ]),
    });
  }
}

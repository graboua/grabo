(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-products-products-module"],{

/***/ "./src/app/components/products/breadcrumb/breadcrumb.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/products/breadcrumb/breadcrumb.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout>\r\n  <div class=\"cell wrap\" fxFlex fxLayout=\"row\">\r\n    <div>\r\n      <a mat-button class=\"breadcrumb-button\"\r\n         [routerLink]=\"['/products', 'ch']\"\r\n         [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <mat-icon>home</mat-icon> <mat-icon>keyboard_arrow_right</mat-icon>\r\n        <!--<object *ngIf=\"processing\" type=\"image/svg+xml\" data=\"/assets/images/loading.svg\" width=\"50px\" height=\"20px\">-->\r\n          <!--Loading..-->\r\n        <!--</object>-->\r\n      </a>\r\n    </div>\r\n\r\n    <div >\r\n\r\n    </div>\r\n\r\n    <div *ngFor=\"let hierarchyCategoryItem of hierarchyCategory\">\r\n      <a mat-button class=\"breadcrumb-button\" *ngIf=\"!processing\"\r\n         [routerLink]=\"['/products', 'ch', {outlets: {primary: [hierarchyCategoryItem._id], breadcrumb: [hierarchyCategoryItem._id]}}]\"\r\n         [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <!-- <mat-icon>folder</mat-icon>  -->\r\n        {{hierarchyCategoryItem.name}}<mat-icon>keyboard_arrow_right</mat-icon></a>\r\n    </div>\r\n    <div *ngIf=\"!processing\" fxHide.lt-md>\r\n      <button *ngIf=\"productName\" mat-button\r\n         class=\"accent\" disabled>\r\n        <mat-icon class=\"accent\">insert_photo</mat-icon> {{productName}}</button>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/products/breadcrumb/breadcrumb.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/products/breadcrumb/breadcrumb.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/breadcrumb/breadcrumb.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/products/breadcrumb/breadcrumb.component.ts ***!
  \************************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(route, catalogService, productService) {
        this.route = route;
        this.catalogService = catalogService;
        this.productService = productService;
        this.processing = true;
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        var $paramMap = this.route.paramMap;
        var $queryParamMap = this.route.queryParamMap;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])($paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (paramMap) {
            _this.processing = true;
            _this.category_id = paramMap.get('category_id');
            if (!_this.category_id) {
                return _this.catalogService.getAllParents('products');
            }
            return _this.catalogService.getAllParents(_this.category_id);
        })), $queryParamMap)
            .subscribe(function (result) {
            _this.productName = result[1].get('name');
            _this.hierarchyCategory = result[0].data[0].hierarchy;
            _this.hierarchyCategory.push(result[0].data[0]);
            _this.hierarchyCategory.splice(0, 3);
            _this.processing = false;
        }, function (err) { return console.log('Помилка breadcrumb', err); });
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/components/products/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/components/products/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_catalog_service__WEBPACK_IMPORTED_MODULE_4__["CatalogService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-detail-side/products-detail-side.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/products/products-detail-side/products-detail-side.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<a *ngFor=\"let sibling of siblings\" mat-button-->\r\n   <!--[routerLink]=\"['/products', 'ch', {outlets: {primary: [category_id, 'details', sibling._id],-->\r\n     <!--breadcrumb: [category_id, 'details', sibling._id]}}]\"-->\r\n   <!--[queryParams]=\"{name: sibling.name}\"-->\r\n   <!--[routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n  <!--{{sibling.name}}-->\r\n<!--</a>-->\r\n\r\n<mat-nav-list>\r\n    <a mat-list-item *ngFor=\"let sibling of siblings\"\r\n       [routerLink]=\"['/products', 'ch', {outlets: {primary: [category_id, 'details', sibling._id],\r\n     breadcrumb: [category_id, 'details', sibling._id]}}]\"\r\n       [queryParams]=\"{name: sibling.name}\"\r\n       [routerLinkActive]=\"['primary-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n      {{sibling.name}}\r\n    </a>\r\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/components/products/products-detail-side/products-detail-side.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/products/products-detail-side/products-detail-side.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/products-detail-side/products-detail-side.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/products/products-detail-side/products-detail-side.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProductsDetailSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDetailSideComponent", function() { return ProductsDetailSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsDetailSideComponent = /** @class */ (function () {
    function ProductsDetailSideComponent() {
    }
    ProductsDetailSideComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductsDetailSideComponent.prototype, "siblings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductsDetailSideComponent.prototype, "category_id", void 0);
    ProductsDetailSideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-detail-side',
            template: __webpack_require__(/*! ./products-detail-side.component.html */ "./src/app/components/products/products-detail-side/products-detail-side.component.html"),
            styles: [__webpack_require__(/*! ./products-detail-side.component.scss */ "./src/app/components/products/products-detail-side/products-detail-side.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsDetailSideComponent);
    return ProductsDetailSideComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-detail/products-detail.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/products/products-detail/products-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\">\r\n\r\n  <!-- <div *ngIf=\"!product\" style=\"width: 100vw; text-align: center;\">\r\n    <div style=\"display: inline-block;\">\r\n      <object type=\"image/svg+xml\" data=\"/assets/images/loading.svg\" width=\"40px\" height=\"16px\">\r\n        Loading..\r\n      </object>\r\n    </div>\r\n  </div> -->\r\n\r\n  <div class=\"cell-menu\" fxFlex.lt-md=\"100\" fxFlex.gt-sm=\"250px\">\r\n    <app-products-detail-side [siblings]=\"siblings\" [category_id]=\"category_id\"></app-products-detail-side>\r\n  </div>\r\n  <div class=\"cell\" fxFlex.lt-md=\"100\" fxFlex.gt-sm=\"calc(100%-250px)\">\r\n\r\n    <app-product-item-detail *ngIf=\"product\" [product]=\"product\" [category_id]=\"category_id\"></app-product-item-detail>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/products/products-detail/products-detail.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/products/products-detail/products-detail.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/products-detail/products-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/products/products-detail/products-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDetailComponent", function() { return ProductsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsDetailComponent = /** @class */ (function () {
    function ProductsDetailComponent(route, productService, catalogService) {
        this.route = route;
        this.productService = productService;
        this.catalogService = catalogService;
    }
    ProductsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (paramMap) {
            _this.category_id = paramMap.get('category_id');
            _this.product_id = paramMap.get('product_id');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(_this.productService.getProductById(_this.product_id, true), _this.productService.getProductsByCategory(_this.category_id, true));
        }))
            .subscribe(function (result) {
            _this.product = result[0].data;
            _this.siblings = result[1].data;
        });
    };
    ProductsDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-detail',
            template: __webpack_require__(/*! ./products-detail.component.html */ "./src/app/components/products/products-detail/products-detail.component.html"),
            styles: [__webpack_require__(/*! ./products-detail.component.scss */ "./src/app/components/products/products-detail/products-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _services_catalog_service__WEBPACK_IMPORTED_MODULE_3__["CatalogService"]])
    ], ProductsDetailComponent);
    return ProductsDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-list/products-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/products/products-list/products-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"category?.description?.p?.length\" class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <h2 class=\"mat-display-1\" *ngIf=\"category?.description?.title\" [innerHTML]=\"category.description.title\">\r\n          <!--{{category.description.title}}-->\r\n        </h2>\r\n        <div class=\"text-justify\">\r\n          <div class=\"category-description-body\">\r\n            <p class=\"mat-body-1\" *ngFor=\"let p of category.description.p\" [innerHTML]=\"p\">\r\n              <!--{{p}}-->\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"category-description-list\">\r\n            <mat-list *ngIf=\"category?.description?.li\">\r\n              <mat-list-item *ngFor=\"let li of category.description.li\">\r\n                <!--<mat-icon matListIcon>fiber_manual_record</mat-icon>-->\r\n                <p [innerHTML]=\"li\">\r\n                 <!--{{li}}-->\r\n                </p>\r\n              </mat-list-item>\r\n            </mat-list>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" fxLayout=\"row\" >\r\n  <div *ngFor=\"let product of products\"  class=\"cell\"\r\n       fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"25\">\r\n    <app-product-item-brief [product]=\"product\" [category_id]=\"category_id\"></app-product-item-brief>\r\n  </div>\r\n  <div *ngFor=\"let descendant of descendants\" class=\"cell\"\r\n       fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"25\">\r\n    <app-product-item-brief  [descendant]=\"descendant\"></app-product-item-brief>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/products/products-list/products-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/products/products-list/products-list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/products-list/products-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/products/products-list/products-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(route, productService, catalogService, sharedService) {
        this.route = route;
        this.productService = productService;
        this.catalogService = catalogService;
        this.sharedService = sharedService;
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (paramMap) {
            _this.category_id = paramMap.get('category_id');
            if (!_this.category_id) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }
            return _this.catalogService.getCategoryById(_this.category_id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (paramMap) {
            if (paramMap) {
                _this.category = paramMap.data;
                return _this.catalogService.getDescendants(_this.category_id);
            }
            else {
                return _this.catalogService.getDescendants('products');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (result) {
            _this.descendants = result.data;
            if (!_this.descendants.length) {
                return _this.productService.getProductsByCategory(_this.category_id, true);
            }
            else {
                return _this.productService.getProductsByCategory(null, true);
            }
        }))
            .subscribe(function (products) { return _this.products = products.data; }, function (err) { return console.log('error', err); });
    };
    ProductsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-list',
            template: __webpack_require__(/*! ./products-list.component.html */ "./src/app/components/products/products-list/products-list.component.html"),
            styles: [__webpack_require__(/*! ./products-list.component.scss */ "./src/app/components/products/products-list/products-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _services_catalog_service__WEBPACK_IMPORTED_MODULE_5__["CatalogService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], ProductsListComponent);
    return ProductsListComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/products/products-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-list/products-list.component */ "./src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/components/products/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _products_detail_products_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-detail/products-detail.component */ "./src/app/components/products/products-detail/products-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { ProductItemDetailComponent } from '../shared/product-item-detail/product-item-detail.component';

var productsRoutes = [
    {
        path: 'ch',
        component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
        children: [
            {
                path: '',
                component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductsListComponent"],
            },
            {
                path: '',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
                outlet: 'breadcrumb',
            },
            {
                path: ':category_id',
                component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductsListComponent"],
            },
            {
                path: ':category_id',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
                outlet: 'breadcrumb',
            },
            {
                path: ':category_id/details/:product_id',
                component: _products_detail_products_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductsDetailComponent"],
            },
            {
                path: ':category_id/details/:product_id',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
                outlet: 'breadcrumb',
            },
        ],
    }
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(productsRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\r\n  <div class=\"container\">\r\n    <router-outlet name=\"breadcrumb\"></router-outlet>\r\n  </div>\r\n</div>\r\n<div class=\"app-container\">\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/products/products.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/components/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/products/products.module.ts ***!
  \********************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-list/products-list.component */ "./src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/components/products/products-routing.module.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/components/products/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _products_detail_products_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products-detail/products-detail.component */ "./src/app/components/products/products-detail/products-detail.component.ts");
/* harmony import */ var _products_detail_side_products_detail_side_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products-detail-side/products-detail-side.component */ "./src/app/components/products/products-detail-side/products-detail-side.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { CloudinaryModule } from '@cloudinary/angular-5.x';



// import { ProductDetailsComponent } from './product-details/product-details.component';


// import { ProductsCatalogComponent } from './products-catalog/products-catalog.component';

// import { ProductsBriefComponent } from './products-brief/products-brief.component';

// import { ProductsDetailMainComponent } from './products-detail-main/products-detail-main.component';
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                // CloudinaryModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ],
            exports: [],
            declarations: [
                _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductsListComponent"],
                // ProductDetailsComponent,
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"],
                _products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
                // ProductsCatalogComponent,
                _products_detail_products_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductsDetailComponent"],
                // ProductsBriefComponent,
                _products_detail_side_products_detail_side_component__WEBPACK_IMPORTED_MODULE_9__["ProductsDetailSideComponent"],
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-products-products-module.js.map
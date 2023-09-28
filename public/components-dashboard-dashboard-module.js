(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dashboard-dashboard-module"],{

/***/ "./src/app/components/dashboard/dashboard-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_sidenav_dashboard_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-sidenav/dashboard-sidenav.component */ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.ts");
/* harmony import */ var _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user-profile/user-profile.component */ "./src/app/components/user/user-profile/user-profile.component.ts");
/* harmony import */ var _designs_editor_designs_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./designs-editor/designs-editor.component */ "./src/app/components/dashboard/designs-editor/designs-editor.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _designs_editor_form_designs_editor_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./designs-editor-form/designs-editor-form.component */ "./src/app/components/dashboard/designs-editor-form/designs-editor-form.component.ts");
/* harmony import */ var _products_editor_products_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products-editor/products-editor.component */ "./src/app/components/dashboard/products-editor/products-editor.component.ts");
/* harmony import */ var _products_editor_form_products_editor_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products-editor-form/products-editor-form.component */ "./src/app/components/dashboard/products-editor-form/products-editor-form.component.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/components/dashboard/tools/tools.component.ts");
/* harmony import */ var _designs_editor_batch_designs_editor_batch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./designs-editor-batch/designs-editor-batch.component */ "./src/app/components/dashboard/designs-editor-batch/designs-editor-batch.component.ts");
/* harmony import */ var _user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../user/user-create/user-create.component */ "./src/app/components/user/user-create/user-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var dashboardRoutes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        children: [
            {
                path: '',
                component: _products_editor_products_editor_component__WEBPACK_IMPORTED_MODULE_8__["ProductsEditorComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: '',
                component: _dashboard_sidenav_dashboard_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["DashboardSidenavComponent"],
                outlet: 'dashboardSidenav',
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'tools',
                component: _tools_tools_component__WEBPACK_IMPORTED_MODULE_10__["ToolsComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'products_editor',
                component: _products_editor_products_editor_component__WEBPACK_IMPORTED_MODULE_8__["ProductsEditorComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'products_editor_new/:parentCategory_id/:parentCategoryName',
                component: _products_editor_form_products_editor_form_component__WEBPACK_IMPORTED_MODULE_9__["ProductsEditorFormComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'products_editor_edit/:parentCategory_id/:parentCategoryName/:_id',
                component: _products_editor_form_products_editor_form_component__WEBPACK_IMPORTED_MODULE_9__["ProductsEditorFormComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'designs_editor',
                component: _designs_editor_designs_editor_component__WEBPACK_IMPORTED_MODULE_5__["DesignsEditorComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'designs_editor_batch',
                component: _designs_editor_batch_designs_editor_batch_component__WEBPACK_IMPORTED_MODULE_11__["DesignsEditorBatchComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'designs_editor_edit/:_id',
                component: _designs_editor_form_designs_editor_form_component__WEBPACK_IMPORTED_MODULE_7__["DesignsEditorFormComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'designs_editor_new',
                component: _designs_editor_form_designs_editor_form_component__WEBPACK_IMPORTED_MODULE_7__["DesignsEditorFormComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'dashboard_signup',
                component: _user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_12__["UserCreateComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'profile',
                component: _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"],
            },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(dashboardRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!--<mat-toolbar class=\"mat-elevation-z2\">-->\r\n      <mat-toolbar-row *ngFor=\"let dashboardSidenavItem of dashboardSidenavItems\" class=\"sidenav-mat-toolbar-row\">\r\n        <a [routerLinkActive]=\"['primary-background']\" [routerLinkActiveOptions]=\"{exact: true}\" mat-button\r\n           [routerLink]=\"['/dashboard', dashboardSidenavItem._id]\">{{dashboardSidenavItem.name}}</a>\r\n      </mat-toolbar-row>\r\n    <!--</mat-toolbar>-->\r\n\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DashboardSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSidenavComponent", function() { return DashboardSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardSidenavComponent = /** @class */ (function () {
    function DashboardSidenavComponent(router, catalogService) {
        this.router = router;
        this.catalogService = catalogService;
    }
    DashboardSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catalogService.getDescendants('dashboard')
            .subscribe(function (menuItems) {
            _this.dashboardSidenavItems = menuItems.data;
        });
    };
    DashboardSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-sidenav',
            template: __webpack_require__(/*! ./dashboard-sidenav.component.html */ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-sidenav.component.scss */ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_catalog_service__WEBPACK_IMPORTED_MODULE_2__["CatalogService"]])
    ], DashboardSidenavComponent);
    return DashboardSidenavComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav  class=\"sidenav\" #sidenav mode=\"side\" [opened]=\"media.isActive('gt-sm')\">\r\n    <!--<p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>-->\r\n    <!--<p>-->\r\n\r\n    <!--<div class=\"menu-button\" fxShow=\"true\" fxHide.gt-sm=\"true\">-->\r\n      <!--<button mat-button (click)=\"sidenav.toggle()\">-->\r\n        <!--<mat-icon>arrow_left</mat-icon>-->\r\n      <!--</button>-->\r\n    <!--</div>-->\r\n    <div class=\"container-sidenav\">\r\n      <mat-toolbar class=\"mat-elevation-z2\">\r\n        <mat-toolbar-row fxShow=\"true\" fxHide.gt-sm=\"true\" class=\"sidenav-mat-toolbar-row\">\r\n          <a  mat-button (click)=\"sidenav.toggle()\"><mat-icon>arrow_left</mat-icon></a>\r\n        </mat-toolbar-row>\r\n        <router-outlet name=\"dashboardSidenav\"></router-outlet>\r\n      </mat-toolbar>\r\n    </div>\r\n      <!--<mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">-->\r\n        <!--<label>Mode:</label>-->\r\n        <!--<mat-radio-button value=\"over\">Over</mat-radio-button>-->\r\n        <!--<mat-radio-button value=\"side\">Side</mat-radio-button>-->\r\n        <!--<mat-radio-button value=\"push\">Push</mat-radio-button>-->\r\n      <!--</mat-radio-group>-->\r\n    <!--</p>-->\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n\r\n    <!--<p><button mat-button (click)=\"sidenav.toggle()\" >Меню</button></p>-->\r\n    <!--<p>-->\r\n\r\n    <!--*ngIf=\"!sidenav.opened\"-->\r\n    <div *ngIf=\"!sidenav.opened\" class=\"menu-button\" fxShow=\"true\" fxHide.gt-sm=\"true\">\r\n    <button mat-button (click)=\"sidenav.toggle()\">\r\n      <mat-icon>arrow_right</mat-icon>\r\n    </button>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n      <!--<mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">-->\r\n        <!--<label>Mode:</label>-->\r\n        <!--<mat-radio-button value=\"over\">Over</mat-radio-button>-->\r\n        <!--<mat-radio-button value=\"side\">Side</mat-radio-button>-->\r\n        <!--<mat-radio-button value=\"push\">Push</mat-radio-button>-->\r\n      <!--</mat-radio-group>-->\r\n    <!--</p>-->\r\n\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(media) {
        this.media = media;
        this.state = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.media.asObservable()
        //   .subscribe((change: MediaChange) => {
        //     this.state = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
        //   });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/components/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _dashboard_sidenav_dashboard_sidenav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-sidenav/dashboard-sidenav.component */ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user.module */ "./src/app/components/user/user.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _designs_editor_designs_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./designs-editor/designs-editor.component */ "./src/app/components/dashboard/designs-editor/designs-editor.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _designs_editor_form_designs_editor_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./designs-editor-form/designs-editor-form.component */ "./src/app/components/dashboard/designs-editor-form/designs-editor-form.component.ts");
/* harmony import */ var _products_editor_products_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products-editor/products-editor.component */ "./src/app/components/dashboard/products-editor/products-editor.component.ts");
/* harmony import */ var _products_editor_form_products_editor_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products-editor-form/products-editor-form.component */ "./src/app/components/dashboard/products-editor-form/products-editor-form.component.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/components/dashboard/tools/tools.component.ts");
/* harmony import */ var _designs_editor_batch_designs_editor_batch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./designs-editor-batch/designs-editor-batch.component */ "./src/app/components/dashboard/designs-editor-batch/designs-editor-batch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { CloudinaryModule } from '@cloudinary/angular-5.x';







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
                // CloudinaryModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _dashboard_sidenav_dashboard_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["DashboardSidenavComponent"],
                _designs_editor_designs_editor_component__WEBPACK_IMPORTED_MODULE_8__["DesignsEditorComponent"],
                _designs_editor_form_designs_editor_form_component__WEBPACK_IMPORTED_MODULE_10__["DesignsEditorFormComponent"],
                _products_editor_products_editor_component__WEBPACK_IMPORTED_MODULE_11__["ProductsEditorComponent"],
                _products_editor_form_products_editor_form_component__WEBPACK_IMPORTED_MODULE_12__["ProductsEditorFormComponent"],
                _tools_tools_component__WEBPACK_IMPORTED_MODULE_13__["ToolsComponent"],
                _designs_editor_batch_designs_editor_batch_component__WEBPACK_IMPORTED_MODULE_14__["DesignsEditorBatchComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/designs-editor-batch/designs-editor-batch.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dashboard/designs-editor-batch/designs-editor-batch.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n    <div class=\"item full-width-container\">\r\n      <mat-card  class=\"form-block\">\r\n        <mat-card-header></mat-card-header>\r\n        <mat-card-title></mat-card-title>\r\n\r\n        <mat-card-content>\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"cell\">\r\n                <h2 class=\"mat-h2\">Групове додавання дизайнів\r\n\r\n                </h2>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n              <div class=\"cell\" fxFlex=\"33.3\">\r\n                <p class=\"mat-body\">Вибрано файлів: {{totalFiles}}</p>\r\n              </div>\r\n              <div class=\"cell\" fxFlex=\"33.3\">\r\n                <p class=\"mat-body\">Відхилено файлів: {{rejectedFiles.length}}</p>\r\n              </div>\r\n              <div class=\"cell\" fxFlex=\"33.3\">\r\n                <p class=\"mat-body\">Успішно: {{successFiles.length}}</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\" fxLayout=\"row\">\r\n              <p *ngFor=\"let successFile of successFiles\" class=\"cell\" fxFlex>\r\n                {{successFile}}\r\n              </p>\r\n            </div>\r\n\r\n            <form [formGroup]=\"designForm\" #f=\"ngForm\" (submit)=\"onDesignFormSubmit()\" novalidate>\r\n\r\n              <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n                     <div class=\"cell\" fxFlex=\"100\">\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"Структура\" formControlName=\"structure\" required>\r\n                          <mat-option *ngFor=\"let struct of config.designStructure\" [value]=\"struct\">\r\n                            {{struct}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                        <mat-error\r\n                          *ngIf=\"designForm.get('structure').errors?.required &&\r\n                            designForm.get('structure').touched\">\r\n                          Виберіть категорію\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n\r\n                <input #inputFile type=\"file\" multiple name=\"designFile[]\" (change)=\"addPictures($event)\"\r\n                       accept=\".jpg, .jpe, .jpeg, .bmp, .webp, .png, .gif, .svg\" style=\"display:none;\">\r\n\r\n              </div>\r\n            </form>\r\n\r\n\r\n          <div class=\"submit-button-wrapper row\" fxLayout=\"row\">\r\n            <div class=\"cell\" fxFlex=\"60\">\r\n              <button mat-raised-button color=\"primary\" class=\"full-width\" type=\"button\"\r\n                      (click)=\"inputFile.click();\"\r\n                      [disabled]=\"!designForm.valid || processingLoadFile\">\r\n                <mat-icon> <mat-spinner *ngIf=\"processingLoadFile\" [diameter]=\"24\"></mat-spinner> </mat-icon>\r\n                 Вибрати файли (максимум 50)</button>\r\n            </div>\r\n            <div class=\"cell\" fxFlex=\"40\">\r\n              <button mat-raised-button  type=\"button\" (click)=\"goBack()\" class=\"full-width\"\r\n                      [disabled]=\"processingLoadFile\">Повернутись</button>\r\n            </div>\r\n          </div>\r\n\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/designs-editor-batch/designs-editor-batch.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dashboard/designs-editor-batch/designs-editor-batch.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/designs-editor-batch/designs-editor-batch.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/dashboard/designs-editor-batch/designs-editor-batch.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DesignsEditorBatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignsEditorBatchComponent", function() { return DesignsEditorBatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_design_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/design.service */ "./src/app/services/design.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DesignsEditorBatchComponent = /** @class */ (function () {
    function DesignsEditorBatchComponent(designService, location, matSnackBar, productService) {
        this.designService = designService;
        this.location = location;
        this.matSnackBar = matSnackBar;
        this.productService = productService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_4__["config"];
        this.processingLoadFile = false;
        this.rejectedFiles = [];
        this.successFiles = [];
        this.designs = [];
        this.totalFiles = 0;
    }
    DesignsEditorBatchComponent.prototype.ngOnInit = function () {
        this.designForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            structure: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
        });
    };
    DesignsEditorBatchComponent.prototype.addPictures = function (event) {
        var _this = this;
        this.rejectedFiles = [];
        this.successFiles = [];
        this.totalFiles = 0;
        var files = event.target.files;
        this.totalFiles = files.length;
        if (files.length > 50) {
            this.matSnackBar.open('Спробуйте вибрати менше ніж 50 файлів', '', { duration: 3000, panelClass: 'snack-bar-danger' });
            return;
        }
        var filteredFiles = Array.prototype.filter.call(files, function (res) {
            if (_this.productService.checkFile(res).success) {
                return true;
            }
            else {
                _this.rejectedFiles.push('err');
                return false;
            }
        });
        if (this.rejectedFiles.length === files.length) {
            this.matSnackBar.open('Ці файли не підходять пол критеріях: тип та/або розір', '', { duration: 3000, panelClass: 'snack-bar-danger' });
            return;
        }
        this.processingLoadFile = true;
        this.designForm.get('structure').disable();
        var arrayOfObservables = Array.prototype.map.call(filteredFiles, function (res) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(res)
            .pipe(
        // filter(file => {
        //   if (!this.productService.checkFile(file).success) {
        //     this.rejectedFiles.push(file);
        //
        //   } else {
        //     return true;
        //   }
        // }),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (file) {
            var design_id = file.name.slice(0, -4).trimEnd();
            return _this.designService.designAddImagesBatch(file, design_id, _this.designForm.get('structure').value);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(error); })); });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(arrayOfObservables)
            .subscribe(function (result) {
            _this.processingLoadFile = false;
            _this.designForm.get('structure').enable();
            result.forEach(function (res) {
                if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpErrorResponse"]) {
                    _this.rejectedFiles.push('err');
                }
                else {
                    _this.successFiles.push(res.data._id);
                }
            });
            _this.resetForm();
        }, function (err) {
            console.log('err', err);
            _this.matSnackBar.open(err.error || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
            _this.resetForm();
            _this.processingLoadFile = false;
        });
    };
    DesignsEditorBatchComponent.prototype.onDesignFormSubmit = function () {
    };
    DesignsEditorBatchComponent.prototype.resetForm = function () {
        this.designFormDirective.resetForm();
    };
    DesignsEditorBatchComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"])
    ], DesignsEditorBatchComponent.prototype, "designFormDirective", void 0);
    DesignsEditorBatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-designs-editor-batch',
            template: __webpack_require__(/*! ./designs-editor-batch.component.html */ "./src/app/components/dashboard/designs-editor-batch/designs-editor-batch.component.html"),
            styles: [__webpack_require__(/*! ./designs-editor-batch.component.scss */ "./src/app/components/dashboard/designs-editor-batch/designs-editor-batch.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_design_service__WEBPACK_IMPORTED_MODULE_2__["DesignService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]])
    ], DesignsEditorBatchComponent);
    return DesignsEditorBatchComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/designs-editor-form/designs-editor-form.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/dashboard/designs-editor-form/designs-editor-form.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n    <div class=\"item full-width-container\">\r\n      <mat-card  class=\"form-block\">\r\n        <mat-card-header></mat-card-header>\r\n        <mat-card-title></mat-card-title>\r\n\r\n        <mat-card-content>\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"cell\">\r\n                <h2 class=\"mat-h2\">Редагувати дизайн</h2>\r\n              </div>\r\n            </div>\r\n\r\n            <form [formGroup]=\"designForm\" #f=\"ngForm\" (submit)=\"onDesignFormSubmit()\" novalidate>\r\n\r\n              <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n                <div class=\"container\" fxFlex.gt-xs=\"50\">\r\n                  <div class=\"row\" fxLayout=\"column\">\r\n\r\n                    <div class=\"cell\" fxFlex=\"100\">\r\n                        <mat-form-field>\r\n                          <input matInput placeholder=\"Дизайн\" formControlName=\"_id\" required>\r\n                          <mat-error\r\n                            *ngIf=\"(designForm.get('_id').errors?.minlength ||\r\n                      designForm.get('_id').errors?.maxlength ||\r\n                      designForm.get('_id').errors?.required) &&\r\n                      designForm.get('_id').touched\">\r\n                            Довжина повинна бути від 7 до 12 символів\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                    <div class=\"cell\" fxFlex=\"100\">\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"Структура\" formControlName=\"structure\" required>\r\n                          <mat-option *ngFor=\"let struct of config.designStructure\" [value]=\"struct\">\r\n                            {{struct}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                        <mat-error\r\n                          *ngIf=\"designForm.get('structure').errors?.required &&\r\n                            designForm.get('structure').touched\">\r\n                          Виберіть категорію\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"cell\" fxFlex.gt-xs=\"50\">\r\n                    <div class=\"preview-img-wrapper\">\r\n                      <img *ngIf=\"designForm.get('image').value\" src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_180,h_180,f_auto/' +\r\n                        designForm.get('image').value}}\"\r\n                           alt=\"designImage\">\r\n                      <img *ngIf=\"!designForm.get('image').value\"\r\n                           src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_180,h_180,f_auto/' +\r\n                        config.defaultProductImg}}\" alt=\"designImage\">\r\n                      <input #inputFile type=\"file\" (change)=\"addPictures($event)\"\r\n                             accept=\".jpg, .jpe, .jpeg, .bmp, .webp, .png, .gif, .svg\" style=\"display:none;\">\r\n                      <div class=\"preview-div-processing\">\r\n                        <div *ngIf=\"processingLoadFile\" class=\"spinner-wrapper\">\r\n                          <mat-spinner [diameter]=\"24\"></mat-spinner>\r\n                        </div>\r\n\r\n\r\n                        <div *ngIf=\"!processingLoadFile\" class=\"button-wrapper\">\r\n                          <button mat-mini-fab color=\"primary\" type=\"button\"\r\n                                  (click)=\"inputFile.click();\r\n                                  designForm.get('_id').disable();\r\n                                  designForm.get('structure').disable();\"\r\n                                  [disabled]=\"processingLoadFile || designForm.get('_id').invalid\">\r\n                            <mat-icon *ngIf=\"!designForm.get('image').value\">add</mat-icon>\r\n                            <mat-icon *ngIf=\"designForm.get('image').value\">redo</mat-icon>\r\n                          </button>\r\n\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n              </div>\r\n              <div class=\"submit-button-wrapper\" fxLayout=\"row\">\r\n               <div>\r\n                 <button *ngIf=\"editMode\" mat-raised-button color=\"primary\" class=\"full-width\"\r\n                         [disabled]=\"!designForm.valid || processingLoadFile\">Зберегти</button>\r\n                 <button *ngIf=\"!editMode\" mat-raised-button color=\"primary\" class=\"full-width\"\r\n                         [disabled]=\"!designForm.valid || processingLoadFile\">Створити</button>\r\n               </div>\r\n\r\n                <div fxFlex></div>\r\n                <div>\r\n                  <button mat-raised-button  type=\"button\" (click)=\"goBack()\" class=\"full-width\"\r\n                          [disabled]=\"processingLoadFile\">Повернутись</button>\r\n                </div>\r\n\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/designs-editor-form/designs-editor-form.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/dashboard/designs-editor-form/designs-editor-form.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/designs-editor-form/designs-editor-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/dashboard/designs-editor-form/designs-editor-form.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DesignsEditorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignsEditorFormComponent", function() { return DesignsEditorFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_design_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/design.service */ "./src/app/services/design.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DesignsEditorFormComponent = /** @class */ (function () {
    function DesignsEditorFormComponent(matSnackBar, route, location, productService, designService) {
        this.matSnackBar = matSnackBar;
        this.route = route;
        this.location = location;
        this.productService = productService;
        this.designService = designService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
        this.processingLoadFile = false;
        this.editMode = false;
    }
    DesignsEditorFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.designForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25),
            ]),
            structure: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ])
        });
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (paramMap) {
            _this.edited_id = paramMap.get('_id');
            if (!_this.edited_id) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(null);
            }
            return _this.designService.getDesignById(_this.edited_id);
        }))
            .subscribe(function (result) {
            if (result) {
                // this.edited_id = paramMap.get('_id');
                _this.editMode = true;
                _this.designForm.patchValue(result.data);
                _this.designForm.get('_id').disable();
            }
            else {
            }
        });
    };
    DesignsEditorFormComponent.prototype.addPictures = function (event) {
        var _this = this;
        this.processingLoadFile = true;
        var file = event.target.files[0];
        var checkFile = this.productService.checkFile(file);
        if (!checkFile.success) {
            this.matSnackBar.open(checkFile.message || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
            this.processingLoadFile = false;
            if (!this.editMode) {
                this.designForm.get('_id').enable();
            }
            this.designForm.get('structure').enable();
        }
        else {
            this.designService.designAddImage(file, this.designForm.get('_id').value)
                .subscribe(function (result) {
                _this.designForm.get('image').setValue(result.data);
                _this.processingLoadFile = false;
                if (!_this.editMode) {
                    _this.designForm.get('_id').enable();
                }
                _this.designForm.get('structure').enable();
            }, function (err) {
                _this.matSnackBar.open(err.error || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
                _this.processingLoadFile = false;
                if (!_this.editMode) {
                    _this.designForm.get('_id').enable();
                }
                _this.designForm.get('structure').enable();
            });
        }
    };
    DesignsEditorFormComponent.prototype.onDesignFormSubmit = function () {
        var _this = this;
        this.design = {
            _id: this.designForm.getRawValue()._id,
            image: this.designForm.get('image').value,
            structure: this.designForm.get('structure').value,
        };
        this.designService.designUpsert(this.design)
            .subscribe(function (result) {
            _this.matSnackBar.open(result.message, '', { duration: 3000 });
            _this.resetForm();
            if (_this.editMode) {
                _this.goBack();
            }
        }, function (err) { return _this.matSnackBar.open(err.error, '', { duration: 3000, panelClass: 'snack-bar-danger' }); });
    };
    DesignsEditorFormComponent.prototype.resetForm = function () {
        this.designFormDirective.resetForm();
    };
    DesignsEditorFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"])
    ], DesignsEditorFormComponent.prototype, "designFormDirective", void 0);
    DesignsEditorFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-designs-editor-form',
            template: __webpack_require__(/*! ./designs-editor-form.component.html */ "./src/app/components/dashboard/designs-editor-form/designs-editor-form.component.html"),
            styles: [__webpack_require__(/*! ./designs-editor-form.component.scss */ "./src/app/components/dashboard/designs-editor-form/designs-editor-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            _services_design_service__WEBPACK_IMPORTED_MODULE_7__["DesignService"]])
    ], DesignsEditorFormComponent);
    return DesignsEditorFormComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/designs-editor/designs-editor.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/designs-editor/designs-editor.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n    <!--<div class=\"item full-width-container\">-->\r\n      <!--<mat-card>-->\r\n        <!--<mat-card-header></mat-card-header>-->\r\n        <!--<mat-card-title></mat-card-title>-->\r\n\r\n        <!--<mat-card-content>-->\r\n          <div class=\"container\">\r\n            <div class=\"row\" fxLayout=\"row\">\r\n              <div class=\"cell\">\r\n                <h2 class=\"mat-h2\">Редактор дизайнів</h2>\r\n              </div>\r\n              <div class=\"cell\" fxFlex>\r\n                  <button mat-mini-fab color=\"primary\" type=\"button\"\r\n                [routerLink]=\"['/dashboard/designs_editor_new']\"\r\n                [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                <mat-icon>add</mat-icon>\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n              <!--<div class=\"cell\" fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"20\">-->\r\n                <!--<div class=\"preview-img-wrapper\">-->\r\n                  <!--<img src=\"{{-->\r\n                        <!--config.imgPath +-->\r\n                        <!--config.cloudinary.cloud_name +-->\r\n                        <!--'/c_fill,w_180,h_180,f_auto/' +-->\r\n                        <!--config.defaultProductImg}}\" alt=\"product\">-->\r\n\r\n                  <!--<div class=\"preview-div-processing\">-->\r\n                    <!--<div class=\"button-wrapper\">-->\r\n                      <!--<button mat-mini-fab color=\"primary\" type=\"button\"-->\r\n                              <!--[routerLink]=\"['/dashboard/designs_editor_new']\"-->\r\n                              <!--[routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n                        <!--<mat-icon>add</mat-icon>-->\r\n                      <!--</button>-->\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <div *ngFor=\"let design of designs\" class=\"cell\"\r\n                   fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"25\">\r\n                <app-design-item [design]=\"design\"></app-design-item>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n        <!--</mat-card-content>-->\r\n      <!--</mat-card>-->\r\n    <!--</div>-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/designs-editor/designs-editor.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/designs-editor/designs-editor.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/designs-editor/designs-editor.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/designs-editor/designs-editor.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DesignsEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignsEditorComponent", function() { return DesignsEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_design_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/design.service */ "./src/app/services/design.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DesignsEditorComponent = /** @class */ (function () {
    function DesignsEditorComponent(designService, sharedService) {
        this.designService = designService;
        this.sharedService = sharedService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
    }
    DesignsEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.designService.getDesigns()
            .subscribe(function (result) { return _this.designs = result.data; }, function (err) { return console.log('помилка завантаження дизайнів', err); });
        this.sharedService.getSharingEvent().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (event) {
            if (event[0] !== 'updateDesigns') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }
            else {
                return _this.designService.getDesigns();
            }
        }))
            .subscribe(function (result) { return _this.designs = result.data; }, function (err) { return console.log('помилка завантаження дизайнів', err); });
    };
    DesignsEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-designs-editor',
            template: __webpack_require__(/*! ./designs-editor.component.html */ "./src/app/components/dashboard/designs-editor/designs-editor.component.html"),
            styles: [__webpack_require__(/*! ./designs-editor.component.scss */ "./src/app/components/dashboard/designs-editor/designs-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_design_service__WEBPACK_IMPORTED_MODULE_1__["DesignService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], DesignsEditorComponent);
    return DesignsEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/products-editor-form/products-editor-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dashboard/products-editor-form/products-editor-form.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n    <div class=\"full-width-container\">\r\n      <mat-card  class=\"form-block\">\r\n        <mat-card-header></mat-card-header>\r\n        <mat-card-title>\r\n          <h2 *ngIf=\"editMode\" class=\"mat-h2\">Редагувати колекцію\r\n            <span class=\"accent\">{{productForm.get('name').value}}</span> у розділі\r\n            <span class=\"accent\">{{parentCategoryName}}</span></h2>\r\n          <h2 *ngIf=\"!editMode\" class=\"mat-h2\">Створити колекцію у розділі <span class=\"accent\">{{parentCategoryName}}</span></h2>\r\n        </mat-card-title>\r\n\r\n        <mat-card-content>\r\n          <div class=\"container\">\r\n            <!--<div class=\"row\">-->\r\n              <!--<div class=\"cell\">-->\r\n                <!--<p>{{parentCategory_id}} - {{parentCategoryName}}</p>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n\r\n            <form [formGroup]=\"productForm\" #f=\"ngForm\" novalidate>\r\n\r\n\r\n\r\n              <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n                    <div class=\"cell\" fxFlex=\"25\" fxFlex.lt-md=\"50\">\r\n                      <mat-form-field>\r\n                        <input matInput placeholder=\"Ідентифікатор\" formControlName=\"_id\" required>\r\n                        <mat-error\r\n                          *ngIf=\"(productForm.get('_id').errors?.minlength ||\r\n                                  productForm.get('_id').errors?.maxlength ||\r\n                                  productForm.get('_id').errors?.required) &&\r\n                                  productForm.get('_id').touched\">\r\n                          Довжина повинна бути від 3 до 25 символів\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"cell\" fxFlex=\"25\" fxFlex.lt-md=\"50\">\r\n                      <mat-form-field>\r\n                        <input matInput placeholder=\"Назва\" formControlName=\"name\" required>\r\n                        <mat-error\r\n                          *ngIf=\"(productForm.get('name').errors?.minlength ||\r\n                                  productForm.get('name').errors?.maxlength ||\r\n                                  productForm.get('name').errors?.required) &&\r\n                                  productForm.get('name').touched\">\r\n                          Довжина повинна бути від 3 до 50 символів\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"cell\" fxFlex=\"25\" fxFlex.lt-md=\"50\">\r\n                      <mat-form-field>\r\n                        <input matInput placeholder=\"Порядок\" formControlName=\"order\">\r\n                        <mat-error\r\n                          *ngIf=\"productForm.get('order').errors?.required &&\r\n                                      productForm.get('order').touched\">\r\n                          Обов'язкове поле\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n\r\n                    <div class=\"cell\" fxFlex=\"25\" fxFlex.lt-md=\"50\">\r\n                      <mat-form-field>\r\n                                        <mat-select placeholder=\"Публікувати\" formControlName=\"display\" required>\r\n                          <mat-option [value]=\"true\">\r\n                            Так\r\n                          </mat-option>\r\n                          <mat-option [value]=\"false\">\r\n                            Ні\r\n                          </mat-option>\r\n                        </mat-select>\r\n                        <mat-error\r\n                          *ngIf=\"productForm.get('display').errors?.required &&\r\n                                  productForm.get('display').touched\">\r\n                          Обов'язкове поле\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n\r\n                <!--<div class=\"cell\" fxFlex=\"25\" fxFlex.lt-md=\"50\">-->\r\n                  <!--<mat-form-field>-->\r\n                    <!--<input matInput placeholder=\"Порядок\" formControlName=\"order\" required>-->\r\n                    <!--<mat-error-->\r\n                      <!--*ngIf=\"productForm.get('order').errors?.required &&-->\r\n                                  <!--productForm.get('order').touched\">-->\r\n                      <!--Обов'язкове поле-->\r\n                    <!--</mat-error>-->\r\n                  <!--</mat-form-field>-->\r\n                <!--</div>-->\r\n              </div>\r\n\r\n              <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n                <div class=\"cell\" fxFlex=\"100\">\r\n                  <mat-form-field>\r\n                    <textarea matInput rows=\"5\" placeholder=\"Опис\" formControlName=\"description\" required></textarea>\r\n                    <mat-error\r\n                      *ngIf=\"(productForm.get('description').errors?.minlength ||\r\n                                  productForm.get('description').errors?.maxlength ||\r\n                                  productForm.get('description').errors?.required) &&\r\n                                  productForm.get('description').touched\">\r\n                      Довжина повинна бути від 3 до 500 символів\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n                <div class=\"cell-header\" fxLayout=\"row\" fxFlex=\"100\">\r\n                  <h3 class=\"mat-h3 margin-0\">Технічні характеристики\r\n                    <span>\r\n                       <button  *ngIf=\"productForm.get('techDescriptions').value.length < 5\"\r\n                                mat-icon-button color=\"accent\" type=\"button\"\r\n                                (click)=\"addTechDescriptionsControl()\"><mat-icon>add_circle</mat-icon></button>\r\n                    </span>\r\n                  </h3>\r\n\r\n                </div>\r\n\r\n                <div formArrayName=\"techDescriptions\" class=\"cell\" fxFlex=\"100\"\r\n                          *ngFor=\"let techDescription of productForm.get('techDescriptions')['controls']; let i = index\">\r\n                  <mat-card formGroupName=\"{{i}}\" fxLayout=\"row\">\r\n                    <!--<div class=\"cell\" fxFlex=\"100%-100px\" fxLayout=\"column\" fxLayout.gt-xs=\"row\" >-->\r\n                      <mat-form-field class=\"item\" fxFlex=\"calc((100%-40px)-67%)\">\r\n                        <input matInput placeholder=\"Характеристика\" formControlName=\"techName\" required>\r\n                        <mat-error\r\n                          *ngIf=\"productForm.get('techDescriptions').at(i).get('techName').errors?.required &&\r\n                                productForm.get('techDescriptions').at(i).get('techName').touched\">\r\n                          Обов'язкове поле\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                      <mat-form-field class=\"item\" fxFlex=\"calc((100%-40px)-67%)\">\r\n                        <input matInput placeholder=\"Одиниці виміру\" formControlName=\"techUnit\" required>\r\n                        <mat-error\r\n                          *ngIf=\"productForm.get('techDescriptions').at(i).get('techUnit').errors?.required &&\r\n                                productForm.get('techDescriptions').at(i).get('techUnit').touched\">\r\n                          Обов'язкове поле\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                      <mat-form-field class=\"item\" fxFlex=\"calc((100%-40px)-67%)\">\r\n                        <input matInput placeholder=\"Значення\" formControlName=\"techValue\" required>\r\n                        <mat-error\r\n                          *ngIf=\"productForm.get('techDescriptions').at(i).get('techValue').errors?.required &&\r\n                                productForm.get('techDescriptions').at(i).get('techValue').touched\">\r\n                          Обов'язкове поле\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                    <!--</div>-->\r\n\r\n                    <div class=\"item\" fxFlex=\"40px\" fxLayoutAlign=\"center center\">\r\n                      <!--<div class=\"margin-auto\">-->\r\n                        <button class=\"text-align-center\"\r\n                                mat-icon-button color=\"accent\" type=\"button\"\r\n                                (click)=\"removeTechDescriptionsControl(i)\"><mat-icon>remove_circle</mat-icon></button>\r\n                      <!--</div>-->\r\n\r\n                    </div>\r\n                  </mat-card>\r\n\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n              <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n                <div class=\"cell-header\" fxLayout=\"row\" fxFlex=\"100\">\r\n                    <h3 class=\"mat-h3 margin-0\">Рекомендації <span>\r\n                       <button  *ngIf=\"productForm.get('recommendations').value.length < 80\"\r\n                                mat-icon-button color=\"accent\" type=\"button\"\r\n                                (click)=\"addRecommendationsControl()\"><mat-icon>add_circle</mat-icon></button>\r\n                    </span></h3>\r\n\r\n                </div>\r\n                <div formArrayName=\"recommendations\" class=\"cell\" fxFlex=\"25\" fxFlex.lt-md=\"50\"\r\n                  *ngFor=\"let recommendation of productForm.get('recommendations')['controls']; let i = index\">\r\n                  <mat-form-field>\r\n\r\n                    <mat-select formControlName=\"{{i}}\" placeholder=\"Рекомендації\">\r\n                      <!--<mat-option *ngFor=\"let recommendation of recommendations\" [value]=\"recommendation\">-->\r\n                        <!--{{recommendation._id}}-->\r\n                      <!--</mat-option>-->\r\n\r\n                      <mat-optgroup *ngFor=\"let recommendation of recommendations\" [label]=\"recommendation._id\"\r\n                                    [disabled]>\r\n                        <mat-option *ngFor=\"let sub of recommendation.sub\" [value]=\"sub._id\">\r\n                          {{sub.name}}\r\n                        </mat-option>\r\n                      </mat-optgroup>\r\n                    </mat-select>\r\n                    <mat-icon matSuffix color=\"accent\" (click)=\"removeRecommendationsControl(i)\">delete_forever</mat-icon>\r\n                    <mat-error\r\n                      *ngIf=\"productForm.get('recommendations').at(i).errors?.required &&\r\n                                  productForm.get('recommendations').at(i).touched\">\r\n                      Обов'язкове поле\r\n                    </mat-error>\r\n\r\n                    <!--<input matInput placeholder=\"Рекомендації\" formControlName=\"{{i}}\" required>-->\r\n                    <!--<mat-icon matSuffix color=\"accent\" (click)=\"removeRecommendationsControl(i)\">delete_forever</mat-icon>-->\r\n                    <!--<mat-error-->\r\n                      <!--*ngIf=\"productForm.get('recommendations').at(i).errors?.required &&-->\r\n                                  <!--productForm.get('recommendations').at(i).touched\">-->\r\n                      <!--Обов'язкове поле-->\r\n                    <!--</mat-error>-->\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n              <div class=\"cell-header\" fxLayout=\"row\" fxFlex=\"100\">\r\n                <h3 class=\"mat-h3 margin-0\">Головне зображення колекції</h3>\r\n              </div>\r\n              <div class=\"cell\" fxFlex.xs=\"100\" fxFlex=\"25\">\r\n                <div class=\"preview-img-wrapper\" >\r\n                  <img *ngIf=\"productForm.get('mainImage').value\" src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                       '/c_fill,w_260,h_170,f_auto/' + productForm.get('mainImage').value}}\"\r\n                       alt=\"Main Image\">\r\n\r\n\r\n\r\n                  <img *ngIf=\"!productForm.get('mainImage').value\"\r\n                       src=\"{{\r\n                       config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                       '/c_fill,w_180,h_180,f_auto/'+\r\n                       config.defaultProductImg}}\" alt=\"Main Image\">\r\n                  <input #inputMainImage type=\"file\" (change)=\"addMainImage($event)\"\r\n                         accept=\".jpg, .jpe, .jpeg, .bmp, .webp, .png, .gif, .svg\" style=\"display:none;\">\r\n                  <div class=\"preview-div-processing\">\r\n                    <div *ngIf=\"processingLoadImage\" class=\"spinner-wrapper\">\r\n                      <mat-spinner [diameter]=\"24\"></mat-spinner>\r\n                    </div>\r\n\r\n\r\n                    <div *ngIf=\"!processingLoadImage\" class=\"button-wrapper\">\r\n                      <button mat-mini-fab color=\"primary\" type=\"button\"\r\n                              (click)=\"inputMainImage.click();\"\r\n                              [disabled]=\"processingLoadImage\">\r\n                        <mat-icon *ngIf=\"!productForm.get('mainImage').value && !processingLoadImage\">add</mat-icon>\r\n                        <mat-icon *ngIf=\"productForm.get('mainImage').value && !processingLoadImage\">redo</mat-icon>\r\n                      </button>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n\r\n              <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n                <div class=\"cell-header\" fxLayout=\"row\" fxFlex=\"100\">\r\n                  <h3 class=\"mat-h3 margin-0\">Зображення колекції в меню</h3>\r\n                </div>\r\n                <div class=\"cell\" fxFlex=\"25\" fxFlex.xs=\"100\">\r\n                  <div class=\"preview-img-wrapper\" >\r\n                    <img *ngIf=\"productForm.get('briefImage').value\" src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                       '/c_fill,w_180,h_180,f_auto/' + productForm.get('briefImage').value}}\"\r\n                         alt=\"Main Image\">\r\n                    <img *ngIf=\"!productForm.get('briefImage').value\"\r\n                         src=\"{{\r\n                       config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                       '/c_fill,w_180,h_180,f_auto/'+\r\n                       config.defaultProductImg}}\" alt=\"Main Image\">\r\n                    <input #inputBriefImage type=\"file\" (change)=\"addBriefImage($event)\"\r\n                           accept=\".jpg, .jpe, .jpeg, .bmp, .webp, .png, .gif, .svg\" style=\"display:none;\">\r\n                    <div class=\"preview-div-processing\">\r\n                      <div *ngIf=\"processingLoadBriefImage\" class=\"spinner-wrapper\">\r\n                        <mat-spinner [diameter]=\"24\"></mat-spinner>\r\n                      </div>\r\n\r\n\r\n                      <div *ngIf=\"!processingLoadBriefImage\" class=\"button-wrapper\">\r\n                        <button mat-mini-fab color=\"primary\" type=\"button\"\r\n                                (click)=\"inputBriefImage.click();\"\r\n                                [disabled]=\"processingLoadImage\">\r\n                          <mat-icon *ngIf=\"!productForm.get('briefImage').value && !processingLoadBriefImage\">add</mat-icon>\r\n                          <mat-icon *ngIf=\"productForm.get('briefImage').value && !processingLoadBriefImage\">redo</mat-icon>\r\n                        </button>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n\r\n              <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n                <div class=\"cell-header\" fxLayout=\"row\" fxFlex=\"100\">\r\n                    <h3 class=\"mat-h3 margin-0\">Додаткові зображення колекції</h3>\r\n                  </div>\r\n                  <div formArrayName=\"assets\" class=\"cell\" fxFlex=\"25\" fxFlex.xs=\"100\"\r\n                       *ngFor=\"let asset of productForm.get('assets')['controls']; let i = index\">\r\n                  <div *ngIf=\"productForm.get('assets').value[i]\" class=\"preview-img-wrapper\">\r\n                    <img src=\"{{config.imgPath + config.cloudinary.cloud_name + '/c_fill,w_260,h_170,f_auto/' + productForm.get('assets').value[i]}}\"\r\n                         alt=\"productImage\">\r\n                    <div *ngIf=\"processingLoadAssets === i\" class=\"preview-div-processing\">\r\n                      <div class=\"spinner-wrapper\">\r\n                        <mat-spinner [diameter]=\"24\"></mat-spinner>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                    <p *ngIf=\"processingLoadAssets !== i\" class=\"remove-field text-center\"\r\n                       (click)=\"removeAssetsControl(i)\">Видалити зображення</p>\r\n                  </div>\r\n\r\n                  <div class=\"cell\" fxFlex=\"25\" fxFlex.sm=\"50\" fxFlex.xs=\"100\"\r\n                       *ngIf=\"productForm.get('assets').value.length < 12\">\r\n                    <div class=\"preview-img-wrapper\">\r\n                      <img src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_180,h_180,f_auto/' +\r\n                        config.defaultProductImg}}\" alt=\"product\">\r\n                      <input #inputFile type=\"file\" (change)=\"addAssets($event)\"\r\n                             accept=\".jpg, .jpe, .jpeg, .bmp, .webp, .png, .gif, .svg\" style=\"display:none;\">\r\n\r\n                      <div class=\"preview-div-processing\">\r\n                        <div class=\"button-wrapper\">\r\n                          <button mat-mini-fab color=\"primary\" type=\"button\"\r\n                                  (click)=\"inputFile.click();\"\r\n                                  [disabled]=\"processingLoadAssets >= 0\">\r\n                            <mat-icon>add</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n                <div class=\"cell-header\" fxFlex=\"100\">\r\n                  <h3 class=\"mat-h3 margin-0\">Технічні властивості</h3>\r\n                </div>\r\n                <div class=\"cell\" fxFlex.xs=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\">\r\n                  <div class=\"item\" fxFlex=\"calc(100%-40px)\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Додати характеристику\" formControlName=\"tech\" [matAutocomplete]=\"autoTech\">\r\n                      <mat-autocomplete #autoTech=\"matAutocomplete\">\r\n                        <mat-option *ngFor=\"let filteredTechAsset of filteredTechAssets | async\" (click)=\"onSelectTechAssets()\" [value]=\"filteredTechAsset\">\r\n                          {{filteredTechAsset}}\r\n                        </mat-option>\r\n                      </mat-autocomplete>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"item\" fxLayoutAlign=\"center center\" fxFlex=\"40px\">\r\n                    <button #addTechAssetsButton [disabled]=\"!techAssetValidity\" mat-icon-button color=\"accent\" type=\"button\"\r\n                            (click)=\"addTechAsset()\"><mat-icon>add_circle</mat-icon></button>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"cell\" fxHide.xs fxFlex.gt-xs=\"50\" fxLayout=\"row\"></div>\r\n                  <div formArrayName=\"techAssets\" class=\"cell\" fxFlex=\"25\" fxFlex.sm=\"50\" fxFlex.xs=\"100\"\r\n                       *ngFor=\"let tech of productForm.get('techAssets')['controls']; let i = index\">\r\n                    <h4 *ngIf=\"productForm.get('techAssets').value[i]\"\r\n                        class=\"mat-h4 text-center\">{{productForm.get('techAssets').value[i]}}</h4>\r\n                    <div *ngIf=\"productForm.get('techAssets').value[i] && techAssets &&\r\n                          getTechAsset(productForm.get('techAssets').value[i])\" class=\"preview-img-wrapper\">\r\n                      <img alt=\"techAssetsImage\" src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                      '/c_fill,w_180,h_180,f_auto/' +\r\n                      getTechAsset(productForm.get('techAssets').value[i]).image}}\">\r\n                    </div>\r\n\r\n                    <p class=\"remove-field text-center\"\r\n                       (click)=\"removeTechAssetsControl(i)\">Видалити зображення</p>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n                <div class=\"cell-header\" fxFlex=\"100\">\r\n                  <h3 class=\"mat-h3 margin-0\">Сертифікати</h3>\r\n                </div>\r\n                <div class=\"cell\" fxFlex.xs=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\">\r\n                  <div class=\"item\" fxFlex=\"calc(100%-40px)\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Додати сертифікат\" formControlName=\"cert\" [matAutocomplete]=\"autoCert\">\r\n                      <mat-autocomplete #autoCert=\"matAutocomplete\">\r\n                        <mat-option *ngFor=\"let filteredCertAsset of filteredCertAssets | async\" (click)=\"onSelectCertAssets()\" [value]=\"filteredCertAsset\">\r\n                          {{filteredCertAsset}}\r\n                        </mat-option>\r\n                      </mat-autocomplete>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"item\" fxLayoutAlign=\"center center\" fxFlex=\"40px\">\r\n                    <button #addCertAssetsButton [disabled]=\"!certAssetValidity\" mat-icon-button color=\"accent\" type=\"button\"\r\n                            (click)=\"addCertAsset()\"><mat-icon>add_circle</mat-icon></button>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"cell\" fxHide.xs fxFlex.gt-xs=\"50\" fxLayout=\"row\"></div>\r\n                <div formArrayName=\"certAssets\" class=\"cell\" fxFlex=\"25\" fxFlex.sm=\"50\" fxFlex.xs=\"100\"\r\n                     *ngFor=\"let cert of productForm.get('certAssets')['controls']; let i = index\">\r\n                  <h4 *ngIf=\"productForm.get('certAssets').value[i]\"\r\n                      class=\"mat-h4 text-center\">{{productForm.get('certAssets').value[i]}}</h4>\r\n                  <div *ngIf=\"productForm.get('certAssets').value[i] && certAssets &&\r\n                          getCertAsset(productForm.get('certAssets').value[i])\" class=\"preview-img-wrapper\">\r\n                    <img alt=\"certAssetsImage\" src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                      '/c_fill,w_180,h_180,f_auto/' +\r\n                      getCertAsset(productForm.get('certAssets').value[i]).image}}\">\r\n                  </div>\r\n\r\n                  <p class=\"remove-field text-center\"\r\n                     (click)=\"removeCertAssetsControl(i)\">Видалити зображення</p>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n\r\n              <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n                <div class=\"cell-header\" fxFlex=\"100\">\r\n                  <h3 class=\"mat-h3 margin-0\">Дизайни</h3>\r\n                </div>\r\n                <div class=\"cell\" fxFlex.xs=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\">\r\n                  <div class=\"item\" fxFlex=\"calc(100%-40px)\">\r\n                    <mat-form-field >\r\n                      <input type=\"text\" matInput placeholder=\"Додати дизайн\" formControlName=\"des\" [matAutocomplete]=\"auto\">\r\n                      <mat-autocomplete #auto=\"matAutocomplete\">\r\n                        <mat-option *ngFor=\"let filteredDesign of filteredDesigns | async\" (click)=\"onSelectDesign()\" [value]=\"filteredDesign\">\r\n                          {{filteredDesign}}\r\n                        </mat-option>\r\n                      </mat-autocomplete>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"item\" fxLayoutAlign=\"center center\" fxFlex=\"40px\">\r\n                    <button #addDesignButton [disabled]=\"!designValidity\" mat-icon-button color=\"accent\" type=\"button\"\r\n                            (click)=\"addDesign()\"><mat-icon>add_circle</mat-icon></button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"cell\" fxHide.xs fxFlex.gt-xs=\"50\" fxLayout=\"row\"></div>\r\n\r\n                <div formArrayName=\"designs\" class=\"cell\" fxFlex=\"25\" fxFlex.sm=\"50\" fxFlex.xs=\"100\"\r\n                     *ngFor=\"let des of productForm.get('designs')['controls']; let i = index\">\r\n                  <h4 *ngIf=\"productForm.get('designs').value[i]\"\r\n                      class=\"mat-h4 text-center\">{{productForm.get('designs').value[i]}}</h4>\r\n                  <div *ngIf=\"productForm.get('designs').value[i] && designs\" class=\"preview-img-wrapper\">\r\n                    <img alt=\"designImage\" src=\"{{\r\n                    config.imgPath +\r\n                    config.cloudinary.cloud_name +\r\n                    '/c_fill,w_180,h_180,f_auto/' +\r\n                    getDesign(productForm.get('designs').value[i]).image}}\">\r\n                  </div>\r\n\r\n                  <p class=\"remove-field text-center\"\r\n                     (click)=\"removeDesignsControl(i)\">Видалити зображення</p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"submit-button-wrapper row\" fxLayout=\"row\">\r\n                <div class=\"cell\" fxFlex=\"40\">\r\n\r\n                  <button *ngIf=\"editMode\" mat-raised-button color=\"primary\" class=\"full-width\" type=\"button\" (click)=\"onProductFormSubmit(false)\"\r\n                          [disabled]=\"!productForm.valid || processingLoadAssets >=0 || processingLoadTechAssets >= 0 || processingLoadImage\">\r\n                    Зберегти</button>\r\n                  <button *ngIf=\"!editMode\" mat-raised-button color=\"primary\" class=\"full-width\" type=\"button\" (click)=\"onProductFormSubmit(false)\"\r\n                          [disabled]=\"!productForm.valid || processingLoadAssets >=0 || processingLoadTechAssets >= 0 || processingLoadImage\">\r\n                    Зберегти</button>\r\n                </div>\r\n                <div class=\"cell\" fxFlex=\"40\">\r\n\r\n                  <button *ngIf=\"editMode\" mat-raised-button color=\"primary\" class=\"full-width\" type=\"button\" (click)=\"onProductFormSubmit(true)\"\r\n                            [disabled]=\"!productForm.valid || processingLoadAssets >=0 || processingLoadTechAssets >= 0 || processingLoadImage\">\r\n                    Зберегти і повернутись</button>\r\n                  <button *ngIf=\"!editMode\" mat-raised-button color=\"primary\" class=\"full-width\" type=\"button\" (click)=\"onProductFormSubmit(true)\"\r\n                          [disabled]=\"!productForm.valid || processingLoadAssets >=0 || processingLoadTechAssets >= 0 || processingLoadImage\">\r\n                    Створити і повернутись</button>\r\n                </div>\r\n\r\n                <div class=\"cell\" fxFlex=\"20\">\r\n                  <button mat-raised-button  type=\"button\" (click)=\"goBack()\" class=\"full-width\"\r\n                          [disabled]=\"processingLoadAssets >=0 || processingLoadTechAssets >= 0\r\n                          || processingLoadTechAssets >= 0 || processingLoadImage\">Повернутись</button>\r\n                </div>\r\n\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  <!--</div>-->\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/products-editor-form/products-editor-form.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dashboard/products-editor-form/products-editor-form.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/products-editor-form/products-editor-form.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/dashboard/products-editor-form/products-editor-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProductsEditorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsEditorFormComponent", function() { return ProductsEditorFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_design_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/design.service */ "./src/app/services/design.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProductsEditorFormComponent = /** @class */ (function () {
    function ProductsEditorFormComponent(matSnackBar, route, location, productService, designService) {
        this.matSnackBar = matSnackBar;
        this.route = route;
        this.location = location;
        this.productService = productService;
        this.designService = designService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
        this.processingLoadAssets = -1;
        this.processingLoadTechAssets = -1;
        this.processingLoadCertAssets = -1;
        this.processingLoadImage = false;
        this.processingLoadBriefImage = false;
        this.editMode = false;
        this.designs_id = [];
        this.techAssets_id = [];
        this.techAssetValidity = false;
        this.certAssets_id = [];
        this.certAssetValidity = false;
        this.designValidity = false;
    }
    ProductsEditorFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(25),
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50),
            ]),
            // parent: new FormControl('', [
            //   // Validators.required,
            // ]),
            display: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ]),
            order: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ]),
            mainImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ]),
            briefImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ]),
            assets: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]),
            techAssets: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]),
            tech: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', []),
            certAssets: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]),
            cert: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', []),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(2500),
            ]),
            recommendations: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]),
            designs: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]),
            des: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', []),
            techDescriptions: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]),
        });
        this.productService.getRecommendations().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (result) {
            _this.recommendations = result.data;
            return _this.route.paramMap;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (paramMap) {
            _this.edited_id = paramMap.get('_id');
            _this.parentCategory_id = paramMap.get('parentCategory_id');
            _this.parentCategoryName = paramMap.get('parentCategoryName');
            if (!_this.edited_id) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(null);
            }
            return _this.productService.getProductById(_this.edited_id, false);
        }))
            .subscribe(function (result) {
            if (result) {
                _this.editMode = true;
                _this.parentCategories = result.parent;
                for (var i = 0; i < result.data.designs.length; i++) {
                    _this.addDesignsControl();
                }
                for (var i = 0; i < result.data.recommendations.length; i++) {
                    _this.addRecommendationsControl();
                }
                for (var i = 0; i < result.data.assets.length; i++) {
                    _this.addAssetsControl();
                }
                for (var i = 0; i < result.data.techAssets.length; i++) {
                    _this.addTechAssetsControl();
                }
                for (var i = 0; i < result.data.certAssets.length; i++) {
                    _this.addCertAssetsControl();
                }
                for (var i = 0; i < result.data.techDescriptions.length; i++) {
                    _this.addTechDescriptionsControl();
                }
                _this.productForm.patchValue(result.data);
                _this.productForm.get('_id').disable();
            }
            else {
                _this.parentCategories = [_this.parentCategory_id];
            }
        }, function (err) { return console.log('Помилка', err); });
        this.productService.getTechAssets()
            .subscribe(function (result) {
            _this.techAssets = result.data;
            _this.techAssets.map(function (techAsset) { return _this.techAssets_id.push(techAsset._id); });
        }, function (err) { return console.log('Помилка завантеження тех властивостей', err); });
        this.productService.getCertAssets()
            .subscribe(function (result) {
            _this.certAssets = result.data;
            _this.certAssets.map(function (certAsset) { return _this.certAssets_id.push(certAsset._id); });
        }, function (err) { return console.log('Помилка завантеження сертифікатів', err); });
        this.designService.getDesigns()
            .subscribe(function (result) {
            _this.designs = result.data;
            _this.designs.map(function (design) { return _this.designs_id.push(design._id); });
        }, function (err) { return console.log('Помилка завантеження дизайнів', err); });
        this.filteredTechAssets = this.productForm.get('tech').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (value) { return _this.techAssetValidity = _this._checkTechAssetValidity(value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (value) { return _this._filterTechAssets(value); }));
        this.filteredCertAssets = this.productForm.get('cert').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (value) { return _this.certAssetValidity = _this._checkCertAssetValidity(value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (value) { return _this._filterCertAssets(value); }));
        this.filteredDesigns = this.productForm.get('des').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (value) { return _this.designValidity = _this._checkDesignValidity(value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (value) { return _this._filter(value); }));
    };
    ProductsEditorFormComponent.prototype._filterTechAssets = function (filterValue) {
        var techAssetsForm = this.productForm.get('techAssets').value;
        return this.techAssets_id
            .filter(function (option) { return techAssetsForm.indexOf(option) === -1; }) // remove designs, which already in form
            .filter(function (option) { return option.indexOf(filterValue) === 0; }); // filter by input value
    };
    ProductsEditorFormComponent.prototype._checkTechAssetValidity = function (value) {
        return this.techAssets_id.indexOf(value) !== -1;
    };
    ProductsEditorFormComponent.prototype._filterCertAssets = function (filterValue) {
        var certAssetsForm = this.productForm.get('certAssets').value;
        return this.certAssets_id
            .filter(function (option) { return certAssetsForm.indexOf(option) === -1; }) // remove designs, which already in form
            .filter(function (option) { return option.indexOf(filterValue) === 0; }); // filter by input value
    };
    ProductsEditorFormComponent.prototype._checkCertAssetValidity = function (value) {
        return this.certAssets_id.indexOf(value) !== -1;
    };
    ProductsEditorFormComponent.prototype._filter = function (filterValue) {
        var designsFromForm = this.productForm.get('designs').value;
        return this.designs_id
            .filter(function (option) { return designsFromForm.indexOf(option) === -1; }) // remove designs, which already in form
            .filter(function (option) { return option.indexOf(filterValue) === 0; }); // filter by input value
    };
    ProductsEditorFormComponent.prototype._checkDesignValidity = function (value) {
        return this.designs_id.indexOf(value) !== -1;
    };
    // takes design object (from local designs array) by design_id
    ProductsEditorFormComponent.prototype.getDesign = function (_id) {
        return this.designs.filter(function (design) { return design._id === _id; })[0];
    };
    ProductsEditorFormComponent.prototype.getTechAsset = function (_id) {
        return this.techAssets.filter(function (techAsset) { return techAsset._id === _id; })[0];
    };
    ProductsEditorFormComponent.prototype.getCertAsset = function (_id) {
        return this.certAssets.filter(function (certAsset) { return certAsset._id === _id; })[0];
    };
    // getDesignByImage(image) {
    //   return this.designs.filter(design => design.image === image)[0];
    // }
    ProductsEditorFormComponent.prototype.addTechAsset = function () {
        if (this._checkTechAssetValidity(this.productForm.get('tech').value)) {
            var techAssetsList = this.productForm.get('techAssets').value || [];
            techAssetsList.push(this.productForm.get('tech').value);
            this.addTechAssetsControl();
            this.productForm.get('techAssets').setValue(techAssetsList);
            this.productForm.get('tech').reset();
        }
        else {
            console.log('add design false');
        }
    };
    ProductsEditorFormComponent.prototype.addCertAsset = function () {
        if (this._checkCertAssetValidity(this.productForm.get('cert').value)) {
            var certAssetsList = this.productForm.get('certAssets').value || [];
            certAssetsList.push(this.productForm.get('cert').value);
            this.addCertAssetsControl();
            this.productForm.get('certAssets').setValue(certAssetsList);
            this.productForm.get('cert').reset();
        }
        else {
            console.log('add design false');
        }
    };
    ProductsEditorFormComponent.prototype.addDesign = function () {
        if (this._checkDesignValidity(this.productForm.get('des').value)) {
            var designsList = this.productForm.get('designs').value || [];
            designsList.push(this.productForm.get('des').value);
            this.addDesignsControl();
            this.productForm.get('designs').setValue(designsList);
            this.productForm.get('des').reset();
        }
        else {
            console.log('add design false');
        }
    };
    ProductsEditorFormComponent.prototype.addMainImage = function (event) {
        var _this = this;
        this.processingLoadImage = true;
        var file = event.target.files[0];
        var checkFile = this.productService.checkFile(file);
        if (!checkFile.success) {
            this.matSnackBar.open(checkFile.message || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
            this.processingLoadImage = false;
            // if (!this.editMode) {
            //   this.productForm.get('_id').enable();
            // }
            // this.designForm.get('structure').enable();
        }
        else {
            // this.designForm.get('image').setValue(file);
            console.log('added file', this.productForm.get('mainImage').value);
            this.productService.productAddMainImage(file, this.productForm.get('_id').value)
                .subscribe(function (result) {
                _this.productForm.get('mainImage').setValue(result.data);
                _this.processingLoadImage = false;
                // if (!this.editMode) {
                //   this.designForm.get('_id').enable();
                // }
                // this.designForm.get('structure').enable();
            }, function (err) {
                _this.matSnackBar.open(err.error || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
                _this.processingLoadImage = false;
                // if (!this.editMode) {
                //   this.designForm.get('_id').enable();
                // }
                // this.designForm.get('structure').enable();
            });
        }
    };
    ProductsEditorFormComponent.prototype.addBriefImage = function (event) {
        var _this = this;
        this.processingLoadBriefImage = true;
        var file = event.target.files[0];
        var checkFile = this.productService.checkFile(file);
        if (!checkFile.success) {
            this.matSnackBar.open(checkFile.message || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
            this.processingLoadBriefImage = false;
        }
        else {
            this.productService.productAddBriefImage(file, this.productForm.get('_id').value)
                .subscribe(function (result) {
                _this.productForm.get('briefImage').setValue(result.data);
                _this.processingLoadBriefImage = false;
            }, function (err) {
                _this.matSnackBar.open(err.error || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
                _this.processingLoadBriefImage = false;
            });
        }
    };
    ProductsEditorFormComponent.prototype.addAssets = function (event) {
        var _this = this;
        this.processingLoadAssets = this.productForm.get('assets').value.length;
        var file = event.target.files[0];
        var checkFile = this.productService.checkFile(file);
        if (!checkFile.success) {
            this.matSnackBar.open(checkFile.message || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
            this.processingLoadAssets = -1;
        }
        else {
            var filesLinks_1 = this.productForm.get('assets').value;
            filesLinks_1.push(_app_config__WEBPACK_IMPORTED_MODULE_5__["config"].defaultProductImg);
            this.addAssetsControl();
            this.productForm.get('assets').setValue(filesLinks_1);
            this.productService.productAddAssets(file, this.productForm.get('_id').value)
                .subscribe(function (result) {
                filesLinks_1.pop();
                filesLinks_1.push(result.data);
                _this.productForm.get('assets').setValue(filesLinks_1);
                _this.processingLoadAssets = -1;
            }, function (err) {
                _this.matSnackBar.open(err.error || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
                _this.removeAssetsControl(_this.productForm.get('assets').value.length - 1);
                filesLinks_1.pop();
                _this.processingLoadAssets = -1;
            });
        }
    };
    ProductsEditorFormComponent.prototype.addTechAssets = function (event) {
        var _this = this;
        this.processingLoadTechAssets = this.productForm.get('techAssets').value.length;
        var file = event.target.files[0];
        var checkFile = this.productService.checkFile(file);
        if (!checkFile.success) {
            this.matSnackBar.open(checkFile.message || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
            this.processingLoadTechAssets = -1;
        }
        else {
            var filesLinks_2 = this.productForm.get('techAssets').value;
            filesLinks_2.push(_app_config__WEBPACK_IMPORTED_MODULE_5__["config"].defaultProductImg);
            this.addTechAssetsControl();
            this.productForm.get('techAssets').setValue(filesLinks_2);
            this.productService.productAddTechAssets(file, this.productForm.get('_id').value)
                .subscribe(function (result) {
                filesLinks_2.pop();
                filesLinks_2.push(result.data);
                _this.productForm.get('techAssets').setValue(filesLinks_2);
                _this.processingLoadTechAssets = -1;
            }, function (err) {
                _this.matSnackBar.open(err.error || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
                _this.removeAssetsControl(_this.productForm.get('techAssets').value.length - 1);
                filesLinks_2.pop();
                _this.processingLoadTechAssets = -1;
            });
        }
    };
    ProductsEditorFormComponent.prototype.onProductFormSubmit = function (goBack) {
        var _this = this;
        var sortedDesigns = this.productForm.get('designs').value.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            return 0;
        });
        console.log('this.productForm.get(\'recommendations\').value', this.productForm.get('recommendations').value);
        this.product = {
            _id: this.productForm.getRawValue()._id,
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
            .subscribe(function (result) {
            _this.matSnackBar.open(result.message, '', { duration: 3000 });
            if (goBack) {
                _this.resetForm();
                _this.goBack();
            }
        }, function (err) { return _this.matSnackBar.open(err.error, '', { duration: 3000, panelClass: 'snack-bar-danger' }); });
    };
    ProductsEditorFormComponent.prototype.resetForm = function () {
        this.productFormDirective.resetForm();
    };
    ProductsEditorFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductsEditorFormComponent.prototype.onSelectDesign = function () {
        this.addDesignButtonDirective.focus();
    };
    ProductsEditorFormComponent.prototype.onSelectTechAssets = function () {
        this.addTechAssetsButtonDirective.focus();
    };
    ProductsEditorFormComponent.prototype.onSelectCertAssets = function () {
        this.addCertAssetsButtonDirective.focus();
    };
    ProductsEditorFormComponent.prototype.addAssetsControl = function () {
        var control = this.productForm.get('assets');
        control.push(this.initAssetsControl());
    };
    ProductsEditorFormComponent.prototype.removeAssetsControl = function (i) {
        var control = this.productForm.get('assets');
        control.removeAt(i);
    };
    ProductsEditorFormComponent.prototype.initAssetsControl = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
        ]);
    };
    ProductsEditorFormComponent.prototype.addTechAssetsControl = function () {
        var control = this.productForm.get('techAssets');
        control.push(this.initTechAssetsControl());
    };
    ProductsEditorFormComponent.prototype.removeTechAssetsControl = function (i) {
        var control = this.productForm.get('techAssets');
        control.removeAt(i);
    };
    ProductsEditorFormComponent.prototype.initTechAssetsControl = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
        ]);
    };
    ProductsEditorFormComponent.prototype.addCertAssetsControl = function () {
        var control = this.productForm.get('certAssets');
        control.push(this.initCertAssetsControl());
    };
    ProductsEditorFormComponent.prototype.removeCertAssetsControl = function (i) {
        var control = this.productForm.get('certAssets');
        control.removeAt(i);
    };
    ProductsEditorFormComponent.prototype.initCertAssetsControl = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
        ]);
    };
    ProductsEditorFormComponent.prototype.addRecommendationsControl = function () {
        var control = this.productForm.get('recommendations');
        control.push(this.initRecommendationsControl());
    };
    ProductsEditorFormComponent.prototype.removeRecommendationsControl = function (i) {
        var control = this.productForm.get('recommendations');
        control.removeAt(i);
    };
    ProductsEditorFormComponent.prototype.initRecommendationsControl = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
        ]);
    };
    ProductsEditorFormComponent.prototype.addDesignsControl = function () {
        var control = this.productForm.get('designs');
        control.push(this.initDesignsControl());
    };
    ProductsEditorFormComponent.prototype.removeDesignsControl = function (i) {
        var control = this.productForm.get('designs');
        control.removeAt(i);
    };
    ProductsEditorFormComponent.prototype.initDesignsControl = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
        ]);
    };
    ProductsEditorFormComponent.prototype.addTechDescriptionsControl = function () {
        var control = this.productForm.get('techDescriptions');
        control.push(this.initTechDescriptionsControl());
    };
    ProductsEditorFormComponent.prototype.removeTechDescriptionsControl = function (i) {
        var control = this.productForm.get('techDescriptions');
        control.removeAt(i);
    };
    ProductsEditorFormComponent.prototype.initTechDescriptionsControl = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            techName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ]),
            techUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ]),
            techValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ]),
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"])
    ], ProductsEditorFormComponent.prototype, "productFormDirective", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addDesignButton'),
        __metadata("design:type", Object)
    ], ProductsEditorFormComponent.prototype, "addDesignButtonDirective", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addTechAssetsButton'),
        __metadata("design:type", Object)
    ], ProductsEditorFormComponent.prototype, "addTechAssetsButtonDirective", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addCertAssetsButton'),
        __metadata("design:type", Object)
    ], ProductsEditorFormComponent.prototype, "addCertAssetsButtonDirective", void 0);
    ProductsEditorFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-editor-form',
            template: __webpack_require__(/*! ./products-editor-form.component.html */ "./src/app/components/dashboard/products-editor-form/products-editor-form.component.html"),
            styles: [__webpack_require__(/*! ./products-editor-form.component.scss */ "./src/app/components/dashboard/products-editor-form/products-editor-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            _services_design_service__WEBPACK_IMPORTED_MODULE_7__["DesignService"]])
    ], ProductsEditorFormComponent);
    return ProductsEditorFormComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/products-editor/products-editor.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/products-editor/products-editor.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n    <!--<div class=\"item full-width-container\">-->\r\n    <!--<mat-card>-->\r\n    <!--<mat-card-header></mat-card-header>-->\r\n    <!--<mat-card-title></mat-card-title>-->\r\n\r\n    <!--<mat-card-content>-->\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"cell\">\r\n          <h2 class=\"mat-h2\">Редактор колекцій</h2>\r\n        </div>\r\n      </div>\r\n      <form [formGroup]=\"catalogForm\" #f=\"ngForm\" (submit)=\"onCatalogFormSubmit()\">\r\n        <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n          <div formArrayName=\"categories\" class=\"cell\" fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"25\"\r\n               *ngFor=\"let categoryBlock of catalogForm.get('categories')['controls']; let i = index\">\r\n\r\n                <mat-select placeholder=\"Виберіть категорію\" formControlName=\"{{i}}\" required\r\n                            (selectionChange)=\"onSelectCategory($event, i)\">\r\n                  <mat-option *ngFor=\"let descendant of descendants[i]\" [value]=\"descendant._id\">\r\n                    {{descendant.name}}\r\n                  </mat-option>\r\n            </mat-select>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n        <!--<div class=\"cell\">-->\r\n\r\n          <!--<a mat-icon-button-->\r\n             <!--[routerLink]=\"['/dashboard/designs_editor_new']\"-->\r\n             <!--[routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n            <!--<mat-icon>add_circle</mat-icon>-->\r\n          <!--</a>-->\r\n        <!--</div>-->\r\n\r\n\r\n      <div *ngIf=\"noMoreDescendants\" class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n        <div class=\"cell\" fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"20\">\r\n          <div class=\"preview-img-wrapper\">\r\n            <img src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_180,h_180,f_auto/' +\r\n                        config.defaultProductImg}}\" alt=\"product\">\r\n            <div class=\"preview-div-processing\">\r\n              <div class=\"button-wrapper\">\r\n                <!--<a mat-icon-button-->\r\n                <!--[routerLink]=\"['/dashboard/designs_editor_new']\"-->\r\n                <!--[routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n                <button mat-mini-fab color=\"primary\" type=\"button\"\r\n                        [routerLink]=\"['/dashboard', 'products_editor_new', parentCategory_id, parentCategoryName]\"\r\n                        [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                  <mat-icon>add</mat-icon>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngFor=\"let product of products\"  class=\"cell\" fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"20\">\r\n          <app-product-item-brief [product]=\"product\" [parentCategory_id]=\"parentCategory_id\" [parentCategoryName]=\"parentCategoryName\"></app-product-item-brief>\r\n        </div>\r\n\r\n      </div>\r\n\r\n        <!--<div class=\"cell\"-->\r\n        <!--fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"25\">-->\r\n        <!--<mat-card>-->\r\n        <!--<mat-card-content>-->\r\n        <!---->\r\n        <!--</mat-card-content>-->\r\n        <!--</mat-card>-->\r\n        <!--</div>-->\r\n\r\n\r\n        <!--<div *ngFor=\"let design of designs\" class=\"cell\"-->\r\n             <!--fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"25\">-->\r\n          <!--<app-design-item [design]=\"design\"></app-design-item>-->\r\n\r\n        <!--</div>-->\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <!--</mat-card-content>-->\r\n    <!--</mat-card>-->\r\n    <!--</div>-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/products-editor/products-editor.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/products-editor/products-editor.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/products-editor/products-editor.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/products-editor/products-editor.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductsEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsEditorComponent", function() { return ProductsEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsEditorComponent = /** @class */ (function () {
    function ProductsEditorComponent(catalogService, sharedService, productService) {
        this.catalogService = catalogService;
        this.sharedService = sharedService;
        this.productService = productService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
        this.noMoreDescendants = false;
    }
    ProductsEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.descendants = [];
        this.catalogForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            categories: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([this.initCategories()]),
        });
        this.catalogService.getDescendants('products')
            .subscribe(function (result) { return _this.descendants[0] = result.data; }, function (err) { return console.log('помилка завантаження категорій', err); });
    };
    ProductsEditorComponent.prototype.onSelectCategory = function (event, level) {
        var _this = this;
        // if (level + 2 === this.catalogForm.get('categories')['controls'].length) {
        //   const control = <FormArray>this.catalogForm.get('categories');
        //   control.controls[level + 1].setValue(null);
        //   // this.catalogForm.get('categories')['controls'].setValue(null);
        // }
        while (level + 1 < this.catalogForm.get('categories')['controls'].length) {
            this.removeCategory(this.catalogForm.get('categories')['controls'].length - 1);
        }
        this.catalogService.getDescendants(event.value)
            .subscribe(function (result) {
            if (result.data.length) {
                _this.products = null;
                _this.descendants[level + 1] = result.data;
                _this.noMoreDescendants = false;
                _this.addCategory();
            }
            else {
                _this.productService.getProductsByCategory(event.value, false)
                    .subscribe(function (result) { return _this.products = result.data; }, function (err) { return console.log('помилка завантаження категорій', err); });
                _this.parentCategory_id = event.value;
                _this.parentCategoryName = event.source.triggerValue;
                _this.noMoreDescendants = true;
            }
            _this.descendants[level + 1] = result.data;
        }, function (err) { return console.log('помилка завантаження категорій', err); });
    };
    ProductsEditorComponent.prototype.onCatalogFormSubmit = function () {
    };
    ProductsEditorComponent.prototype.addCategory = function () {
        var control = this.catalogForm.get('categories');
        control.push(this.initCategories());
    };
    ProductsEditorComponent.prototype.removeCategory = function (i) {
        var control = this.catalogForm.get('categories');
        control.removeAt(i);
    };
    ProductsEditorComponent.prototype.initCategories = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
        ]);
    };
    ProductsEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-editor',
            template: __webpack_require__(/*! ./products-editor.component.html */ "./src/app/components/dashboard/products-editor/products-editor.component.html"),
            styles: [__webpack_require__(/*! ./products-editor.component.scss */ "./src/app/components/dashboard/products-editor/products-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_catalog_service__WEBPACK_IMPORTED_MODULE_2__["CatalogService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], ProductsEditorComponent);
    return ProductsEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/tools/tools.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/tools/tools.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"cell\">\r\n          <h2 class=\"mat-h2\">Інструменти</h2>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\r\n          <div fxFlex>\r\n            <h4 class=\"mat-h4\">iguard 200x200</h4>\r\n          </div>\r\n          <div fxFlex fxLayoutAlign=\"center center\">\r\n            <img fxflex class=\"product-detail-image\" src=\"{{\r\n                config.imgPath +\r\n                config.cloudinary.cloud_name +\r\n                '/c_fill,w_200,h_200,f_auto/' +\r\n                'iguard'}}\"\r\n                 alt=\"icon\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\r\n          <div fxFlex>\r\n            <h4 class=\"mat-h4\">favicon32x32</h4>\r\n          </div>\r\n          <div fxFlex fxLayoutAlign=\"center center\">\r\n            <img fxflex class=\"product-detail-image\" src=\"{{\r\n                config.imgPath +\r\n                config.cloudinary.cloud_name +\r\n                '/c_fill,w_32,h_32/' +\r\n                faviconFilename}}\"\r\n                 alt=\"icon\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\r\n          <div fxFlex>\r\n            <h4 class=\"mat-h4\">Grabo Logo 250x90</h4>\r\n          </div>\r\n          <div fxFlex fxLayoutAlign=\"center center\">\r\n            <img fxflex class=\"product-detail-image\" src=\"{{\r\n                config.imgPath +\r\n                config.cloudinary.cloud_name +\r\n                '/c_fill,w_250,h_90/' +\r\n                logoFilename}}\"\r\n                 alt=\"icon\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\r\n          <div fxFlex>\r\n            <h4 class=\"mat-h4\">Grabo Logo 140x50</h4>\r\n          </div>\r\n          <div fxFlex fxLayoutAlign=\"center center\">\r\n            <img fxflex class=\"product-detail-image\" src=\"{{\r\n                config.imgPath +\r\n                config.cloudinary.cloud_name +\r\n                '/c_fill,w_140,h_50/' +\r\n                logoFilename}}\"\r\n                 alt=\"icon\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\r\n          <div fxFlex>\r\n            <h4 class=\"mat-h4\">512x512</h4>\r\n          </div>\r\n          <div fxFlex fxLayoutAlign=\"center center\">\r\n            <img fxflex class=\"product-detail-image\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_512,h_512/' +\r\n              iconFilename}}\"\r\n                 alt=\"icon\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\r\n          <div fxFlex>\r\n            <h4 class=\"mat-h4\">384x384</h4>\r\n          </div>\r\n          <div fxFlex fxLayoutAlign=\"center center\">\r\n            <img fxflex class=\"product-detail-image\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_384,h_384/' +\r\n              iconFilename}}\"\r\n                 alt=\"icon\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\r\n          <div fxFlex>\r\n            <h4 class=\"mat-h4\">192x192</h4>\r\n          </div>\r\n          <div fxFlex fxLayoutAlign=\"center center\">\r\n            <img fxflex class=\"product-detail-image\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_192,h_192/' +\r\n              iconFilename}}\"\r\n                 alt=\"icon\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\r\n          <div fxFlex>\r\n            <h4 class=\"mat-h4\">152x152</h4>\r\n          </div>\r\n          <div fxFlex fxLayoutAlign=\"center center\">\r\n            <img fxflex class=\"product-detail-image\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_152,h_152/' +\r\n              iconFilename}}\"\r\n                 alt=\"icon\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\r\n          <div fxFlex>\r\n            <h4 class=\"mat-h4\">144x144</h4>\r\n          </div>\r\n          <div fxFlex fxLayoutAlign=\"center center\">\r\n            <img fxflex class=\"product-detail-image\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_144,h_144/' +\r\n              iconFilename}}\"\r\n                 alt=\"icon\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\r\n          <div fxFlex>\r\n            <h4 class=\"mat-h4\">128x128</h4>\r\n          </div>\r\n          <div fxFlex fxLayoutAlign=\"center center\">\r\n            <img fxflex class=\"product-detail-image\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_128,h_128/' +\r\n              iconFilename}}\"\r\n                 alt=\"icon\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\r\n          <div fxFlex>\r\n            <h4 class=\"mat-h4\">96x96</h4>\r\n          </div>\r\n          <div fxFlex fxLayoutAlign=\"center center\">\r\n            <img fxflex class=\"product-detail-image\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_96,h_96/' +\r\n              iconFilename}}\"\r\n                 alt=\"icon\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\r\n          <div fxFlex>\r\n            <h4 class=\"mat-h4\">72x72</h4>\r\n          </div>\r\n          <div fxFlex fxLayoutAlign=\"center center\">\r\n            <img fxflex class=\"product-detail-image\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_72,h_72/' +\r\n              iconFilename}}\"\r\n                 alt=\"icon\">\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/tools/tools.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/tools/tools.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/tools/tools.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/tools/tools.component.ts ***!
  \***************************************************************/
/*! exports provided: ToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsComponent", function() { return ToolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolsComponent = /** @class */ (function () {
    function ToolsComponent() {
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
    }
    ToolsComponent.prototype.ngOnInit = function () {
        this.iconFilename = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"].gLogo + '.png';
        this.faviconFilename = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"].gLogo + '.png';
        this.logoFilename = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"].graboLogo + '.png';
    };
    ToolsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tools',
            template: __webpack_require__(/*! ./tools.component.html */ "./src/app/components/dashboard/tools/tools.component.html"),
            styles: [__webpack_require__(/*! ./tools.component.scss */ "./src/app/components/dashboard/tools/tools.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolsComponent);
    return ToolsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-dashboard-dashboard-module.js.map
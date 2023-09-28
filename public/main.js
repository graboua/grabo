(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/dashboard/dashboard.module": [
		"./src/app/components/dashboard/dashboard.module.ts",
		"components-dashboard-dashboard-module~components-user-user-module",
		"components-dashboard-dashboard-module"
	],
	"./components/products/products.module": [
		"./src/app/components/products/products.module.ts",
		"components-products-products-module"
	],
	"./components/user/user.module": [
		"./src/app/components/user/user.module.ts",
		"components-dashboard-dashboard-module~components-user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shared/page-404/page-404.component */ "./src/app/components/shared/page-404/page-404.component.ts");
/* harmony import */ var _components_shared_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shared/home/home.component */ "./src/app/components/shared/home/home.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_shared_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/feedback/feedback.component */ "./src/app/components/shared/feedback/feedback.component.ts");
/* harmony import */ var _components_shared_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shared/gallery/gallery.component */ "./src/app/components/shared/gallery/gallery.component.ts");
/* harmony import */ var _components_shared_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/contacts/contacts.component */ "./src/app/components/shared/contacts/contacts.component.ts");
/* harmony import */ var _components_shared_downloads_downloads_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shared/downloads/downloads.component */ "./src/app/components/shared/downloads/downloads.component.ts");
/* harmony import */ var _components_shared_info_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared/info/info.component */ "./src/app/components/shared/info/info.component.ts");
/* harmony import */ var _components_shared_usages_usages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shared/usages/usages.component */ "./src/app/components/shared/usages/usages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    {
        path: 'products',
        loadChildren: './components/products/products.module#ProductsModule',
    },
    {
        path: 'gallery/ch',
        component: _components_shared_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"]
    },
    {
        path: 'usages/ch/:_id',
        component: _components_shared_usages_usages_component__WEBPACK_IMPORTED_MODULE_10__["UsagesComponent"]
    },
    {
        path: 'usages/ch',
        component: _components_shared_usages_usages_component__WEBPACK_IMPORTED_MODULE_10__["UsagesComponent"]
    },
    {
        path: 'contacts/ch',
        component: _components_shared_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__["ContactsComponent"]
    },
    {
        path: 'downloads/ch',
        component: _components_shared_downloads_downloads_component__WEBPACK_IMPORTED_MODULE_8__["DownloadsComponent"]
    },
    {
        path: 'info/ch',
        component: _components_shared_info_info_component__WEBPACK_IMPORTED_MODULE_9__["InfoComponent"]
    },
    {
        path: 'dashboard',
        loadChildren: './components/dashboard/dashboard.module#DashboardModule',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        data: { auth: 'user' },
    },
    {
        path: 'user',
        loadChildren: './components/user/user.module#UserModule'
    },
    {
        path: 'feedback',
        component: _components_shared_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackComponent"]
    },
    { path: 'page-404', component: _components_shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_2__["Page404Component"] },
    { path: '', component: _components_shared_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    // { path: '', loadChildren: './components/home/home.module#HomeModule', pathMatch: 'full' },
    { path: '**', component: _components_shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_2__["Page404Component"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header *ngIf=\"showHeader\"></app-header>\r\n\r\n<mat-toolbar class=\"mat-elevation-z4 header toolbar-color\">\r\n  <mat-toolbar-row>\r\n        <a fxHide.gt-sm=\"true\" mat-button href=\"\"  aria-label=\"home\">\r\n          <img src=\"/assets/images/grabo_logo.svg\" width=\"140px\" height=\"50px\" alt=\"logo\">\r\n        </a>\r\n\r\n  <div fxShow=\"true\" fxHide.lt-md=\"true\">\r\n      <a *ngFor=\"let mainMenuCommonItem of mainMenuCommonItems\" mat-button  aria-label=\"menu\"\r\n       [routerLink]=\"['/', mainMenuCommonItem._id, 'ch']\"\r\n       [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n       {{mainMenuCommonItem.name}}\r\n    </a>\r\n  </div>\r\n  <div fxFlex></div>\r\n  <div *ngIf=\"!showHeader\" fxShow=\"true\" fxHide.lt-md=\"true\">\r\n    <a mat-button class=\"muted\"  aria-label=\"call\"\r\n    href=\"tel:+380956535511\">\r\n    <mat-icon>phone_android</mat-icon> 095 653 55 11\r\n    </a>\r\n  </div>\r\n\r\n\r\n  <div fxShow=\"true\" fxHide.lt-md=\"true\">\r\n\r\n\r\n    <button *ngIf=\"user\"  aria-label=\"menu\"\r\n            mat-button [matMenuTriggerFor]=\"settingsMenu\" #settingsMenuTrigger=\"matMenuTrigger\"\r\n            (mouseover)=\"onSettingsMenuMouseover()\">\r\n      <mat-icon>settings</mat-icon><span> {{user.login}}</span>\r\n    </button>\r\n\r\n    <mat-menu #settingsMenu=\"matMenu\" xPosition=\"after\" yPosition=\"above\" [overlapTrigger]=\"false\">\r\n      <span (mouseleave)=\"onSettingsMenuMouseleave()\">\r\n      <a *ngIf=\"user\"\r\n         mat-menu-item [routerLink]=\"['/user/profile']\"\r\n         [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <mat-icon>account_circle</mat-icon><span>Профіль</span></a>\r\n      <a *ngIf=\"user && user?.role === 'manager' || user?.role === 'admin'\"\r\n         mat-menu-item [routerLink]=\"['/dashboard']\"\r\n         [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <mat-icon>settings</mat-icon><span>Dashboard</span></a>\r\n      </span>\r\n    </mat-menu>\r\n\r\n    <a *ngIf='user'  aria-label=\"exit\"\r\n       mat-button (click)=\"userLocalLogout()\"><mat-icon>exit_to_app</mat-icon> Вихід</a>\r\n  </div>\r\n\r\n  <div class=\"menu-button\" fxShow=\"true\" fxHide.gt-sm=\"true\">\r\n    <button mat-button (click)=\"sidenav.toggle()\" aria-label=\"sidenav\"> \r\n      <mat-icon *ngIf=\"sidenav.opened\">format_indent_increase</mat-icon>\r\n      <mat-icon *ngIf=\"!sidenav.opened\">menu</mat-icon>\r\n    </button>\r\n  </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n  <mat-sidenav-container fxFlexFill>\r\n    <mat-sidenav #sidenav fxLayout=\"column\" class=\"theme-dark\"\r\n                 position=\"end\" class=\"sidenav\" role=\"navigation\" mode=\"side\">\r\n      <div fxLayout=\"column\">\r\n        <mat-nav-list>\r\n          <mat-list-item>\r\n            <app-design-searcher [closer]=\"true\"></app-design-searcher>\r\n          </mat-list-item>\r\n          <mat-list-item *ngFor=\"let mainMenuCommonItem of mainMenuCommonItems\">\r\n            <a matLine\r\n               [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n               [routerLink]=\"['/', mainMenuCommonItem._id, 'ch']\" (click)=\"sidenav.toggle()\">\r\n              {{mainMenuCommonItem.name}}\r\n            </a>\r\n          </mat-list-item>\r\n\r\n          <mat-expansion-panel *ngIf=\"user\" class=\"mat-elevation-z0\">\r\n            <mat-expansion-panel-header class=\"sidenav-expansion-panel\">\r\n              <mat-panel-title>\r\n                <mat-list-item>\r\n                  <mat-icon matListIcon>settings</mat-icon>\r\n                  <span matLine>{{user.login}}</span>\r\n                </mat-list-item>\r\n              </mat-panel-title>\r\n\r\n            </mat-expansion-panel-header>\r\n            <mat-list-item *ngIf=\"user\">\r\n            <mat-icon matListIcon>account_circle</mat-icon>\r\n            <a matLine [routerLink]=\"['/user/profile']\"\r\n               [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"sidenav.toggle()\">\r\n              Профіль</a>\r\n              </mat-list-item>\r\n            <mat-list-item *ngIf=\"user && user?.role === 'manager' || user?.role === 'admin'\">\r\n            <mat-icon matListIcon>settings</mat-icon>\r\n            <a matLine [routerLink]=\"['/dashboard']\"\r\n               [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"sidenav.toggle()\">\r\n              Dashboard</a>\r\n                </mat-list-item>\r\n          </mat-expansion-panel>\r\n\r\n          <!--<mat-list-item *ngIf='!user'>-->\r\n            <!--<a matLine-->\r\n               <!--[routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\"-->\r\n               <!--[routerLink]=\"['/user/login']\" (click)=\"sidenav.toggle()\">Вхід</a>-->\r\n          <!--</mat-list-item>-->\r\n          <mat-list-item *ngIf='user'>\r\n            <a matLine\r\n               (click)=\"userLocalLogout()\" (click)=\"sidenav.toggle()\">\r\n              Вихід\r\n            </a>\r\n            <mat-icon matListIcon>exit_to_app</mat-icon>\r\n          </mat-list-item>\r\n        </mat-nav-list>\r\n      </div>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n\r\n      <!--Example of grid-->\r\n\r\n    <!--<div class=\"container\">-->\r\n      <!--<div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">-->\r\n        <!--<div class=\"cell\" fxFlex.gt-xs=\"50\" fxFlex.gt-sm=\"33.3\" fxFlex.gt-md=\"25\" *ngFor=\"let i of count\" >-->\r\n          <!--<div class=\"item\">{{i.text}}</div>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n\r\n      <!--<div class=\"container\">-->\r\n       <router-outlet></router-outlet>\r\n      <!--</div>-->\r\n\r\n\r\n    </mat-sidenav-content>\r\n\r\n  </mat-sidenav-container>\r\n\r\n  <mat-toolbar *ngIf=\"showHeader\" class=\"mat-elevation-z16 footer\" color=\"primary\">\r\n    <a fxHide.gt-sm=\"true\" mat-button class=\"muted\"  aria-label=\"call\"\r\n       href=\"tel:+380956535511\">\r\n      <mat-icon>phone_android</mat-icon> 095 653 55 11\r\n    </a>\r\n    <div fxFlex></div>\r\n      <!--<span class=\"mat-title toolbar-branding\">-->\r\n       <!---->\r\n      <!--</span>-->\r\n        <a mat-button [routerLink]=\"['/feedback']\" class=\"muted\"  aria-label=\"ask\"\r\n           [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <mat-icon>question_answer</mat-icon> Задати питання\r\n        </a>\r\n  </mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function () {
    function AppComponent(sharedService, userService, router, catalogService, route) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.catalogService = catalogService;
        this.route = route;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
        this.hierarchyCategory = [];
        this.showHeader = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]; }))
            .subscribe(function (event) {
            _this.showHeader = !(event.url === '/');
        });
        this.sharedService.getSharingEvent()
            .subscribe(function (event) {
            if (event[0] === 'closeSidenav') {
                _this.sidenav.close();
            }
        });
        // initial subscribe on user
        this.userService.getUserLocal()
            .subscribe(function (user) { return _this.user = user; });
        // initial login user, token will be taken from localStorage
        this.userService.userLocalLogin(null);
        // get main menu items
        this.catalogService.getMainMenu()
            .subscribe(function (menuItems) {
            _this.mainMenuCommonItems = menuItems.data.common;
            _this.mainMenuSystemItems = menuItems.data.system;
        }, function (err) {
            console.log(err.error);
        });
    };
    AppComponent.prototype.userLocalLogout = function () {
        this.userService.userLocalLogout();
        this.router.navigate(['/user', 'login']);
    };
    AppComponent.prototype.onSettingsMenuMouseover = function () {
        this.settingsMenuTrigger.openMenu();
    };
    AppComponent.prototype.onSettingsMenuMouseleave = function () {
        this.settingsMenuTrigger.closeMenu();
    };
    AppComponent.prototype.onSettingsSideMenuMouseover = function () {
        this.settingsSideMenuTrigger.openMenu();
    };
    AppComponent.prototype.onSettingsSideMenuMouseleave = function () {
        this.settingsSideMenuTrigger.closeMenu();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('settingsMenuTrigger'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"])
    ], AppComponent.prototype, "settingsMenuTrigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('settingsSideMenuTrigger'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"])
    ], AppComponent.prototype, "settingsSideMenuTrigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"])
    ], AppComponent.prototype, "sidenav", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_catalog_service__WEBPACK_IMPORTED_MODULE_3__["CatalogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

var config = {
    serverUrl: '/',
    // defaultAvatarPath: 'https://res.cloudinary.com/hcwwcxz0m/default-avatar180x180.jpg',
    // defaultProductImgPath: 'https://res.cloudinary.com/hcwwcxz0m/default-product180x180.jpg',
    defaultProductImg: 'product',
    defaultAvatar: 'avatar',
    gLogo: 'g_logo',
    graboLogo: 'grabo_logo',
    grabofloorsLogo: 'grabofloors_logo',
    graboplastLogo: 'graboplast_logo',
    stripe: 'stripe',
    blogOptions: {
        showViews: true,
        showComments: true,
        commentsLength: 10,
    },
    imgPath: 'https://res.cloudinary.com/',
    cloudinary: {
        cloud_name: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].cloud_name
    },
    designStructure: ['дошка', 'художній паркет', 'плитка', 'абстракція', 'дитячий'],
    certAssets: [
        {
            _id: 's_color20nv_red',
            image: 's_color20nv_red',
            description: ''
        },
        {
            _id: 's_color20nv_blue',
            image: 's_color20nv_blue',
            description: ''
        },
        {
            _id: 's_diamond',
            image: 's_diamond',
            description: ''
        },
        {
            _id: 's_fiba',
            image: 's_fiba',
            description: ''
        },
        {
            _id: 's_pvc',
            image: 's_pvc',
            description: ''
        },
        {
            _id: 'sez_pvc_01',
            image: 'sez_pvc_01',
            description: ''
        },
        {
            _id: 'sez_pvc_02',
            image: 'sez_pvc_02',
            description: ''
        },
        {
            _id: 'sez_color_20nv_01',
            image: 'sez_color_20nv_01',
            description: ''
        },
        {
            _id: 'sez_color_20nv_02',
            image: 'sez_color_20nv_02',
            description: ''
        },
    ],
    techAssets: [
        {
            _id: 'fiber',
            image: 'fiber',
            description: ''
        },
        {
            _id: 'europe',
            image: 'europe',
            description: ''
        },
        {
            _id: 'water_resistant',
            image: 'water_resistant',
            description: ''
        },
        {
            _id: 'iguard',
            image: 'iguard',
            description: ''
        },
        {
            _id: 'leaf',
            image: 'leaf',
            description: ''
        },
        {
            _id: 'cdf',
            image: 'cdf',
            description: ''
        },
        {
            _id: 'pur',
            image: 'pur',
            description: ''
        },
        {
            _id: 'san',
            image: 'san',
            description: ''
        },
        {
            _id: 'solvent_free',
            image: 'solvent_free',
            description: ''
        },
        {
            _id: 'tech',
            image: 'tech',
            description: ''
        },
        {
            _id: 'wax',
            image: 'wax',
            description: ''
        },
        {
            _id: 'e_nowaste',
            image: 'e_nowaste',
            description: ''
        },
        {
            _id: 'e_phthalate',
            image: 'e_phthalate',
            description: ''
        },
        {
            _id: 'e_recycle',
            image: 'e_recycle',
            description: ''
        },
        {
            _id: 'e_reachconform',
            image: 'e_reachconform',
            description: ''
        },
        {
            _id: 'heavy_metal',
            image: 'heavy_metal',
            description: ''
        },
        {
            _id: '200cm',
            image: '200cm',
            description: ''
        },
        {
            _id: 'clp',
            image: 'clp',
            description: ''
        },
        {
            _id: 'silver_knight',
            image: 'silver_knight',
            description: ''
        },
        {
            _id: 'floor_score',
            image: 'floor_score',
            description: ''
        },
        {
            _id: 'fiba',
            image: 'fiba',
            description: ''
        },
        {
            _id: 'ihf',
            image: 'ihf',
            description: ''
        },
        {
            _id: 'portable',
            image: 'portable',
            description: ''
        },
        {
            _id: 'e_recycle33',
            image: 'e_recycle33',
            description: ''
        },
    ],
    homeBanner: [
        'banner_residential',
        'banner_commercial',
        'banner_parquet',
        'banner_show',
        'banner_sport',
        'banner_transport',
    ],
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-recaptcha/forms */ "./node_modules/ng-recaptcha/forms.js");
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_shared_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/shared/confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var _components_shared_design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/shared/design-popup/design-popup.component */ "./src/app/components/shared/design-popup/design-popup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { CloudinaryModule } from '@cloudinary/angular-5.x';
// import { Cloudinary } from 'cloudinary-core/cloudinary-core-shrinkwrap';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaModule"].forRoot(),
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_6__["RecaptchaFormsModule"],
                // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_10__["ValidateService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaModule"],
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_6__["RecaptchaFormsModule"],
                _services_catalog_service__WEBPACK_IMPORTED_MODULE_12__["CatalogService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_13__["ProductService"],
                _services_shared_service__WEBPACK_IMPORTED_MODULE_14__["SharedService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"],
            ],
            exports: [],
            entryComponents: [
                _components_shared_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmPopupComponent"],
                _components_shared_design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_17__["DesignPopupComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/shared/confirm-popup/confirm-popup.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/confirm-popup/confirm-popup.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  {{data.message}}\r\n</p>\r\n<button mat-button color=\"primary\" (click)=\"onClose(true, data.data)\">Так</button>\r\n<button mat-button color=\"danger\" (click)=\"onClose(false, null)\">Ні</button>"

/***/ }),

/***/ "./src/app/components/shared/confirm-popup/confirm-popup.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/confirm-popup/confirm-popup.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/confirm-popup/confirm-popup.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPopupComponent", function() { return ConfirmPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmPopupComponent = /** @class */ (function () {
    function ConfirmPopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmPopupComponent.prototype.ngOnInit = function () {
    };
    ConfirmPopupComponent.prototype.onClose = function (choice, _id) {
        this.confirmPopupData = { data: { choice: choice, _id: _id } };
        this.dialogRef.close(this.confirmPopupData);
    };
    ConfirmPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-popup',
            template: __webpack_require__(/*! ./confirm-popup.component.html */ "./src/app/components/shared/confirm-popup/confirm-popup.component.html"),
            styles: [__webpack_require__(/*! ./confirm-popup.component.scss */ "./src/app/components/shared/confirm-popup/confirm-popup.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ConfirmPopupComponent);
    return ConfirmPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/contacts/contacts.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/contacts/contacts.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\r\n  <div class=\"container\">\r\n    <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\">\r\n        <mat-card>\r\n                    <!-- <img src=\"/assets/images/trice_logo_full.png\" alt=\"logo\" class=\"contacts-logo-trice\"> -->\r\n          <h1 class=\"mat-display-2\">Контакти\r\n\r\n          </h1>\r\n          <mat-card-content>\r\n            <div class=\"row\" fxLayout=\"row\">\r\n              <div class=\"cell\" fxFlex.xs=\"100\">\r\n                  <h2 class=\"mat-h2 address\">ТзОВ \"Трайс\"</h2>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\" fxLayout=\"row\">\r\n              <div class=\"cell\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.gt-md=\"25\">\r\n                <mat-card>\r\n                  <mat-card-content>\r\n                      <h3 class=\"mat-h2 text-align-center address\">Головний офіс</h3>\r\n                      <p class=\"text-justify muted mat-body address\">\r\n                        Адреса: м. Дніпро, вул. Булата, 12\r\n                      </p>\r\n                      <p class=\"text-justify muted\">\r\n                        <a mat-button class=\"muted\"\r\n                          href=\"tel:+380567339675\">\r\n                          <mat-icon>phone</mat-icon> тел/факс 056 733 96 75\r\n                        </a>\r\n                      </p>\r\n                      <p class=\"text-justify muted\">\r\n                        <a mat-button class=\"muted\"\r\n                          href=\"tel:+380956535511\">\r\n                          <mat-icon>phone_android</mat-icon> vodafone 095 653 55 11\r\n                        </a>\r\n                      </p>\r\n                      <p class=\"text-justify muted\">\r\n                        <a mat-button class=\"muted\"\r\n                          href=\"tel:+380677029230\">\r\n                          <mat-icon>phone_android</mat-icon> kyivstar 067 702 92 30\r\n                        </a>\r\n                      </p>\r\n                      <p class=\"text-justify muted\">\r\n                        <a mat-button class=\"muted\"\r\n                          href=\"mailto: trice.pvc@gmail.com\">\r\n                          <mat-icon>mail</mat-icon> trice.pvc@gmail.com\r\n                        </a>\r\n                      </p>\r\n                  </mat-card-content>\r\n                </mat-card>\r\n\r\n              </div>\r\n\r\n              <div class=\"cell\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.gt-md=\"25\">\r\n                  <mat-card>\r\n                      <mat-card-content>\r\n                          <h3 class=\"mat-h2 text-align-center address\">Західний регіон</h3>\r\n                          <p class=\"text-justify muted\">\r\n                            <a mat-button class=\"muted\"\r\n                              href=\"tel:+380985443968\">\r\n                              <mat-icon>phone_android</mat-icon> 098 544 39 68\r\n                            </a>\r\n                          </p>\r\n                          <p class=\"text-justify muted\">\r\n                            <a mat-button class=\"muted\"\r\n                              href=\"mailto: linoleum.ua@gmail.com\">\r\n                              <mat-icon>mail</mat-icon> linoleum.ua@gmail.com\r\n                            </a>\r\n                          </p>\r\n                      </mat-card-content>\r\n                  </mat-card>\r\n\r\n              </div>\r\n\r\n              <div class=\"cell\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.gt-md=\"25\">\r\n                  <mat-card>\r\n                      <mat-card-content>\r\n                          <h3 class=\"mat-h2 text-align-center address\">м. Київ</h3>\r\n                          <h3 class=\"mat-h3 address\">ТОВ \"ПІДЛОГА.ЮА\"</h3>\r\n                          <p class=\"text-justify muted mat-body address\">\r\n                            Адреса: м.Київ, вул. Васильківська, 34, офіс 202Г\r\n                          </p>\r\n                          <p class=\"text-justify muted\">\r\n                            <a mat-button class=\"muted\"\r\n                              href=\"tel:+380443929290\">\r\n                              <mat-icon>phone</mat-icon> тел/факс 044 290 90 00\r\n                            </a>\r\n                          </p>\r\n                          <p class=\"text-justify muted\">\r\n                            <a mat-button class=\"muted\"\r\n                              href=\"tel:+380675849334\">\r\n                              <mat-icon>phone_android</mat-icon> 067 584 93 34\r\n                            </a>\r\n                          </p>\r\n                          <p class=\"text-justify muted\">\r\n                            <a mat-button class=\"muted\"\r\n                              href=\"https://www.pidloga.ua\" rel=\"noreferrer\" target=\"_blank\">\r\n                              <mat-icon>screen_share</mat-icon> www.pidloga.ua\r\n                            </a>\r\n                          </p>\r\n                      </mat-card-content>\r\n                  </mat-card>\r\n                </div>\r\n\r\n            <!-- <div class=\"cell\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.gt-md=\"25\">\r\n              <mat-card>\r\n                  <mat-card-content>\r\n                      <h3 class=\"mat-h2 text-align-center address\">м. Одеса</h3>\r\n                      <h3 class=\"mat-h3 address\">Котеленець Олена</h3>\r\n                      <p class=\"text-justify muted\">\r\n                        <a mat-button class=\"muted\"\r\n                          href=\"tel:+380973504473\">\r\n                          <mat-icon>phone_android</mat-icon> 097 350 44 73\r\n                        </a>\r\n                      </p>\r\n                      <p class=\"text-justify muted\">\r\n                        <a mat-button class=\"muted\"\r\n                          href=\"tel:+380956848203\">\r\n                          <mat-icon>phone_android</mat-icon> 095 684 82 03\r\n                        </a>\r\n                      </p>\r\n                  </mat-card-content>\r\n              </mat-card>\r\n            </div> -->\r\n          </div>\r\n\r\n            <div class=\"row\" fxLayout=\"row\">\r\n                <div class=\"cell\" fxFlex.xs=\"100\">\r\n                  <a href=\"https://graboplast.com\" rel=\"noreferrer\" target=\"_blank\">\r\n                    <img class=\"contacts-logo-grabo\" src=\"/assets/images/graboplast_logo.svg\" alt=\"logo\"></a>\r\n                  <div>\r\n                    <a mat-button href=\"https://graboplast.com\" rel=\"noreferrer\" target=\"_blank\">Перейти на сайт виробника</a>\r\n\r\n                  </div>\r\n                </div>\r\n            </div>\r\n\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shared/contacts/contacts.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/contacts/contacts.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/contacts/contacts.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/contacts/contacts.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
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


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/components/shared/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/components/shared/contacts/contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/crsl/crsl.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/shared/crsl/crsl.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-horizontal-stepper class=\"crsl\" #stepper>\r\n  <ng-template matStepperIcon=\"edit\">\r\n  </ng-template>\r\n\r\n  <ng-template matStepperIcon=\"done\">\r\n  </ng-template>\r\n  <ng-template matStepperIcon=\"number\" let-index=\"index\">\r\n    <!--{{index + 10}}-->\r\n  </ng-template>\r\n\r\n  <mat-step *ngFor=\"let banner of homeBanner\">\r\n    <!--<img *ngIf=\"media.isActive('md')\" class=\"responsive-image-stretch\" src=\"{{-->\r\n    <img *ngIf=\"media.isActive('gt-md') || media.isActive('sm')\" class=\"responsive-image\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_760,h_350,f_auto/' +\r\n            banner + '.jpg'}}\"\r\n         alt=\"Image\">\r\n    <img *ngIf=\"media.isActive('md') || media.isActive('xs')\" class=\"responsive-image\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_550,h_250,f_auto/' +\r\n            banner + '.jpg'}}\"\r\n         alt=\"Image\">\r\n    <!-- <img *ngIf=\"media.isActive('gt-md') || media.isActive('sm')\" class=\"responsive-image\" src=\"{{\r\n          '/assets/images/home-page/' +\r\n          banner + '_760x350.jpg'}}\"\r\n       alt=\"Image\">\r\n    <img *ngIf=\"media.isActive('md') || media.isActive('xs')\" class=\"responsive-image\" src=\"{{\r\n          '/assets/images/home-page/' +\r\n          banner + '_550x250.jpg'}}\"\r\n       alt=\"Image\"> -->\r\n      <!--<div>-->\r\n        <!--<button mat-icon-button matStepperNext>-->\r\n          <!--<mat-icon>navigate_next</mat-icon></button>-->\r\n      <!--</div>-->\r\n  </mat-step>\r\n\r\n</mat-horizontal-stepper>\r\n"

/***/ }),

/***/ "./src/app/components/shared/crsl/crsl.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/shared/crsl/crsl.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/crsl/crsl.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/shared/crsl/crsl.component.ts ***!
  \**********************************************************/
/*! exports provided: CrslComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrslComponent", function() { return CrslComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrslComponent = /** @class */ (function () {
    function CrslComponent(media) {
        this.media = media;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
        this.homeBanner = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].homeBanner;
    }
    CrslComponent.prototype.ngOnInit = function () {
        this.setInterval();
    };
    CrslComponent.prototype.setInterval = function () {
        var _this = this;
        return this.interval = setInterval(function () {
            if (_this.matStepper.selectedIndex === _this.stepperIndex) {
                _this.stepperIndex = _this.matStepper.selectedIndex;
                _this.matStepper.reset();
            }
            else {
                _this.stepperIndex = _this.matStepper.selectedIndex;
                _this.matStepper.next();
            }
        }, 4000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepper"])
    ], CrslComponent.prototype, "matStepper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepperHeader'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepper"])
    ], CrslComponent.prototype, "matStepperHeader", void 0);
    CrslComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crsl',
            template: __webpack_require__(/*! ./crsl.component.html */ "./src/app/components/shared/crsl/crsl.component.html"),
            styles: [__webpack_require__(/*! ./crsl.component.scss */ "./src/app/components/shared/crsl/crsl.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["ObservableMedia"]])
    ], CrslComponent);
    return CrslComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/design-item/design-item.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/design-item/design-item.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header></mat-card-header>\r\n  <mat-card-title></mat-card-title>\r\n\r\n  <mat-card-content>\r\n    <h2 class=\"mat-h3\">{{design._id}}</h2>\r\n    <div class=\"product-cl-image-wrapper-outer\">\r\n      <div class=\"product-cl-image-wrapper-inner\">\r\n        <img src=\"{{config.imgPath + config.cloudinary.cloud_name + '/c_fill,w_180,h_180,f_auto/' + design.image}}\"\r\n             alt=\"design picture\" class=\"product-cl-image\">\r\n\r\n        <!--<cl-image class=\"product-cl-image\"-->\r\n          <!--public-id=\"{{design.image || config.defaultProductImgPath}}\"-->\r\n          <!--secure=\"true\">-->\r\n        <!--<cl-transformation-->\r\n        <!--quality=\"auto\" fetch_format=\"auto\" crop=\"thumb\">-->\r\n        <!--&lt;!&ndash;radius=\"20\">&ndash;&gt;-->\r\n        <!--</cl-transformation>-->\r\n        <!--&lt;!&ndash;<cl-transformation overlay=\"cloudinary_icon\" gravity=\"south_east\" x=\"5\" y=\"5\" width=\"50\" opacity=\"60\" effect=\"brightness:200\">&ndash;&gt;-->\r\n        <!--&lt;!&ndash;</cl-transformation>&ndash;&gt;-->\r\n        <!--&lt;!&ndash;<cl-transformation angle=\"10\">&ndash;&gt;-->\r\n        <!--&lt;!&ndash;</cl-transformation>&ndash;&gt;-->\r\n        <!--</cl-image>-->\r\n      </div>\r\n    </div>\r\n      <!--<div class=\"info-block-row-wrapper\">-->\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n        <!--<mat-icon class=\"muted\">edit</mat-icon>-->\r\n        <!--<div class=\"info-block-row-title mat-subheading-1 cell\">Структура </div>-->\r\n        <div class=\"mat-subheading-1 muted\" fxFlex>{{design.structure}}</div>\r\n        <!--<mat-icon *ngIf=\"processing !== 'email'\" fxFlex=\"30px\"-->\r\n                  <!--(click)=\"openDialog(makeEmailObject())\" class=\"muted\">edit</mat-icon>-->\r\n        <!--<mat-spinner *ngIf=\"processing === 'email'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>-->\r\n      <!--</div>-->\r\n      </div>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <div fxFlex></div>\r\n    <div fxFlex *ngIf=\"user && user?.role === 'manager' || user?.role === 'admin'\">\r\n      <a mat-icon-button\r\n      [routerLink]=\"['/dashboard/designs_editor_edit', design._id]\"\r\n      [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <mat-icon>edit</mat-icon>\r\n      </a>\r\n      <a mat-icon-button color=\"primary\"\r\n         (click)=\"openDialog({message: 'Видалити дизайн ' + design._id, data: design._id})\">\r\n        <mat-icon>delete_forever</mat-icon>\r\n      </a>\r\n    </div>\r\n\r\n  </mat-card-actions>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/shared/design-item/design-item.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/design-item/design-item.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/design-item/design-item.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/design-item/design-item.component.ts ***!
  \************************************************************************/
/*! exports provided: DesignItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignItemComponent", function() { return DesignItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var _services_design_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/design.service */ "./src/app/services/design.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DesignItemComponent = /** @class */ (function () {
    function DesignItemComponent(matSnackBar, userService, designService, dialog, sharedService) {
        this.matSnackBar = matSnackBar;
        this.userService = userService;
        this.designService = designService;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
    }
    DesignItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserLocal()
            .subscribe(function (user) { return _this.user = user; });
    };
    DesignItemComponent.prototype.openDialog = function (confirmPopupData) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmPopupComponent"], {
            width: '400px',
            data: confirmPopupData,
        });
        dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (result) {
            if (!result || !result.data.choice) {
                return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
            }
            return _this.designService.designDelete(result.data._id);
        }))
            .subscribe(function (result) {
            _this.sharedService.sharingEvent(['updateDesigns']);
        }, function (err) { return console.log('err delete', err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesignItemComponent.prototype, "design", void 0);
    DesignItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-design-item',
            template: __webpack_require__(/*! ./design-item.component.html */ "./src/app/components/shared/design-item/design-item.component.html"),
            styles: [__webpack_require__(/*! ./design-item.component.scss */ "./src/app/components/shared/design-item/design-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_design_service__WEBPACK_IMPORTED_MODULE_5__["DesignService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])
    ], DesignItemComponent);
    return DesignItemComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/design-popup/design-popup.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/design-popup/design-popup.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n  <div class=\"cell\" fxLayout>\r\n    <div fxFlex=\"calc(100%-40px)\" fxLayoutAlign=\"center center\">\r\n      <h3 class=\"h3 muted\">{{data.title}}</h3>\r\n    </div>\r\n\r\n    <div fxFlex=\"40px\" fxLayoutAlign=\"end center\">\r\n      <div>\r\n        <button mat-icon-button color=\"accent\" (click)=\"onClose()\">\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"designProducts\" class=\"container\">\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\" fxLayout=\"row\" fxFill=\"center\">\r\n\r\n        <mat-form-field fxFlex=\"100\">\r\n        <mat-select placeholder=\"Колекції\" #productSelect (valueChange)=\"onProductSelect($event)\">\r\n          <mat-option *ngFor=\"let product of designProducts\" [value]=\"product\">\r\n              {{product.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n          </mat-form-field>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"responsive-image-popup-container\">\r\n      <img class=\"responsive-image-popup\" src=\"{{\r\n          config.imgPath +\r\n          config.cloudinary.cloud_name +\r\n          cloudinaryOptions +\r\n          data.image}}\"\r\n           alt=\"design\">\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/shared/design-popup/design-popup.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/design-popup/design-popup.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/design-popup/design-popup.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/design-popup/design-popup.component.ts ***!
  \**************************************************************************/
/*! exports provided: DesignPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignPopupComponent", function() { return DesignPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DesignPopupComponent = /** @class */ (function () {
    // productForm: FormGroup;
    function DesignPopupComponent(sharedService, router, dialogRef, data) {
        this.sharedService = sharedService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
    }
    DesignPopupComponent.prototype.ngOnInit = function () {
        this.data.cloudinaryOptions ?
            this.cloudinaryOptions = this.data.cloudinaryOptions :
            this.cloudinaryOptions = '/c_fill,w_650,h_650,f_auto/';
        this.designProducts = this.data.designProducts;
    };
    DesignPopupComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    DesignPopupComponent.prototype.onProductSelect = function (product) {
        if (this.data.closer) {
            this.sharedService.sharingEvent(['closeSidenav']);
        }
        this.onClose();
        this.router.navigate(['/products', 'ch', { outlets: { primary: [product.category_id[0], 'details', product._id],
                    breadcrumb: [product.category_id[0], 'details', product._id] } }], { queryParams: { name: product.name } });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('productSelect'),
        __metadata("design:type", Object)
    ], DesignPopupComponent.prototype, "productSelect", void 0);
    DesignPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-design-popup',
            template: __webpack_require__(/*! ./design-popup.component.html */ "./src/app/components/shared/design-popup/design-popup.component.html"),
            styles: [__webpack_require__(/*! ./design-popup.component.scss */ "./src/app/components/shared/design-popup/design-popup.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DesignPopupComponent);
    return DesignPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/design-searcher/design-searcher.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/design-searcher/design-searcher.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"findDesignForm\" novalidate>\r\n  <mat-form-field >\r\n    <!-- <mat-placeholder><mat-icon>search</mat-icon> Знайти дизайн</mat-placeholder> -->\r\n    <mat-label><mat-icon>search</mat-icon> Знайти дизайн</mat-label>\r\n    <input type=\"text\" matInput formControlName=\"findDesign\" [matAutocomplete]=\"designSelector\">\r\n    <mat-autocomplete #designSelector=\"matAutocomplete\">\r\n      <mat-option *ngFor=\"let filteredDesign of filteredDesigns | async\"\r\n                  (click)=\"onSelectDesign(_getDesign(filteredDesign), closer)\" [value]=\"filteredDesign\">\r\n        {{filteredDesign}}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/shared/design-searcher/design-searcher.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/design-searcher/design-searcher.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/design-searcher/design-searcher.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/design-searcher/design-searcher.component.ts ***!
  \********************************************************************************/
/*! exports provided: DesignSearcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignSearcherComponent", function() { return DesignSearcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_design_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/design.service */ "./src/app/services/design.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../design-popup/design-popup.component */ "./src/app/components/shared/design-popup/design-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DesignSearcherComponent = /** @class */ (function () {
    function DesignSearcherComponent(sharedService, designService, productService, dialog) {
        this.sharedService = sharedService;
        this.designService = designService;
        this.productService = productService;
        this.dialog = dialog;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
        this.designs_id = [];
        this.designValidity = false;
    }
    DesignSearcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.findDesignForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            findDesign: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
        });
        // Design finder
        this.designService.getDesigns()
            .subscribe(function (result) {
            _this.designs = result.data;
            _this.designs.map(function (design) { return _this.designs_id.push(design._id); });
        }, function (err) { return console.log('Помилка завантеження дизайнів', err); });
        this.filteredDesigns = this.findDesignForm.get('findDesign').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (value) { return _this.designValidity = _this._checkDesignValidity(value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (value) { return _this._filter(value); }));
    };
    // Design finder
    DesignSearcherComponent.prototype._filter = function (filterValue) {
        return this.designs_id
            .filter(function (option) { return option.indexOf(filterValue) === 0; }); // filter by input value
    };
    DesignSearcherComponent.prototype._checkDesignValidity = function (value) {
        return this.designs_id.indexOf(value) !== -1;
    };
    DesignSearcherComponent.prototype._getDesign = function (_id) {
        return this.designs.filter(function (design) { return design._id === _id; })[0];
    };
    DesignSearcherComponent.prototype.onSelectDesign = function (design, closer) {
        var _this = this;
        this.findDesignForm.get('findDesign').reset();
        this.productService.getProductsByDesignId(design._id)
            .subscribe(function (result) {
            var imageObject = {
                image: design.image,
                designProducts: result.data,
                title: design._id,
                cloudinaryOptions: '/c_fill,w_650,h_650,f_auto/',
                closer: closer
            };
            var dialogRef = _this.dialog.open(_design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_8__["DesignPopupComponent"], {
                // height: '80vh',
                data: imageObject,
                panelClass: 'custom-dialog-container'
            });
            dialogRef.afterClosed()
                .subscribe(function () {
            }, function (err) { return console.log('err delete', err); });
        }, function (err) { return console.log('Помилка', err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('designSelector'),
        __metadata("design:type", Object)
    ], DesignSearcherComponent.prototype, "designSelector", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesignSearcherComponent.prototype, "closer", void 0);
    DesignSearcherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-design-searcher',
            template: __webpack_require__(/*! ./design-searcher.component.html */ "./src/app/components/shared/design-searcher/design-searcher.component.html"),
            styles: [__webpack_require__(/*! ./design-searcher.component.scss */ "./src/app/components/shared/design-searcher/design-searcher.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _services_design_service__WEBPACK_IMPORTED_MODULE_5__["DesignService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], DesignSearcherComponent);
    return DesignSearcherComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/downloads/downloads.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/downloads/downloads.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\r\n  <div class=\"container\">\r\n\r\n  <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n    <div class=\"cell\" fxFlex=\"100\">\r\n      <mat-card>\r\n        <mat-card-header>\r\n          <h1 class=\"mat-display-2\">Завантаження</h1>\r\n\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <!--<p class=\"text-justify muted\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod-->\r\n            <!--tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation-->\r\n            <!--ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in-->\r\n            <!--voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat-->\r\n            <!--non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>-->\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/downloads/downloads.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/downloads/downloads.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/downloads/downloads.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/downloads/downloads.component.ts ***!
  \********************************************************************/
/*! exports provided: DownloadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsComponent", function() { return DownloadsComponent; });
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

var DownloadsComponent = /** @class */ (function () {
    function DownloadsComponent() {
    }
    DownloadsComponent.prototype.ngOnInit = function () {
    };
    DownloadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-downloads',
            template: __webpack_require__(/*! ./downloads.component.html */ "./src/app/components/shared/downloads/downloads.component.html"),
            styles: [__webpack_require__(/*! ./downloads.component.scss */ "./src/app/components/shared/downloads/downloads.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadsComponent);
    return DownloadsComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/feedback/feedback.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/feedback/feedback.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n    <div fxFlex.gt-xs=\"10\" fxFlex.gt-md=\"15\"></div>\r\n\r\n    <div class=\"cell\" fxFlex.gt-xs=\"80\" fxFlex.gt-md=\"70\">\r\n\r\n      <div class=\"centered-container-600\">\r\n        <mat-card  class=\"form-block\">\r\n          <mat-card-content>\r\n            <div class=\"padding-bottom\" fxLayout fxLayoutAlign=\"center center\">\r\n              <img class=\"responsive-image\" src=\"/assets/images/graboplast_logo.svg\" width=\"367px\">\r\n            </div>\r\n            <form #fForm=\"ngForm\" [formGroup]=\"feedbackForm\" (submit)=\"onFeedbackFormSubmit()\">\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">textsms</mat-icon>\r\n                </div>\r\n              <mat-form-field>\r\n                <textarea rows=\"5\" matInput placeholder=\"Повідомлення\" formControlName=\"message\" required></textarea>\r\n                <mat-error\r\n                  *ngIf=\"(feedbackForm.get('message').errors?.minlength ||\r\n                                    feedbackForm.get('message').errors?.maxlength ||\r\n                                    feedbackForm.get('message').errors?.required) &&\r\n                                    feedbackForm.get('message').touched\">\r\n                  Довжина повинна бути від 3 до 500 символів\r\n                </mat-error>\r\n              </mat-form-field>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">account_circle</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Ваше ім'я\" formControlName=\"name\" required>\r\n                  <mat-error\r\n                    *ngIf=\"feedbackForm.get('contacts').errors?.required &&\r\n                        feedbackForm.get('name').touched\">\r\n                    Введіть ім'я\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">contacts</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Контактний номер або email\" formControlName=\"contacts\" required>\r\n                  <mat-error\r\n                    *ngIf=\"feedbackForm.get('contacts').errors?.required &&\r\n                        feedbackForm.get('contacts').touched\">\r\n                    Введіть котактну інформацію\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n              <re-captcha [ngClass]=\"{'display-none':\r\n          !feedbackForm.get('contacts').valid || !feedbackForm.get('contacts').valid ||\r\n          !feedbackForm.get('message').valid}\"\r\n                          [formControlName]=\"'recaptcha'\" #recaptchaRef\r\n                          siteKey=\"6LelLF0UAAAAAEd0tfLUO02IAuT-_bf0noIJN0nK\">\r\n              </re-captcha>\r\n              <!--<div *ngIf=\"!processing\" fxLayout=\"row\">-->\r\n                <!--<object type=\"image/svg+xml\" data=\"/assets/images/loading.svg\" width=\"50px\" height=\"20px\">-->\r\n                  <!--Loading..-->\r\n                <!--</object>-->\r\n              <!--</div>-->\r\n\r\n              <div class=\"submit-button-wrapper\">\r\n                <!--<span fxFlex></span>-->\r\n                <button mat-raised-button class=\"full-width\" color=\"primary\" [disabled]=\"!feedbackForm.valid || processing\">\r\n                  <mat-icon *ngIf=\"!processing\">message</mat-icon> Написати нам</button>\r\n              </div>\r\n\r\n            </form>\r\n          </mat-card-content>\r\n          <!--<img mat-card-image class=\"mat-card-image-bottom\" src=\"/assets/images/logo400x140-2.jpg\" alt=\"\">-->\r\n        </mat-card>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/feedback/feedback.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/feedback/feedback.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/feedback/feedback.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/feedback/feedback.component.ts ***!
  \******************************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(location, sharedService, matSnackBar) {
        this.location = location;
        this.sharedService = sharedService;
        this.matSnackBar = matSnackBar;
        this.processing = false;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.feedbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500),
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            contacts: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])
        });
    };
    FeedbackComponent.prototype.onFeedbackFormSubmit = function () {
        var _this = this;
        this.processing = true;
        this.feedback = this.feedbackForm.value;
        this.sharedService.sendFeedbackMessage(this.feedback, this.feedbackForm.get('recaptcha').value)
            .subscribe(function (res) {
            _this.matSnackBar.open('Повідомлення надіслано. Ми зв\'яжемось з вами найближчим часом', '', { duration: 5000 });
            _this.processing = false;
            _this.resetForm();
            _this.location.back();
        }, function (err) {
            _this.processing = false;
            _this.matSnackBar.open('Сталася помилка. Повідомлення не надіслано. Спробуйте пізнше', '', { duration: 3000, panelClass: 'warn' });
        });
    };
    FeedbackComponent.prototype.resetForm = function () {
        if (this.fFormDirective) {
            this.fFormDirective.resetForm();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"])
    ], FeedbackComponent.prototype, "fFormDirective", void 0);
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/components/shared/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.scss */ "./src/app/components/shared/feedback/feedback.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/gallery/gallery.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/gallery/gallery.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\">\r\n      <h1 class=\"mat-display-1\">Галерея</h1>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\" *ngFor=\"let product of productsWithGallery\">\r\n        <mat-card>\r\n          <mat-card-subtitle>\r\n            <a mat-button\r\n               [routerLink]=\"['/products', 'ch', {outlets: {primary: [product.parent[0], 'details', product._id],\r\n                    breadcrumb: [product.parent[0], 'details', product._id]}}]\"\r\n               [queryParams]=\"{name: product.name}\"\r\n               [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n              {{product.name}}\r\n            </a>\r\n          </mat-card-subtitle>\r\n          <div class=\"row\" fxLayout=\"row\">\r\n            <div fxFlex=\"100\" class=\"cell text-justify\" [innerHTML]=\"product.description\"></div>\r\n\r\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.gt-sm=\"33\" class=\"cell\"\r\n                 fxLayout fxLayoutAlign=\"center center\"\r\n                 *ngFor=\"let productAsset of product.assets\">\r\n              <mat-card *ngIf=\"media.isActive('xs')\" class=\"no-padding\">\r\n                <mat-card-header fxLayoutAlign=\"center center\">\r\n                  <!--<mat-card-subtitle class=\"design-image-title\">{{galleryItem}}</mat-card-subtitle>-->\r\n                </mat-card-header>\r\n                <mat-card-content fxLayoutAlign=\"center center\">\r\n\r\n                  <img *ngIf=\"productAsset\" class=\"responsive-image hover-cursor\"\r\n                       (click)=\"openDialog(productAsset, product.name)\"\r\n                       src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                      '/c_fill,w_590,h_295,f_auto/' +\r\n                      productAsset}}\"\r\n                       alt=\"design\">\r\n                </mat-card-content>\r\n              </mat-card>\r\n\r\n\r\n              <mat-card *ngIf=\"media.isActive('gt-xs')\" class=\"no-padding\" fxFlex.gt-xs=\"100\">\r\n                <mat-card-header fxLayoutAlign=\"center center\">\r\n                  <!--<mat-card-subtitle class=\"design-image-title\">{{galleryItem}}</mat-card-subtitle>-->\r\n                </mat-card-header>\r\n                <mat-card-content fxLayoutAlign=\"center center\">\r\n                  <img *ngIf=\"productAsset\" class=\"responsive-image-stretch hover-cursor\"\r\n                       (click)=\"openDialog(productAsset, product.name)\"\r\n                       src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                      '/c_fill,w_350,h_175,f_auto/' +\r\n                      productAsset}}\"\r\n                       alt=\"design\">\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/shared/gallery/gallery.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/gallery/gallery.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/gallery/gallery.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/gallery/gallery.component.ts ***!
  \****************************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../design-popup/design-popup.component */ "./src/app/components/shared/design-popup/design-popup.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
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






var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(dialog, media, productService) {
        this.dialog = dialog;
        this.media = media;
        this.productService = productService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProductsWithGallery()
            .subscribe(function (result) { return _this.productsWithGallery = result.data; }, function (err) { return console.log('getProductsWithGallery error'); });
    };
    GalleryComponent.prototype.openDialog = function (image, title) {
        var imageObject = {
            image: image,
            cloudinaryOptions: '/c_fill,w_1100,h_550,f_auto/',
            title: title
        };
        var dialogRef = this.dialog.open(_design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_2__["DesignPopupComponent"], {
            // width: '400px',
            data: imageObject,
            panelClass: 'custom-dialog-container'
        });
        dialogRef.afterClosed()
            .subscribe(function (result) {
        }, function (err) { return console.log('err delete', err); });
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/components/shared/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/components/shared/gallery/gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["ObservableMedia"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\r\n\r\n  <div class=\"container\" fxHide.lt-md=\"true\">\r\n    <div class=\"row primary-background-light\">\r\n      <div class=\"cell\">\r\n        <a href=\"\"  aria-label=\"home\">\r\n          <img src=\"/assets/images/grabofloors_logo.svg\" width=\"250px\" height=\"90px\" alt=\"logo\">\r\n        </a>\r\n      </div>\r\n      <div fxFlex></div>\r\n      <div class=\"cell\">\r\n        <app-design-searcher [closer]=\"false\"></app-design-searcher>\r\n      </div>\r\n\r\n      <div class=\"cell\" fxLayout=\"column\">\r\n        <div>\r\n          <a mat-button [routerLink]=\"['/feedback']\" class=\"muted\"  aria-label=\"ask\"\r\n             [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            <mat-icon>question_answer</mat-icon> Задати питання\r\n          </a>\r\n        </div>\r\n        <div>\r\n            <a mat-button class=\"muted\"  aria-label=\"call\"\r\n          href=\"tel:+380956535511\">\r\n         <mat-icon>phone_android</mat-icon> 095 653 55 11\r\n       </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shared/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/home/home.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/shared/home/home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\">\r\n\r\n      <div class=\"row\" fxLayout=row id=\"home-top\" #scrollPointTop\r\n        data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\">\r\n        <div class=\"cell\" fxFlex=5 hxHide.lt-md></div>\r\n        <div class=\"cell-padding-2 wrap\" fxFlex=\"100\" fxFlex.gt-sm=40 fxLayout=\"row\">\r\n              <div fxFlex=\"100\" fxLayoutAlign=\"center center\">\r\n                  <img id=\"home-logo\" src=\"/assets/images/grabo_logo_full2.svg\" alt=\"logo\">\r\n              </div>\r\n              <div class=\"wrap\" fxFlex=\"100\" fxLayoutAlign=\"end start\" fxLayout=\"row\">\r\n                <div class=\"padding-bottom\" fxFlex=\"100\"  fxLayoutAlign=\"start center\">\r\n                    <app-design-searcher [closer]=\"false\"></app-design-searcher>\r\n                </div>\r\n\r\n\r\n              </div>\r\n              <div class=\"wrap\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\r\n                  <div class=\"padding-bottom \" fxFlex=\"100\" fxLayoutAlign=\"start center\">\r\n                      <a mat-button class=\"radius-5 muted\" [routerLink]=\"['/usages/ch']\" aria-label=\"choose\">\r\n                        <mat-icon>collections</mat-icon> Підібрати покриття</a>\r\n                  </div>\r\n                  <div class=\"padding-bottom\" fxFlex=\"100\" fxLayoutAlign=\"start end\">\r\n                      <a mat-button class=\"radius-5 muted\" [routerLink]=\"['/feedback']\" aria-label=\"ask\">\r\n                        <mat-icon>question_answer</mat-icon> Задати питання</a>\r\n                    </div>\r\n              </div>\r\n        </div>\r\n        <div class=\"cell\" fxHide.lt-md=\"100\" fxFlex.gt-sm=50 fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <app-crsl></app-crsl>\r\n        </div>\r\n        <button mat-icon-button aria-label=\"scroll\"\r\n        (click)=\"onScrollToCenter()\" id=\"scroll-to-center-btn\"><mat-icon>keyboard_arrow_down</mat-icon></button>\r\n      </div>\r\n\r\n      <div id=\"home-center\" #scrollPointCenter>\r\n          <div class=\"row home-center-section\" fxLayout=row *ngFor=\"let descendant of descendants\"\r\n            data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\">\r\n            <div class=\"cell\" fxFlex=5 hxHide.lt-md></div>\r\n            <div class=\"cell-padding-2 wrap\" fxFlex=\"100\" fxFlex.gt-sm=40 fxLayoutAlign=\"center center\">\r\n                <a fxFlex=\"100\" class=\"text-center\"\r\n                [routerLink]=\"['/products', 'ch', {outlets: {primary: [descendant._id], breadcrumb: [descendant._id]}}]\"\r\n                [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                <h2 class=\"mat-h1\">{{descendant.name}}</h2>\r\n                </a>\r\n              <h3 fxFlex=\"100\" class=\"mat-h3 text-justify\">{{descendant.slogan}}</h3>\r\n            </div>\r\n            <div class=\"cell\" fxFlex=\"100\" fxFlex.gt-sm=50 fxLayoutAlign=\"center center\"\r\n                data-aos=\"fade-left\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-out-sine\" data-aos-duration=\"600\">\r\n                <a fxFlex=\"100\" fxLayoutAlign=\"center center\"\r\n                [routerLink]=\"['/products', 'ch', {outlets: {primary: [descendant._id], breadcrumb: [descendant._id]}}]\"\r\n                [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                <img *ngIf=\"media.isActive('gt-sm')\"\r\n                      class=\"responsive-image\" src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                      '/c_fill,w_680,h_340,f_auto/e_saturation:-70/' +\r\n                      descendant.assets[0]}}\"\r\n                      alt=\"Category image\">\r\n                <img *ngIf=\"media.isActive('lt-md')\"\r\n                      class=\"responsive-image\" src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                      '/c_fill,w_600,h_300,f_auto/e_saturation:-70/' +\r\n                      descendant.assets[0]}}\"\r\n                      alt=\"Category image\">\r\n                <!-- <img *ngIf=\"media.isActive('gt-sm')\"\r\n                      class=\"responsive-image\" src=\"{{\r\n                        '/assets/images/home-page/' +\r\n                        descendant.assets[0] + '_680x340.jpg'}}\"\r\n                      alt=\"Category image\">\r\n                <img *ngIf=\"media.isActive('lt-md')\"\r\n                      class=\"responsive-image\" src=\"{{\r\n                        '/assets/images/home-page/' +\r\n                        descendant.assets[0] + '_600x300.jpg'}}\"\r\n                      alt=\"Category image\"> -->\r\n                </a>\r\n\r\n\r\n            </div>\r\n        </div>\r\n      </div>\r\n\r\n  <div class=\"row\" fxLayout=row id=\"home-bottom\"\r\n        data-aos=\"fade-zoom-in\" data-aos-offset=\"200\" data-aos-easing=\"ease-in-sine\" data-aos-duration=\"600\">\r\n    <div class=\"cell-padding-2\" fxFlex=\"100\">\r\n      <!-- <div class=\"row\" fxLayout=\"row\">\r\n        <div class=\"cell\"fxFlex=\"100\" fxLayoutAlign=\"center\">\r\n            <h2 class=\"mat-h2\">ТзОВ \"Трайс\" </h2>\r\n\r\n\r\n        </div>\r\n      </div> -->\r\n\r\n      <div class=\"row\" fxLayout=\"row\" fxLayoutAlign.xs=\"center\" fxLayoutAlign.sm=\"start\" fxLayoutAlign.gt-sm=\"center\">\r\n        <button mat-icon-button (click)=\"onScrollTop()\" aria-label=\"scroll\"\r\n        id=\"scroll-top-btn\"><mat-icon>keyboard_arrow_up</mat-icon></button>\r\n        <div class=\"cell\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.gt-md=\"25\">\r\n                <h3 class=\"mat-h2 text-align-center address\">Головний офіс</h3>\r\n                <p class=\"text-justify muted mat-body address\">\r\n                  Адреса: м. Дніпро, вул. Булата, 12\r\n                </p>\r\n                <p class=\"text-justify muted\">\r\n                  <a mat-button class=\"muted\" aria-label=\"call\"\r\n                    href=\"tel:+380567339675\">\r\n                    <mat-icon>phone</mat-icon> тел/факс 056 733 96 75\r\n                  </a>\r\n                </p>\r\n                <p class=\"text-justify muted\">\r\n                  <a mat-button class=\"muted\" aria-label=\"call\"\r\n                    href=\"tel:+380956535511\">\r\n                    <mat-icon>phone_android</mat-icon> vodafone 095 653 55 11\r\n                  </a>\r\n                </p>\r\n                <p class=\"text-justify muted\">\r\n                  <a mat-button class=\"muted\" aria-label=\"call\"\r\n                    href=\"tel:+380677029230\">\r\n                    <mat-icon>phone_android</mat-icon> kyivstar 067 702 92 30\r\n                  </a>\r\n                </p>\r\n                <p class=\"text-justify muted\">\r\n                  <a mat-button class=\"muted\" aria-label=\"email\"\r\n                    href=\"mailto: trice.pvc@gmail.com\">\r\n                    <mat-icon>mail</mat-icon> trice.pvc@gmail.com\r\n                  </a>\r\n                </p>\r\n        </div>\r\n        <div class=\"cell\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.gt-md=\"25\">\r\n                    <h3 class=\"mat-h2 text-align-center address\">Західний регіон</h3>\r\n                    <p class=\"text-justify muted\">\r\n                      <a mat-button class=\"muted\" aria-label=\"call\"\r\n                        href=\"tel:+380985443968\">\r\n                        <mat-icon>phone_android</mat-icon> 098 544 39 68\r\n                      </a>\r\n                    </p>\r\n                    <p class=\"text-justify muted\">\r\n                      <a mat-button class=\"muted\" aria-label=\"email\"\r\n                        href=\"mailto: linoleum.ua@gmail.com\">\r\n                        <mat-icon>mail</mat-icon> linoleum.ua@gmail.com\r\n                      </a>\r\n                    </p>\r\n        </div>\r\n        <div class=\"cell\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.gt-md=\"25\">\r\n                    <h3 class=\"mat-h2 text-align-center address\">м. Київ</h3>\r\n                    <h3 class=\"mat-h3 address\">ТОВ \"Віваді\"</h3>\r\n                    <p class=\"text-justify muted mat-body address\">\r\n                      Адреса: м.Київ, пр. Соборності, 19/офіс 205\r\n                    </p>\r\n                    <p class=\"text-justify muted\">\r\n                      <a mat-button class=\"muted\" aria-label=\"call\"\r\n                        href=\"tel:+380443929290\">\r\n                        <mat-icon>phone</mat-icon> тел/факс 044 392 92 90\r\n                      </a>\r\n                    </p>\r\n                    <p class=\"text-justify muted\">\r\n                      <a mat-button class=\"muted\" aria-label=\"call\"\r\n                        href=\"tel:+380672081302\">\r\n                        <mat-icon>phone_android</mat-icon> 067 208 13 02\r\n                      </a>\r\n                    </p>\r\n                    <p class=\"text-justify muted\">\r\n                      <a mat-button class=\"muted\" aria-label=\"call\"\r\n                        href=\"tel:+380672080606\">\r\n                        <mat-icon>phone_android</mat-icon> 067 208 06 06\r\n                      </a>\r\n                    </p>\r\n                    <p class=\"text-justify muted\">\r\n                      <a mat-button class=\"muted\" aria-label=\"call\"\r\n                        href=\"tel:+3805086521236\">\r\n                        <mat-icon>phone_android</mat-icon> 050 865 21 23\r\n                      </a>\r\n                    </p>\r\n                    <p class=\"text-justify muted\">\r\n                      <a mat-button class=\"muted\" aria-label=\"web\"\r\n                        href=\"https://www.vivadi.com.ua\" rel=\"noreferrer\" target=\"_blank\">\r\n                        <mat-icon>screen_share</mat-icon> www.vivadi.com.ua\r\n                      </a>\r\n                    </p>\r\n        </div>\r\n        <div class=\"cell\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.gt-md=\"25\">\r\n          <h3 class=\"mat-h2 text-align-center address\">м. Одеса</h3>\r\n          <h3 class=\"mat-h3 address\">Котеленець Олена</h3>\r\n          <p class=\"text-justify muted\">\r\n            <a mat-button class=\"muted\"\r\n              href=\"tel:+380973504473\">\r\n              <mat-icon>phone_android</mat-icon> 097 350 44 73\r\n            </a>\r\n          </p>\r\n          <p class=\"text-justify muted\">\r\n            <a mat-button class=\"muted\"\r\n              href=\"tel:+380956848203\">\r\n              <mat-icon>phone_android</mat-icon> 095 684 82 03\r\n            </a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shared/home/home.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/shared/home/home.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/shared/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(catalogService, media) {
        this.catalogService = catalogService;
        this.media = media;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        aos__WEBPACK_IMPORTED_MODULE_4__["init"]();
        this.catalogService.getDescendants('products')
            .subscribe(function (result) {
            _this.descendants = result.data;
        }, function (err) { return console.log('mainPageProducts load error', err); });
    };
    HomeComponent.prototype.onScrollToCenter = function () {
        this.scrollPointCenter.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    HomeComponent.prototype.onScrollTop = function () {
        this.scrollPointTop.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollPointCenter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "scrollPointCenter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollPointTop'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "scrollPointTop", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/shared/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/shared/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_catalog_service__WEBPACK_IMPORTED_MODULE_2__["CatalogService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["ObservableMedia"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/info/info.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/shared/info/info.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\r\n  <div class=\"container\">\r\n    <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n      <div class=\"cell\" fxFlex=\"100\">\r\n        <mat-card>\r\n          <mat-card-header>\r\n                <!--<h1 class=\"mat-display-2\">Вітаємо на сайті Компанії Трайс!</h1>-->\r\n\r\n                <img src=\"/assets/images/trice_logo_full.svg\" alt=\"logo\" class=\"info-logo-trice\">\r\n\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <p class=\"text-justify muted mat-body-1\">\r\n              Компанія <strong>Трайс</strong> є офіційним представником <strong>Graboplast</strong> в Україні,\r\n              одного з найбільших виробників покриття на підлогу європейської якості.\r\n              Широкий спектр нашої продукції може задовільнити потреби найвимогливішого клієнта.</p>\r\n            <p class=\"text-justify muted mat-body-1\">\r\n              Поряд із побутовим, компанія пропонує комерційне та напівкомерційне, спортивне, транспортне,\r\n              сценічне покриття на підлогу, паркет, дизайнерську ПВХ плитку.\r\n              Graboplast, з метою досягнення більшого зросту на ринку, впевнено йде у ногу з часом, за допомогою\r\n              сучасних технологій створює нові типи покриття на підлогу, яке можна використовувати у різних сферах:\r\n              в закладах охорони здоров’я, освіти, розважальних центрах, громадських установах тощо.</p>\r\n            <p class=\"text-justify muted mat-body-1\">\r\n              Наша вимога – висока якість, що відповідає спеціальним нормам і стандартам та конкурентноспроможність.</p>\r\n            <p class=\"text-justify muted mat-body-1\">\r\n              Наші представники надають кваліфіковану консультацію по різним видам покриття на підлогу,\r\n              укладці та подальшому догляду. Індивідуальний підхід до кожного клієнта, враховуючи усі\r\n              побажання та сучасні тенденції сьогодення – це запорука успіху.</p>\r\n            <p class=\"text-justify muted mat-body-2\">\r\n              Запрошуємо Вас до співпраці!\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/info/info.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/shared/info/info.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/info/info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/shared/info/info.component.ts ***!
  \**********************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
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

var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/components/shared/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.scss */ "./src/app/components/shared/info/info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/landing/landing.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/landing/landing.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home-container\">\r\n  <div id=\"home-left\">\r\n    <img src=\"/assets/images/grabo_logo_full2.svg\" id=\"home-logo\" alt=\"logo\">\r\n    <!--<h1 class=\"mat-h4\">покриття на будь-яку підлогу</h1>-->\r\n    <div>\r\n      <a mat-flat-button color=\"primary\" class=\"radius-5\" href=\"/usages/ch\" id=\"home-action\">Підібрати</a>\r\n      <!--<button mat-fab-button class=\"radius-5\" (click)=\"onScroll()\">Down</button>-->\r\n      <button *ngIf=\"media.isActive('lt-md')\" color=\"primary\" mat-mini-fab (click)=\"onScroll()\" id=\"scroll-down-btn\"><mat-icon>keyboard_arrow_down</mat-icon></button>\r\n    </div>\r\n  </div>\r\n  <div id=\"home-right\" #scrollPoint>\r\n    <app-design-searcher [closer]=\"false\"></app-design-searcher>\r\n    <app-crsl></app-crsl>\r\n  </div>\r\n  <div id=\"home-bottom\">\r\n    <div fxLayout=\"row full-width\">\r\n      <div fxFlex=\"10\"></div>\r\n      <div class=\"row wrap full-width\" fxFlex=\"80\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n        <div class=\"cell-padding\" fxFlex=\"1 1 auto\" *ngFor=\"let descendant of descendants\" fxLayout=\"row\">\r\n          <a fxFlex=\"1 1 auto\" mat-stroked-button class=\"radius-5 text-center\" color=\"accent\"\r\n             [routerLink]=\"['/products', 'ch', {outlets: {primary: [descendant._id], breadcrumb: [descendant._id]}}]\"\r\n             [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n             {{descendant.name}}\r\n          </a>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shared/landing/landing.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/landing/landing.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/landing/landing.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/landing/landing.component.ts ***!
  \****************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingComponent = /** @class */ (function () {
    function LandingComponent(catalogService, media) {
        this.catalogService = catalogService;
        this.media = media;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catalogService.getDescendants('products')
            .subscribe(function (result) { return _this.descendants = result.data; }, function (err) { return console.log('mainPageProducts load error', err); });
    };
    LandingComponent.prototype.onScroll = function () {
        this.scrollPoint.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollPoint'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LandingComponent.prototype, "scrollPoint", void 0);
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/shared/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/components/shared/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_catalog_service__WEBPACK_IMPORTED_MODULE_1__["CatalogService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["ObservableMedia"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/page-404/page-404.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/page-404/page-404.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-404 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/shared/page-404/page-404.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/page-404/page-404.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/page-404/page-404.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/page-404/page-404.component.ts ***!
  \******************************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
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

var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-404',
            template: __webpack_require__(/*! ./page-404.component.html */ "./src/app/components/shared/page-404/page-404.component.html"),
            styles: [__webpack_require__(/*! ./page-404.component.scss */ "./src/app/components/shared/page-404/page-404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/components/shared/product-item-brief/product-item-brief.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-brief/product-item-brief.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>\r\n    <div class=\"mat-card-wide-image\" fxLayout=\"row\">\r\n      <div *ngIf=\"product\" fxFlex=\"100\">\r\n\r\n        <img *ngIf=\"media.isActive('gt-sm')\" class=\"responsive-image-stretch\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_400,h_200,f_auto/' +\r\n              product.briefImage}}\"\r\n             alt=\"Image\">\r\n        <img *ngIf=\"media.isActive('sm')\" class=\"responsive-image-stretch\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_460,h_230,f_auto/' +\r\n              product.briefImage}}\"\r\n             alt=\"Image\">\r\n        <img *ngIf=\"media.isActive('xs')\" class=\"responsive-image-stretch\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_590,h_295,f_auto/' +\r\n            product.briefImage}}\"\r\n             alt=\"Image\">\r\n      </div>\r\n\r\n      <div *ngIf=\"descendant\" fxFlex=\"100\">\r\n\r\n        <img *ngIf=\"media.isActive('gt-sm')\" class=\"responsive-image-stretch\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_400,h_200,f_auto/' +\r\n              descendant.assets[0]}}\"\r\n             alt=\"Image\">\r\n        <img *ngIf=\"media.isActive('sm')\" class=\"responsive-image-stretch\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_460,h_230,f_auto/' +\r\n              descendant.assets[0]}}\"\r\n             alt=\"Image\">\r\n        <img *ngIf=\"media.isActive('xs')\" class=\"responsive-image-stretch\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_590,h_295,f_auto/' +\r\n            descendant.assets[0]}}\"\r\n             alt=\"Image\">\r\n      </div>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n  <mat-card-actions fxLayout=\"row\">\r\n    <div fxFlex>\r\n      <!--using with catalog, when no subcategories (product level)\r\n      category_id for breadcrumb-->\r\n      <a *ngIf=\"!descendant && category_id\" mat-button\r\n         [routerLink]=\"['/products', 'ch', {outlets: {primary: [category_id, 'details', product._id],\r\n         breadcrumb: [category_id, 'details', product._id]}}]\"\r\n         [queryParams]=\"{name: product.name}\"\r\n         [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        {{product.name}}\r\n      </a>\r\n      <!--using with dashboard-->\r\n      <a *ngIf=\"!descendant && !category_id\" mat-button\r\n         [routerLink]=\"['/dashboard', 'products_editor_edit', parentCategory_id, parentCategoryName, product._id]\"\r\n         [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        {{product.name}}\r\n      </a>\r\n      <!--using with catalog, when subcategories present-->\r\n      <a *ngIf=\"descendant\" mat-button\r\n         [routerLink]=\"['/products', 'ch', {outlets: {primary: [descendant._id], breadcrumb: [descendant._id]}}]\"\r\n         [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        {{descendant.name}}\r\n      </a>\r\n    </div>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/shared/product-item-brief/product-item-brief.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-brief/product-item-brief.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/product-item-brief/product-item-brief.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-brief/product-item-brief.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductItemBriefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemBriefComponent", function() { return ProductItemBriefComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductItemBriefComponent = /** @class */ (function () {
    function ProductItemBriefComponent(media) {
        this.media = media;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
    }
    ProductItemBriefComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductItemBriefComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductItemBriefComponent.prototype, "category_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductItemBriefComponent.prototype, "parentCategory_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductItemBriefComponent.prototype, "parentCategoryName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductItemBriefComponent.prototype, "descendant", void 0);
    ProductItemBriefComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-item-brief',
            template: __webpack_require__(/*! ./product-item-brief.component.html */ "./src/app/components/shared/product-item-brief/product-item-brief.component.html"),
            styles: [__webpack_require__(/*! ./product-item-brief.component.scss */ "./src/app/components/shared/product-item-brief/product-item-brief.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]])
    ], ProductItemBriefComponent);
    return ProductItemBriefComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/product-item-detail/product-item-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-detail/product-item-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n  <!--<div class=\"item\" fxFlex>-->\r\n    <mat-card *ngIf=\"product\" [ngClass]=\"{'mat-elevation-z0': media.isActive('gt-sm')}\">\r\n      <mat-card-header>\r\n        <h1 class=\"mat-display-2\">{{product.name}}</h1>\r\n\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div class=\"row\" fxLayout>\r\n          <div class=\"cell\" fxFlex>\r\n            <p class=\"mat-body text-justify\" [innerHTML]=\"product.description\"></p>\r\n          </div>\r\n        </div>\r\n            <div class=\"row\" fxLayout=\"row\">\r\n              <div class=\"cell margin-bottom\" fxFlex.lt-xl=\"100\" fxFlex.gt-md=\"65\">\r\n\r\n                <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n                    <div class=\"cell\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\r\n                          <img class=\"responsive-image\" src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                      '/c_fill,w_535,h_350,f_auto/' +\r\n                      product.mainImage}}\"\r\n                                alt=\"designImage\">\r\n                      </div>\r\n                </div>\r\n\r\n                <div class=\"row padding-bottom\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                  <div class=\"cell\" fxFlex.gt-xs=\"33\" fxFlex.xs=\"100\"  *ngFor=\"let asset of product.assets\">\r\n                    <!-- <div fxFlex=\"100\"> -->\r\n                      <img *ngIf=\"media.isActive('gt-xs')\" (click)=\"openDialog(asset, '/c_fill,w_1100,h_550,f_auto/', null)\"\r\n                          class=\"responsive-image hover-cursor\" src=\"{{\r\n                          config.imgPath +\r\n                          config.cloudinary.cloud_name +\r\n                          '/c_fill,w_260,h_170,f_auto/' +\r\n                          asset}}\"\r\n                                        alt=\"designImage\">\r\n                      <img *ngIf=\"media.isActive('xs')\" (click)=\"openDialog(asset, '/c_fill,w_1100,h_550,f_auto/', null)\"\r\n                          class=\"responsive-image hover-cursor\" src=\"{{\r\n                          config.imgPath +\r\n                          config.cloudinary.cloud_name +\r\n                          '/c_fill,w_535,h_350,f_auto/' +\r\n                          asset}}\"\r\n                          alt=\"designImage\">\r\n                    <!-- </div> -->\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row padding-bottom\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                  <div class=\"cell padding-bottom\" fxFlex.xs=\"20\" fxFlex.sm=\"16.6\" fxFlex.gt-sm=\"14.28\" *ngFor=\"let asset of product.techAssets\" \r\n                  fxLayoutAlign=\"center center\">\r\n                    <img fxflex class=\"product-detail-image\" src=\"{{\r\n                  config.imgPath +\r\n                  config.cloudinary.cloud_name +\r\n                  '/c_fill,w_55,h_55,f_auto/' +\r\n                  asset}}\"\r\n                          alt=\"technical Image\">\r\n                  </div>\r\n                </div>\r\n      \r\n                <div class=\"row padding-bottom\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"cell padding-bottom\" fxFlex.xs=\"33\" fxFlex.sm=\"25\" fxFlex.gt-sm=\"20\" *ngFor=\"let asset of product.certAssets\"\r\n                    fxLayoutAlign=\"center center\">\r\n                      <img class=\"responsive-image hover-cursor\" (click)=\"openDialog(asset, '/c_fill,w_300,h_450,f_auto/', 'Сертифікат')\" src=\"{{\r\n                    config.imgPath +\r\n                    config.cloudinary.cloud_name +\r\n                    '/c_fill,w_100,h_150,f_auto/' +\r\n                    asset}}\" alt=\"certificate\">\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n        \r\n              <div class=\"cell margin-bottom\" fxFlex.lt-xl=\"100\" fxFlex.gt-md=\"35\">\r\n                <div class=\"row\" fxLayout=\"row\">\r\n                  <div class=\"cell\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.gt-md=\"100\">\r\n                    <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n                      <div class=\"cell\" fxFlex=\"100\">\r\n                        <H2 class=\"mat-h2 text-align-center\">Рекомендовані області застосування</H2>\r\n                      </div>\r\n                      <div class=\"cell\" fxFlex=\"100\">\r\n                        <mat-accordion *ngIf=\"recommendations\">\r\n                          <mat-expansion-panel *ngFor=\"let recommendation of recommendations\">\r\n                            <mat-expansion-panel-header>\r\n                              <mat-panel-title>\r\n                                Сфера застосування\r\n                              </mat-panel-title>\r\n                              <mat-panel-description>\r\n                                {{recommendation._id}}\r\n                              </mat-panel-description>\r\n                            </mat-expansion-panel-header>\r\n                            <mat-list>\r\n                              <mat-list-item *ngFor=\"let sub of recommendation.sub\">\r\n                                <mat-icon matListIcon>done</mat-icon>\r\n                                <h3 matLine>\r\n                                  <a mat-button\r\n                                    [routerLink]=\"['/usages/ch', sub._id]\"\r\n                                    [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n\r\n                                    {{sub.name}}\r\n                                  </a></h3>\r\n                              </mat-list-item>\r\n                            </mat-list>\r\n                          </mat-expansion-panel>\r\n                        </mat-accordion>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"cell\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.gt-md=\"100\">\r\n                  <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n                    <div class=\"cell\" fxFlex=\"100\">\r\n                      <H2 class=\"mat-h2 text-align-center\">Технічні характеристики</H2>\r\n                    </div>\r\n                    <div class=\"cell\" class=\"padding-bottom\" fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n                      <table mat-table [dataSource]=\"product.techDescriptions\" class=\"mat-elevation-z0\" fxFlex=\"100\">\r\n                      <!-- fxFlex.xs=\"1 1 300px\"\r\n                      fxFlex.gt-xs=\"1 1 250px\"\r\n                      \r\n                      > -->\r\n\r\n                        <ng-container matColumnDef=\"techName\">\r\n                          <!--<th mat-header-cell *matHeaderCellDef> Характеристики </th>-->\r\n                          <td mat-cell *matCellDef=\"let element\"> {{element.techName}} </td>\r\n                        </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"techUnit\">\r\n                          <!--<th mat-header-cell *matHeaderCellDef> Одиниці </th>-->\r\n                          <td mat-cell *matCellDef=\"let element\"> {{element.techUnit}} </td>\r\n                        </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"techValue\">\r\n                          <!--<th mat-header-cell *matHeaderCellDef>  </th>-->\r\n                          <td mat-cell *matCellDef=\"let element\"> {{element.techValue}} </td>\r\n                        </ng-container>\r\n\r\n                        <!--<tr mat-header-row *matHeaderRowDef=\"['techName', 'techUnit', 'techValue']\"></tr>-->\r\n                        <tr mat-row *matRowDef=\"let row; columns: ['techName', 'techUnit', 'techValue']\"></tr>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n        <div class=\"row\" fxLayout=\"row\">\r\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"33\" fxFlex.md=\"25\" fxFlex.gt-md=\"20\" class=\"cell\"\r\n               fxLayout fxLayoutAlign=\"center center\"\r\n               *ngFor=\"let des of product.designs\">\r\n            <mat-card *ngIf=\"media.isActive('xs')\" class=\"only-padding-bottom\">\r\n              <mat-card-header fxLayoutAlign=\"center center\">\r\n                <mat-card-subtitle class=\"design-image-title\">{{des}}</mat-card-subtitle>\r\n              </mat-card-header>\r\n              <mat-card-content fxLayoutAlign=\"center center\">\r\n                 <img *ngIf=\"designs\" class=\"responsive-image hover-cursor\"\r\n                     (click)=\"openDialog(getDesign(des).image, '/c_fill,w_650,h_650,f_auto/', getDesign(des)._id)\" src=\"{{\r\n                    config.imgPath +\r\n                    config.cloudinary.cloud_name +\r\n                    '/c_fill,w_250,h_250,f_auto/' +\r\n                    getDesign(des).image}}\"\r\n                     alt=\"design\">\r\n              </mat-card-content>\r\n            </mat-card>\r\n\r\n            <mat-card *ngIf=\"media.isActive('gt-xs')\" class=\"only-padding-bottom\" fxFlex.gt-xs=\"100\">\r\n              <mat-card-header fxLayoutAlign=\"center center\">\r\n                <mat-card-subtitle class=\"design-image-title\">{{des}}</mat-card-subtitle>\r\n              </mat-card-header>\r\n              <mat-card-content fxLayoutAlign=\"center center\">\r\n                <img *ngIf=\"designs\" class=\"responsive-image-stretch hover-cursor\"\r\n                     (click)=\"openDialog(getDesign(des).image, '/c_fill,w_650,h_650,f_auto/', getDesign(des)._id)\" src=\"{{\r\n                    config.imgPath +\r\n                    config.cloudinary.cloud_name +\r\n                    '/c_fill,w_180,h_180,f_auto/' +\r\n                    getDesign(des).image}}\"\r\n                     alt=\"design\">\r\n              </mat-card-content>\r\n            </mat-card>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </mat-card-content>\r\n      <!--<mat-card-actions>-->\r\n      <!--</mat-card-actions>-->\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/product-item-detail/product-item-detail.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-detail/product-item-detail.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/product-item-detail/product-item-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-detail/product-item-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProductItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemDetailComponent", function() { return ProductItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _services_design_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/design.service */ "./src/app/services/design.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../design-popup/design-popup.component */ "./src/app/components/shared/design-popup/design-popup.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductItemDetailComponent = /** @class */ (function () {
    function ProductItemDetailComponent(designService, dialog, media, productService, route) {
        this.designService = designService;
        this.dialog = dialog;
        this.media = media;
        this.productService = productService;
        this.route = route;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
    }
    ProductItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.designService.getDesigns()
            .subscribe(function (result) {
            _this.designs = result.data;
        }, function (err) { return console.log('Помилка завантеження дизайнів', err); });
    };
    ProductItemDetailComponent.prototype.ngOnChanges = function (changes) {
        var productChange = changes.product;
        if (productChange) {
            this.getRecommendations();
        }
    };
    ProductItemDetailComponent.prototype.getRecommendations = function () {
        var _this = this;
        this.productService.getRecommendationsByIds(this.product.recommendations)
            .subscribe(function (result) {
            _this.recommendations = result.data;
        }, function (err) { return console.log('Помилка завантеження рекомендацій', err); });
    };
    // takes design object (from local designs array) by design_id
    ProductItemDetailComponent.prototype.getDesign = function (_id) {
        return this.designs.filter(function (design) { return design._id === _id; })[0];
    };
    ProductItemDetailComponent.prototype.openDialog = function (image, cloudinaryOptions, title) {
        var imageObject = {
            image: image,
            cloudinaryOptions: cloudinaryOptions,
            title: title
        };
        var dialogRef = this.dialog.open(_design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_4__["DesignPopupComponent"], {
            // height: '80vh',
            data: imageObject,
            panelClass: 'custom-dialog-container'
        });
        dialogRef.afterClosed()
            .subscribe(function (result) {
        }, function (err) { return console.log('err delete', err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductItemDetailComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductItemDetailComponent.prototype, "category_id", void 0);
    ProductItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-item-detail',
            template: __webpack_require__(/*! ./product-item-detail.component.html */ "./src/app/components/shared/product-item-detail/product-item-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-item-detail.component.scss */ "./src/app/components/shared/product-item-detail/product-item-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_design_service__WEBPACK_IMPORTED_MODULE_2__["DesignService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["ObservableMedia"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], ProductItemDetailComponent);
    return ProductItemDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/shared.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/shared/shared.module.ts ***!
  \****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _page_404_page_404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-404/page-404.component */ "./src/app/components/shared/page-404/page-404.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/shared/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var _design_item_design_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./design-item/design-item.component */ "./src/app/components/shared/design-item/design-item.component.ts");
/* harmony import */ var _product_item_brief_product_item_brief_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-item-brief/product-item-brief.component */ "./src/app/components/shared/product-item-brief/product-item-brief.component.ts");
/* harmony import */ var _product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-item-detail/product-item-detail.component */ "./src/app/components/shared/product-item-detail/product-item-detail.component.ts");
/* harmony import */ var _design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./design-popup/design-popup.component */ "./src/app/components/shared/design-popup/design-popup.component.ts");
/* harmony import */ var _crsl_crsl_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./crsl/crsl.component */ "./src/app/components/shared/crsl/crsl.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/components/shared/feedback/feedback.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-recaptcha/forms */ "./node_modules/ng-recaptcha/forms.js");
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/components/shared/gallery/gallery.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/components/shared/contacts/contacts.component.ts");
/* harmony import */ var _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./downloads/downloads.component */ "./src/app/components/shared/downloads/downloads.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./info/info.component */ "./src/app/components/shared/info/info.component.ts");
/* harmony import */ var _usages_usages_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./usages/usages.component */ "./src/app/components/shared/usages/usages.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/shared/header/header.component.ts");
/* harmony import */ var _design_searcher_design_searcher_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./design-searcher/design-searcher.component */ "./src/app/components/shared/design-searcher/design-searcher.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/components/shared/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { CloudinaryModule } from '@cloudinary/angular-5.x';



















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                // CloudinaryModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_15__["RecaptchaModule"],
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_16__["RecaptchaFormsModule"]
            ],
            exports: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"],
                _page_404_page_404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _design_item_design_item_component__WEBPACK_IMPORTED_MODULE_8__["DesignItemComponent"],
                _product_item_brief_product_item_brief_component__WEBPACK_IMPORTED_MODULE_9__["ProductItemBriefComponent"],
                _product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductItemDetailComponent"],
                _crsl_crsl_component__WEBPACK_IMPORTED_MODULE_12__["CrslComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_13__["FeedbackComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
                _design_searcher_design_searcher_component__WEBPACK_IMPORTED_MODULE_23__["DesignSearcherComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_24__["LandingComponent"],
            ],
            declarations: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"],
                _page_404_page_404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmPopupComponent"],
                _design_item_design_item_component__WEBPACK_IMPORTED_MODULE_8__["DesignItemComponent"],
                _product_item_brief_product_item_brief_component__WEBPACK_IMPORTED_MODULE_9__["ProductItemBriefComponent"],
                _product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductItemDetailComponent"],
                _design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_11__["DesignPopupComponent"],
                _crsl_crsl_component__WEBPACK_IMPORTED_MODULE_12__["CrslComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_13__["FeedbackComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_17__["GalleryComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_18__["ContactsComponent"],
                _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_19__["DownloadsComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_20__["InfoComponent"],
                _usages_usages_component__WEBPACK_IMPORTED_MODULE_21__["UsagesComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
                _design_searcher_design_searcher_component__WEBPACK_IMPORTED_MODULE_23__["DesignSearcherComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_24__["LandingComponent"],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/components/shared/usages/usages.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/usages/usages.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\" fxLayout=\"row\">\r\n\r\n      <div class=\"cell padding-bottom\" fxFlex=\"100\">\r\n        <!--<mat-card>-->\r\n        <!--<mat-card-title>-->\r\n        <!--<p>Ми допоможемо підібрати покриття згідно ваших потреб</p>-->\r\n        <!--</mat-card-title>-->\r\n        <!--<mat-card-content>-->\r\n        <div class=\"row\" fxLayout=\"row\">\r\n          <div class=\"cell\" fxHide.xs fxFlex.gt-xs=\"5\"></div>\r\n          <div class=\"cell\" fxFlex.xs=\"100\" fxFlex.gt-xs=\"95\">\r\n            <h2 class=\"mat-h2\">Сфера використання: <span class=\"muted\">{{recommendation_parent}}</span></h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" fxLayout=\"row\">\r\n          <div class=\"cell\" fxHide.xs fxFlex.gt-xs=\"5\"></div>\r\n          <div class=\"cell-padding\" fxFlex.xs=\"100\" fxFlex.gt-xs=\"95\">\r\n            <form [formGroup]=\"recomForm\" novalidate>\r\n              <mat-form-field>\r\n                <mat-select formControlName=\"recommendations\" placeholder=\"Призначення покриття\" (selectionChange)=\"onSelectCategory($event)\">\r\n                  <mat-optgroup *ngFor=\"let recommendation of recommendations\" [label]=\"recommendation._id\"\r\n                                [disabled]>\r\n                    <mat-option *ngFor=\"let sub of recommendation.sub\" [value]=\"sub._id\">\r\n                      {{sub.name}}\r\n                    </mat-option>\r\n                  </mat-optgroup>\r\n                </mat-select>\r\n\r\n                <!--<mat-select formControlName=\"recom\" placeholder=\"Призначення покриття\" (selectionChange)=\"onSelectCategory($event)\">-->\r\n                <!--<mat-option *ngFor=\"let recommendation of recommendations\" [value]=\"recommendation\">-->\r\n                <!--{{recommendation}}-->\r\n                <!--</mat-option>-->\r\n                <!--</mat-select>-->\r\n              </mat-form-field>\r\n            </form>\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <!--</mat-card-content>-->\r\n        <!--</mat-card>-->\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <mat-tab-group dynamicHeight [backgroundColor]=\"'accent'\" fxFlex=\"100\">\r\n        <mat-tab *ngFor=\"let product of products\" [label]=\"product.name\">\r\n          <div class=\"container padding-bottom-3\">\r\n            <mat-card>\r\n              <mat-card-subtitle>\r\n                <a mat-button\r\n                   [routerLink]=\"['/products', 'ch', {outlets: {primary: [product.parent[0], 'details', product._id],\r\n                    breadcrumb: [product.parent[0], 'details', product._id]}}]\"\r\n                   [queryParams]=\"{name: product.name}\"\r\n                   [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                  {{product.name}}\r\n                </a>\r\n              </mat-card-subtitle>\r\n              <div class=\"row\" fxLayout=\"row\">\r\n                <div fxFlex=\"100\" class=\"cell text-justify\" [innerHTML]=\"product.description\"></div>\r\n\r\n                <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.gt-sm=\"33\" class=\"cell\"\r\n                     fxLayout fxLayoutAlign=\"center center\"\r\n                     *ngFor=\"let productAsset of product.assets\">\r\n                  <mat-card *ngIf=\"media.isActive('xs')\" class=\"no-padding\">\r\n                    <mat-card-header fxLayoutAlign=\"center center\">\r\n                      <!--<mat-card-subtitle class=\"design-image-title\">{{galleryItem}}</mat-card-subtitle>-->\r\n                    </mat-card-header>\r\n                    <mat-card-content fxLayoutAlign=\"center center\">\r\n\r\n                      <img *ngIf=\"productAsset\" class=\"responsive-image hover-cursor\"\r\n                           (click)=\"openDialog(productAsset, product.name)\"\r\n                           src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                      '/c_fill,w_590,h_295,f_auto/' +\r\n                      productAsset}}\"\r\n                           alt=\"design\">\r\n                    </mat-card-content>\r\n                  </mat-card>\r\n\r\n\r\n                  <mat-card *ngIf=\"media.isActive('gt-xs')\" class=\"no-padding\" fxFlex.gt-xs=\"100\">\r\n                    <mat-card-header fxLayoutAlign=\"center center\">\r\n                      <!--<mat-card-subtitle class=\"design-image-title\">{{galleryItem}}</mat-card-subtitle>-->\r\n                    </mat-card-header>\r\n                    <mat-card-content fxLayoutAlign=\"center center\">\r\n                      <img *ngIf=\"productAsset\" class=\"responsive-image-stretch hover-cursor\"\r\n                           (click)=\"openDialog(productAsset, product.name)\"\r\n                           src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                      '/c_fill,w_350,h_175,f_auto/' +\r\n                      productAsset}}\"\r\n                           alt=\"design\">\r\n                    </mat-card-content>\r\n                  </mat-card>\r\n                </div>\r\n              </div>\r\n            </mat-card>\r\n          </div>\r\n        </mat-tab>\r\n\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/usages/usages.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/usages/usages.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/usages/usages.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/usages/usages.component.ts ***!
  \**************************************************************/
/*! exports provided: UsagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsagesComponent", function() { return UsagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../design-popup/design-popup.component */ "./src/app/components/shared/design-popup/design-popup.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UsagesComponent = /** @class */ (function () {
    function UsagesComponent(dialog, media, productService, route) {
        this.dialog = dialog;
        this.media = media;
        this.productService = productService;
        this.route = route;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"];
    }
    UsagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recomForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            recommendations: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]([])
        });
        this.productService.getRecommendations().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (result) {
            _this.recommendations = result.data;
            return _this.route.paramMap;
        }))
            .subscribe(function (paramMap) {
            _this.recommendation_id = paramMap.get('_id');
            if (!_this.recommendation_id) {
                _this.recomForm.get('recommendations').setValue(_this.recommendations[3].sub[6]._id);
                _this.onSelectCategory({ value: _this.recommendations[3].sub[6]._id });
            }
            else {
                _this.recomForm.get('recommendations').setValue(_this.recommendation_id);
                _this.onSelectCategory({ value: _this.recommendation_id });
            }
        }, function (err) { return console.log('Помилка', err); });
    };
    UsagesComponent.prototype.onSelectCategory = function (event) {
        var _this = this;
        var recommendation = event.value;
        this.productService.getRecommendationsByIds([recommendation]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (result) {
            _this.recommendation_parent = result.data[0]._id;
            return _this.productService.getProductsByRecommendation(recommendation);
        }))
            .subscribe(function (result) {
            _this.products = result.data;
        }, function (err) { return console.log('error get products by recommendation', err); });
    };
    UsagesComponent.prototype.openDialog = function (image, title) {
        var imageObject = {
            image: image,
            cloudinaryOptions: '/c_fill,w_1100,h_550,f_auto/',
            title: title
        };
        var dialogRef = this.dialog.open(_design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_4__["DesignPopupComponent"], {
            // width: '400px',
            data: imageObject,
            panelClass: 'custom-dialog-container'
        });
        dialogRef.afterClosed()
            .subscribe(function (result) {
        }, function (err) { return console.log('err delete', err); });
    };
    UsagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usages',
            template: __webpack_require__(/*! ./usages.component.html */ "./src/app/components/shared/usages/usages.component.html"),
            styles: [__webpack_require__(/*! ./usages.component.scss */ "./src/app/components/shared/usages/usages.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], UsagesComponent);
    return UsagesComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService) {
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var requiredRole = next.data.auth; // from routing.module
        return this.userService.userCheckRole(requiredRole).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (permission) { return permission.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false); }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { MatIconModule } from '@angular/material/icon';

var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/catalog.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/catalog.service.ts ***!
  \*********************************************/
/*! exports provided: CatalogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogService", function() { return CatalogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatalogService = /** @class */ (function () {
    function CatalogService(http) {
        this.http = http;
    }
    CatalogService.prototype.getCategoryById = function (_id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    _id: _id
                } })
        };
        return this.http.get('api/catalog/get-category-by-id', httpOptions);
    };
    CatalogService.prototype.getDescendants = function (item) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    item: item
                } })
        };
        return this.http.get('api/catalog/get-descendants', httpOptions);
    };
    CatalogService.prototype.getAllDescendants = function (category, depth) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    category: category, depth: depth
                } })
        };
        return this.http.get('api/catalog/get-all-descendants', httpOptions);
    };
    CatalogService.prototype.getMainMenu = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/catalog/get-main-menu', httpOptions);
    };
    // New
    CatalogService.prototype.getAllParents = function (category_id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('category_id', category_id)
        };
        return this.http.get('api/catalog/get-all-parents', httpOptions);
    };
    CatalogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CatalogService);
    return CatalogService;
}());



/***/ }),

/***/ "./src/app/services/design.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/design.service.ts ***!
  \********************************************/
/*! exports provided: DesignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignService", function() { return DesignService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DesignService = /** @class */ (function () {
    function DesignService(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    DesignService.prototype.getDesigns = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/design/get-designs', httpOptions);
    };
    DesignService.prototype.getDesignById = function (_id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/design/get-design-by-id/' + _id, httpOptions);
    };
    DesignService.prototype.designAddImagesBatch = function (file, design_id, structure) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('design_id', design_id);
        formData.append('structure', structure);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/design/add-images-batch', formData, httpOptions);
    };
    DesignService.prototype.designAddImage = function (file, design_id) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('design_id', design_id);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/design/add-image', formData, httpOptions);
    };
    DesignService.prototype.designUpsert = function (design) {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.post('api/design/upsert', design, httpOptions);
    };
    DesignService.prototype.designDelete = function (_id) {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.delete('api/design/delete/' + _id, httpOptions);
    };
    DesignService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], DesignService);
    return DesignService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = /** @class */ (function () {
    function ProductService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_4__["config"];
    }
    ProductService.prototype.getProductsWithGallery = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/product/get-products-with-gallery', httpOptions);
    };
    ProductService.prototype.getProductsByDesignId = function (design_id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('design_id', design_id)
        };
        return this.http.get('api/product/get-products-by-design-id', httpOptions);
    };
    ProductService.prototype.getRecommendations = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/product/get-recommendations', httpOptions);
    };
    ProductService.prototype.getRecommendationsByIds = function (ids) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('ids', ids)
        };
        return this.http.get('api/product/get-recommendations-by-ids', httpOptions);
    };
    ProductService.prototype.getProductsByRecommendation = function (recommendation) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('recommendation', recommendation)
        };
        return this.http.get('api/product/get-products-by-recommendation', httpOptions);
    };
    ProductService.prototype.getProducts = function (category) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('category', category)
        };
        return this.http.get('api/product/get-products', httpOptions);
    };
    ProductService.prototype.getMainPageProducts = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/product/get-main-page-products', httpOptions);
    };
    ProductService.prototype.productAddImage = function (file, sku) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('sku', sku);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-image', formData, httpOptions);
    };
    ProductService.prototype.productCreate = function (product) {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.post('api/product/create', product, httpOptions);
    };
    ProductService.prototype.productEdit = function (product) {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.put('api/product/edit', product, httpOptions);
    };
    ProductService.prototype.productDelete = function (_id) {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.delete('api/product/delete/' + _id, httpOptions);
    };
    ProductService.prototype.checkFile = function (file) {
        if (!file) {
            return ({ success: false, message: 'Файл не вибрано' });
        }
        else if (file.size > 10485760) { // 10 * 1024 * 1024
            return ({ success: false, message: 'Розмір файлу повинен бути менше 10Мб' });
        }
        else if (file.type !== 'image/jpg' &&
            file.type !== 'image/jpe' &&
            file.type !== 'image/gif' &&
            file.type !== 'image/jpeg' &&
            file.type !== 'image/bmp' &&
            file.type !== 'image/png' &&
            file.type !== 'image/svg+xml' &&
            file.type !== 'image/webp') {
            return ({ success: false, message: 'Виберіть інший тип файлу' });
        }
        else {
            return ({ success: true, message: '' });
        }
    };
    // New
    ProductService.prototype.getProductsByCategory = function (category, displayFilter) {
        // if (!publishFilter) {
        //
        // }
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('category', category)
                .set('displayFilter', displayFilter)
        };
        return this.http.get('api/product/get-products-by-category', httpOptions);
    };
    ProductService.prototype.getProductById = function (_id, displayFilter) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('_id', _id)
                .set('displayFilter', displayFilter)
        };
        return this.http.get('api/product/get-product-by-id', httpOptions);
    };
    ProductService.prototype.productAddMainImage = function (file, _id) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-main-image', formData, httpOptions);
    };
    ProductService.prototype.productAddBriefImage = function (file, _id) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-brief-image', formData, httpOptions);
    };
    ProductService.prototype.productAddAssets = function (file, _id) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-assets', formData, httpOptions);
    };
    ProductService.prototype.getTechAssets = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ success: true, message: '', data: this.config.techAssets });
    };
    ProductService.prototype.getCertAssets = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ success: true, message: '', data: this.config.certAssets });
    };
    ProductService.prototype.productAddTechAssets = function (file, _id) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-techassets', formData, httpOptions);
    };
    ProductService.prototype.productUpsert = function (product) {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.post('api/product/upsert', product, httpOptions);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharedService = /** @class */ (function () {
    function SharedService(http) {
        this.http = http;
        this._shareEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.shareEvent$ = this._shareEvent.asObservable();
    }
    // sharing data between components
    SharedService.prototype.sharingEvent = function (x) {
        this._shareEvent.next(x);
    };
    SharedService.prototype.getSharingEvent = function () {
        return this.shareEvent$;
    };
    // sending feedback message
    SharedService.prototype.sendFeedbackMessage = function (feedback, recaptcha) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: {
                    recaptcha: recaptcha
                } })
        };
        return this.http.post('api/shared/send-feedback-message', feedback, httpOptions);
    };
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SharedService);
    return SharedService;
}());

// ['updateDesigns'] design-item-component => design-editor-component
// ['closeSidenav'] design-popup-component => app-component


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this._logging = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
    }
    UserService.prototype.userPasswordResetEmail = function (email, recaptcha) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    email: email, recaptcha: recaptcha
                } })
        };
        return this.http.get('api/user/password-reset-check-email', httpOptions);
    };
    UserService.prototype.userPasswordResetCode = function (code, codeToken) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': codeToken
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    code: code,
                } })
        };
        return this.http.get('api/user/password-reset-check-code', httpOptions);
    };
    UserService.prototype.userPasswordReset = function (password, passwordResetToken) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': passwordResetToken
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    password: password,
                } })
        };
        return this.http.get('api/user/password-reset', httpOptions);
    };
    UserService.prototype.userEmailVerification = function () {
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.get('api/user/email-verification-send', httpOptions);
    };
    UserService.prototype.userCreate = function (user, recaptcha) {
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    recaptcha: recaptcha
                } })
        };
        return this.http.post('api/user/create', user, httpOptions);
    };
    UserService.prototype.userLogin = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    login: user.login,
                    password: user.password
                } })
        };
        return this.http.get('api/user/login', httpOptions);
    };
    UserService.prototype.userGetProfile = function () {
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
        };
        return this.http.get('api/user/profile', httpOptions);
    };
    UserService.prototype.userCheckRole = function (role) {
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: "role=" + role })
        };
        return this.http.get('api/user/role', httpOptions);
    };
    UserService.prototype.userEdit = function (data) {
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.put('api/user/edit', data, httpOptions);
    };
    UserService.prototype.userEditAvatar = function (file) {
        // uploadPic(file, user) {
        var formData = new FormData();
        // for (let i = 0; i < files.length; i++) {
        //   formData.append('file[]', files[i]);
        // }
        formData.append('file', file, file.name);
        // if role manager or admin, allow to change avatar for user_id
        // if not, user changes it for itself
        // let user_id = user._id;
        // formData.append('user_id', user_id);
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                // 'Content-Type':  'application/json',
                'Authorization': token
            })
        };
        return this.http.put('api/user/edit-avatar', formData, httpOptions);
    };
    UserService.prototype.checkFile = function (eventTarget) {
        if (!eventTarget.files[0]) {
            return ({ success: false, message: 'Виберіть файл' });
        }
        else if (eventTarget.files[0].size > 8400000) {
            return ({ success: false, message: 'Розмір файлу повинен бути менше 8Мб' });
        }
        else if (eventTarget.files[0].type !== 'image/jpg' &&
            eventTarget.files[0].type !== 'image/jpe' &&
            eventTarget.files[0].type !== 'image/jpeg' &&
            eventTarget.files[0].type !== 'image/bmp' &&
            eventTarget.files[0].type !== 'image/png' &&
            eventTarget.files[0].type !== 'image/webp') {
            return ({ success: false, message: 'Виберіть інший тип файлу' });
        }
        else {
            return ({ success: true, message: '' });
        }
    };
    // create Observable for user login watch
    UserService.prototype.userLocalLogin = function (token) {
        if (token) {
            this.userLocalSetToken('token', token);
        }
        var user = this.userLocalGetCredentials('token');
        this._logging.next(user);
    };
    UserService.prototype.userLocalLogout = function () {
        this.userLocalRemoveToken('token');
        var user = null;
        this._logging.next(user);
    };
    UserService.prototype.getUserLocal = function () {
        return this._logging.asObservable();
    };
    // end of observable
    /**
    * Token manipulations
    */
    UserService.prototype.userLocalSetToken = function (tokenKey, token) {
        localStorage.setItem(tokenKey, token);
    };
    UserService.prototype.userLocalRemoveToken = function (tokenKey) {
        localStorage.removeItem(tokenKey);
    };
    UserService.prototype.userLocalCheckExpiration = function (tokenKey) {
        var token = localStorage.getItem(tokenKey);
        if (!token) {
            return true;
        }
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        if (helper.isTokenExpired(token)) {
            this.userLocalRemoveToken(tokenKey);
        }
        return helper.isTokenExpired(token);
    };
    UserService.prototype.userLocalGetToken = function (tokenKey) {
        var token = localStorage.getItem(tokenKey);
        if (!token) {
            return '';
        }
        if (this.userLocalCheckExpiration(tokenKey)) {
            return '';
        }
        return token;
    };
    UserService.prototype.userLocalGetCredentials = function (tokenKey) {
        var token = this.userLocalGetToken(tokenKey);
        if (!token) {
            return null;
        }
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        return helper.decodeToken(token).sub;
    };
    UserService.prototype.userLocalGetExpirationDate = function (tokenKey) {
        var token = localStorage.getItem(tokenKey);
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        return helper.getTokenExpirationDate(token);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.matchPassword = function (abstractControl) {
        var password = abstractControl.get('password').value;
        var passwordConfirm = abstractControl.get('passwordConfirm').value;
        if (password === passwordConfirm) {
            abstractControl.get('passwordConfirm').setErrors(null);
            return null;
        }
        else {
            /**
             * set error to 'passwordConfirm' element
             */
            abstractControl.get('passwordConfirm').setErrors({ mismatch: true });
            /**
             * and don't set error (null) to formGroup
             */
            return null;
        }
    };
    ValidateService.prototype.maxTries = function (abstractControl) {
        // set error  to form control
        // !! abstractControl.value
        abstractControl.get('code').setErrors({ maxTries: true });
        return null; // set no errors to form
        // return {maxTries: true};
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    cloud_name: 'hq79jiuvb',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




// import 'hammerjs';
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .then(function () {
    if ('serviceWorker' in navigator && _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        navigator.serviceWorker.register('ngsw-worker.js');
    }
})
    .catch(function (err) { return console.log('bootstrapModule error', err); });
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .then(() => {
//      if (environment.production && 'serviceWorker' in navigator) {
//         navigator.serviceWorker.getRegistration()
//           .then(active => !active && navigator.serviceWorker.register('/ngsw-worker.js'))
//           .catch(err => console.log('sw error', err));
//         }
//       })
//     .catch(err => console.log('bootstrapModule error', err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\it\grabo\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
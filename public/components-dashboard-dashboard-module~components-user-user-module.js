(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dashboard-dashboard-module~components-user-user-module"],{

/***/ "./src/app/components/user/user-create/user-create.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/user/user-create/user-create.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n  <div fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"30\"></div>\r\n\r\n  <div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\">\r\n  <!--<div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\" fxFlexOffset.gt-xs=\"20\" fxFlexOffset.gt-md=\"30\">-->\r\n\r\n  <div class=\"centered-container\">\r\n    <mat-card class=\"form-block\">\r\n      <mat-card-content>\r\n        <div class=\"padding-bottom\" fxLayout fxLayoutAlign=\"center center\">\r\n          <img class=\"responsive-image\" src=\"/assets/images/graboplast_logo.svg\" width=\"367px\">\r\n        </div>\r\n\r\n        <form [formGroup]=\"userCreateForm\" (submit)=\"onUserCreateSubmit()\">\r\n\r\n          <div fxLayout=\"row\">\r\n            <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n              <mat-icon color=\"primary\">account_circle</mat-icon>\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Логін\" formControlName=\"login\" required>\r\n              <mat-error\r\n                *ngIf=\"(userCreateForm.get('login').errors?.minlength ||\r\n                      userCreateForm.get('login').errors?.maxlength ||\r\n                      userCreateForm.get('login').errors?.required) &&\r\n                      userCreateForm.get('login').touched\">\r\n                Довжина повинна бути від 4 до 15 символів\r\n              </mat-error>\r\n              <mat-error\r\n                *ngIf=\"userCreateForm.get('login').errors?.pattern &&\r\n                     userCreateForm.get('login').touched\">\r\n                Використовуйте тільки латинські символи і цифри\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxLayout=\"row\">\r\n            <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n              <mat-icon color=\"primary\">lock_outline</mat-icon>\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Пароль\" formControlName=\"password\"\r\n                     required [type]=\"hidePassword ? 'password' : 'text'\">\r\n              <mat-icon class=\"muted\" matSuffix (click)=\"hidePassword = !hidePassword\">\r\n                {{hidePassword ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n              <mat-error\r\n                *ngIf=\"(userCreateForm.get('password').errors?.minlength ||\r\n                          userCreateForm.get('password').errors?.maxlength ||\r\n                          userCreateForm.get('password').errors?.required) &&\r\n                          userCreateForm.get('password').touched\">\r\n                Довжина повинна бути від 6 до 15 символів\r\n              </mat-error>\r\n              <mat-error\r\n                *ngIf=\"userCreateForm.get('password').errors?.pattern &&\r\n                         userCreateForm.get('password').touched\">\r\n                Використовуйте тільки латинські символи та цифри\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxLayout=\"row\">\r\n            <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n              <!--<mat-icon color=\"primary\">lock</mat-icon>-->\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Підтвердіть пароль\" formControlName=\"passwordConfirm\"\r\n                     required [type]=\"hidePassword ? 'password' : 'text'\">\r\n              <mat-error\r\n                *ngIf=\"userCreateForm.get('passwordConfirm').errors?.mismatch &&\r\n                      userCreateForm.get('passwordConfirm').touched\">\r\n                Пароль не збігається\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n\r\n          <div fxLayout=\"row\">\r\n            <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n              <mat-icon color=\"primary\">mail_outline</mat-icon>\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Email\" formControlName=\"email\" type=\"email\" required>\r\n              <mat-error\r\n                *ngIf=\"(userCreateForm.get('email').errors?.minlength ||\r\n                        userCreateForm.get('email').errors?.maxlength ||\r\n                        userCreateForm.get('email').errors?.required) &&\r\n                        userCreateForm.get('email').touched\">\r\n                Довжина повинна бути від 5 до 30 символів\r\n              </mat-error>\r\n              <mat-error\r\n                *ngIf=\"userCreateForm.get('email').errors?.pattern &&\r\n                       userCreateForm.get('email').touched\">\r\n                Введіть правільну адресу\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <re-captcha [ngClass]=\"{'display-none':\r\n          !userCreateForm.get('email').valid || !userCreateForm.get('login').valid ||\r\n          !userCreateForm.get('password').valid || !userCreateForm.get('passwordConfirm').valid}\"\r\n                      [formControlName]=\"'recaptcha'\" #recaptchaRef\r\n                      siteKey=\"6LelLF0UAAAAAEd0tfLUO02IAuT-_bf0noIJN0nK\">\r\n          </re-captcha>\r\n\r\n          <div class=\"submit-button-wrapper\">\r\n            <!--<button type=\"reset\" mat-button color=\"primary\" (click)=\"onUserCreateReset()\">Повернутись</button>-->\r\n            <span fxFlex></span>\r\n            <button mat-raised-button color=\"primary\" [disabled]=\"!userCreateForm.valid\">Зареєструватись</button>\r\n          </div>\r\n\r\n        </form>\r\n      </mat-card-content>\r\n      <!--<img mat-card-image class=\"mat-card-image-bottom\" src=\"./assets/images/logo400x140-2.jpg\" alt=\"\">-->\r\n    </mat-card>\r\n  </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/user-create/user-create.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/user/user-create/user-create.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user-create/user-create.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/user-create/user-create.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(validateService, userService, matSnackBar, router) {
        this.validateService = validateService;
        this.userService = userService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_6__["config"];
        this.hidePassword = true;
    }
    UserCreateComponent.prototype.ngOnInit = function () {
        var emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        this.userCreateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9]+'),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9]+'),
            ]),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(emailPattern),
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
            ]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
            ]),
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])
        }, this.validateService.matchPassword);
        // this.onUserCreateFake();
    };
    UserCreateComponent.prototype.onUserCreateSubmit = function () {
        var _this = this;
        this.user = {
            login: this.userCreateForm.get('login').value,
            password: this.userCreateForm.get('password').value,
            email: this.userCreateForm.get('email').value,
        };
        // create user
        this.userService.userCreate(this.user, this.userCreateForm.get('recaptcha').value)
            .subscribe(function (result) {
            var token = result.data;
            _this.resetForm();
            _this.matSnackBar.open(result.message, '', { duration: 3000 });
            // login new user
            _this.userService.userLocalLogin(token);
            _this.router.navigate(['/user', 'profile']);
        }, function (err) {
            // 422 or 400
            _this.matSnackBar.open(err.error, '', { duration: 3000, panelClass: 'snack-bar-danger' });
        });
    };
    UserCreateComponent.prototype.onUserCreateReset = function () {
        this.resetForm();
        // MAKE redirect
    };
    UserCreateComponent.prototype.resetForm = function () {
        if (this.userCreateFormDirective) {
            this.userCreateFormDirective.resetForm();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"])
    ], UserCreateComponent.prototype, "userCreateFormDirective", void 0);
    UserCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! ./user-create.component.html */ "./src/app/components/user/user-create/user-create.component.html"),
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/components/user/user-create/user-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-dialog/user-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/user/user-dialog/user-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Внести зміни</h1>\r\n<div class=\"form-block\">\r\n    <form [formGroup]=\"userEditForm\" (submit)=\"onSubmit()\">\r\n\r\n      <div fxLayout=\"row\" *ngFor=\"let dataPayload of data.payload\">\r\n        <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n          <mat-icon color=\"primary\">{{dataPayload.icon}}</mat-icon>\r\n        </div>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"{{dataPayload.label}}\" formControlName=\"{{dataPayload.name}}\"\r\n                   autocomplete=\"false\" type=\"{{dataPayload.type}}\" required>\r\n            <mat-error *ngFor=\"let validator of dataPayload.validators\">\r\n              <div\r\n                *ngIf=\"(validator.name === 'length' &&\r\n                (userEditForm.get(dataPayload.name).errors?.minlength ||\r\n                userEditForm.get(dataPayload.name).errors?.maxlength ||\r\n                userEditForm.get(dataPayload.name).errors?.required) &&\r\n                userEditForm.get(dataPayload.name).touched)\">\r\n                {{validator.message}}\r\n              </div>\r\n              <div\r\n                *ngIf=\"(validator.name === 'pattern' &&\r\n                userEditForm.get(dataPayload.name).errors?.pattern &&\r\n                userEditForm.get(dataPayload.name).touched)\">\r\n                {{validator.message}}\r\n              </div>\r\n              <div\r\n                *ngIf=\"(validator.name === 'require' &&\r\n                userEditForm.get(dataPayload.name).errors?.required &&\r\n                userEditForm.get(dataPayload.name).touched)\">\r\n                {{validator.message}}\r\n              </div>\r\n              <div\r\n                *ngIf=\"(validator.name === 'match' &&\r\n                userEditForm.get(dataPayload.name).errors?.mismatch &&\r\n                userEditForm.get(dataPayload.name).touched)\">\r\n                {{validator.message}}\r\n              </div>\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n      </div>\r\n      <div class=\"submit-button-wrapper\">\r\n        <button type=\"reset\" mat-button color=\"primary\" (click)=\"onNoClick()\">Повернутись</button>\r\n        <span fxFlex></span>\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"!userEditForm.valid\">Ok</button>\r\n      </div>\r\n\r\n    </form>\r\n<p *ngIf=\"data.oldValue\" class=\"mat-body-1\">поточне значення: <span class=\"mat-body-2\">{{data.oldValue}}</span></p>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/user-dialog/user-dialog.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/user/user-dialog/user-dialog.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user-dialog/user-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/user-dialog/user-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDialogComponent", function() { return UserDialogComponent; });
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


var UserDialogComponent = /** @class */ (function () {
    function UserDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    UserDialogComponent.prototype.ngOnInit = function () {
        this.userEditForm = this.data.initForm();
    };
    UserDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    UserDialogComponent.prototype.onSubmit = function () {
        this.dialogRef.close({
            // request: [
            //   {
            //     [this.data.payload[0].name]: this.userEditForm.get(this.data.payload[0].name).value
            //   }
            // ],
            name: this.data.payload[0].name,
            value: this.userEditForm.get(this.data.payload[0].name).value,
            password: this.data.payload[0].name === 'password' ?
                this.userEditForm.get(this.data.payload[2].name).value :
                this.userEditForm.get(this.data.payload[1].name).value
        });
    };
    UserDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-dialog',
            template: __webpack_require__(/*! ./user-dialog.component.html */ "./src/app/components/user/user-dialog/user-dialog.component.html"),
            styles: [__webpack_require__(/*! ./user-dialog.component.scss */ "./src/app/components/user/user-dialog/user-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], UserDialogComponent);
    return UserDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-login/user-login.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/user-login/user-login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n  <div fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"30\"></div>\r\n\r\n  <div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\">\r\n    <!--<div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\" fxFlexOffset.gt-xs=\"20\" fxFlexOffset.gt-md=\"30\">-->\r\n\r\n  <div class=\"centered-container\">\r\n    <mat-card  class=\"form-block\">\r\n      <mat-card-content>\r\n        <div class=\"padding-bottom\" fxLayout fxLayoutAlign=\"center center\">\r\n          <img class=\"responsive-image\" src=\"/assets/images/graboplast_logo.svg\" width=\"367px\">\r\n        </div>\r\n        <form [formGroup]=\"userLoginForm\" (submit)=\"onUserLoginSubmit()\">\r\n\r\n          <div fxLayout=\"row\">\r\n            <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n              <mat-icon color=\"primary\">account_circle</mat-icon>\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Логін\" formControlName=\"login\" required>\r\n              <mat-error\r\n                *ngIf=\"userLoginForm.get('login').errors?.required &&\r\n                      userLoginForm.get('login').touched\">\r\n                      Введіть логін\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxLayout=\"row\">\r\n            <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n              <mat-icon color=\"primary\">lock_outline</mat-icon>\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Пароль\" formControlName=\"password\"\r\n                     required [type]=\"hidePassword ? 'password' : 'text'\">\r\n              <mat-icon class=\"muted\" matSuffix (click)=\"hidePassword = !hidePassword\">\r\n                {{hidePassword ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n              <mat-error\r\n                *ngIf=\"userLoginForm.get('password').errors?.required &&\r\n                          userLoginForm.get('password').touched\">\r\n                Введіть пароль\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"submit-button-wrapper\">\r\n            <!--<span fxFlex></span>-->\r\n            <button mat-raised-button class=\"full-width\" color=\"primary\" [disabled]=\"!userLoginForm.valid\">Увійти</button>\r\n          </div>\r\n          <div fxLayout=\"row\" class=\"links-wrapper\">\r\n            <!--<a [routerLink]=\"['/user/create']\">Зареєструватись</a>-->\r\n            <span fxFlex></span>\r\n            <a [routerLink]=\"['/user/password-reset']\">Забули пароль</a>\r\n          </div>\r\n        </form>\r\n      </mat-card-content>\r\n      <!--<img mat-card-image class=\"mat-card-image-bottom\" src=\"/assets/images/logo400x140-2.jpg\" alt=\"\">-->\r\n    </mat-card>\r\n  </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/user-login/user-login.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/user-login/user-login.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user-login/user-login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/user/user-login/user-login.component.ts ***!
  \********************************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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






var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(userService, matSnackBar, router) {
        this.userService = userService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
        this.hidePassword = true;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        this.userLoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
        });
    };
    UserLoginComponent.prototype.onUserLoginSubmit = function () {
        var _this = this;
        this.user = {
            login: this.userLoginForm.get('login').value,
            password: this.userLoginForm.get('password').value,
        };
        this.userService.userLogin(this.user)
            .subscribe(function (result) {
            _this.resetForm();
            var token = result.data;
            _this.userService.userLocalLogin(token);
            _this.matSnackBar.open(result.message, '', { duration: 3000 });
            _this.router.navigate(['/user', 'profile']);
        }, function (err) {
            var message;
            if (err.error === 'maxTries') {
                message = 'Досягнуто максимальну кількість спроб, вхід тимчасово заблоковано';
            }
            _this.matSnackBar.open(message || err.error, '', { duration: 3000, panelClass: 'snack-bar-danger' });
        });
    };
    UserLoginComponent.prototype.resetForm = function () {
        if (this.userCreateFormDirective) {
            this.userCreateFormDirective.resetForm();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"])
    ], UserLoginComponent.prototype, "userCreateFormDirective", void 0);
    UserLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-login',
            template: __webpack_require__(/*! ./user-login.component.html */ "./src/app/components/user/user-login/user-login.component.html"),
            styles: [__webpack_require__(/*! ./user-login.component.scss */ "./src/app/components/user/user-login/user-login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-password-reset/user-password-reset.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/user/user-password-reset/user-password-reset.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n  <div class=\"cell\" fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"30\"></div>\r\n\r\n  <div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\">\r\n\r\n    <div class=\"item centered-container\">\r\n      <mat-card class=\"form-block\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            <h2 class=\"mat-h2 accent\">Відновлення паролю</h2>\r\n            <mat-spinner *ngIf=\"processing\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n\r\n\r\n        <mat-card-content>\r\n\r\n          <mat-vertical-stepper #stepper linear>\r\n            <mat-step [stepControl]=\"emailForm\" editable=\"false\" >\r\n              <form [formGroup]=\"emailForm\" validate (submit)=\"onEmailSubmit(stepper)\">\r\n                <ng-template matStepLabel>Введіть свій email</ng-template>\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                    <mat-icon color=\"primary\">mail_outline</mat-icon>\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" type=\"email\" required>\r\n\r\n                    <mat-error\r\n                      *ngIf=\"(emailForm.get('email').errors?.minlength ||\r\n                        emailForm.get('email').errors?.maxlength ||\r\n                        emailForm.get('email').errors?.required) &&\r\n                        emailForm.get('email').touched\">\r\n                      Довжина повинна бути від 5 до 30 символів\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"emailForm.get('email').errors?.pattern &&\r\n                        emailForm.get('email').touched\">\r\n                      Введіть правільну адресу\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"emailForm.get('email').errors?.invalidEmail &&\r\n                        emailForm.get('email').touched\">\r\n                      Користувач з такою поштою не зареєстрований\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"emailForm.get('email').errors?.unrecognizedError &&\r\n                        emailForm.get('email').touched\">\r\n                      Сталася помилка\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <re-captcha [ngClass]=\"{'display-none': !emailForm.get('email').valid}\"\r\n                  [formControlName]=\"'recaptcha'\" #recaptchaRef\r\n                            siteKey=\"6LelLF0UAAAAAEd0tfLUO02IAuT-_bf0noIJN0nK\">\r\n                </re-captcha>\r\n                <div>\r\n                  <button mat-button [disabled]=\"!emailForm.valid || processing\">Далі</button>\r\n                </div>\r\n              </form>\r\n            </mat-step>\r\n\r\n            <mat-step [stepControl]=\"codeForm\" editable=\"false\">\r\n\r\n              <form [formGroup]=\"codeForm\" (submit)=\"onCodeSubmit()\">\r\n                <!--<div *ngIf=\"codeForm.get('code').errors\">field {{codeForm.get('code').errors | json}}</div>-->\r\n                <!--<div *ngIf=\"codeForm.errors\">form {{codeForm.errors | json}}</div>-->\r\n\r\n                <ng-template matStepLabel>Введіть код, що надійшов на email</ng-template>\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                    <mat-icon color=\"primary\">settings_ethernet</mat-icon>\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Код підтвердження\" formControlName=\"code\" required>\r\n                    <mat-error\r\n                      *ngIf=\"codeForm.get('code').errors?.required &&\r\n                    codeForm.get('code').touched\">\r\n                      Введіть код\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"codeForm.get('code').errors?.invalidCode &&\r\n                        codeForm.get('code').touched\">\r\n                      Код введено не вірно\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"codeForm.get('code').errors?.maxTries\">\r\n                      Ви зробили максимальну кількість спроб\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"codeForm.get('code').errors?.unrecognizedError &&\r\n                        codeForm.get('code').touched\">\r\n                      Сталася помилка\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div>\r\n                  <button mat-button [disabled]=\"!codeForm.valid || processing\">Далі</button>\r\n                  <button *ngIf=\"codeForm.get('code').errors?.maxTries\"\r\n                          mat-button (click)=\"refresh()\">Оновити сторінку</button>\r\n                </div>\r\n              </form>\r\n            </mat-step>\r\n            <mat-step [stepControl]=\"passwordForm\" editable=\"false\">\r\n              <form [formGroup]=\"passwordForm\" (submit)=\"onPasswordSubmit()\">\r\n                <ng-template matStepLabel>Введіть новий пароль</ng-template>\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                    <mat-icon color=\"primary\">lock_outline</mat-icon>\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Пароль\" formControlName=\"password\"\r\n                           required [type]=\"hidePassword ? 'password' : 'text'\">\r\n                    <mat-icon class=\"muted\" matSuffix (click)=\"hidePassword = !hidePassword\">\r\n                      {{hidePassword ? 'visibility' : 'visibility_off'}}\r\n                    </mat-icon>\r\n                    <mat-error\r\n                      *ngIf=\"(passwordForm.get('password').errors?.minlength ||\r\n                          passwordForm.get('password').errors?.maxlength ||\r\n                          passwordForm.get('password').errors?.required) &&\r\n                          passwordForm.get('password').touched\">\r\n                      Довжина повинна бути від 6 до 15 символів\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"passwordForm.get('password').errors?.pattern &&\r\n                         passwordForm.get('password').touched\">\r\n                      Використовуйте тільки латинські символи та цифри\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                    <!--<mat-icon color=\"primary\">lock</mat-icon>-->\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Підтвердіть пароль\" formControlName=\"passwordConfirm\"\r\n                           required [type]=\"hidePassword ? 'password' : 'text'\">\r\n                    <mat-error\r\n                      *ngIf=\"passwordForm.get('passwordConfirm').errors?.mismatch &&\r\n                      passwordForm.get('passwordConfirm').touched\">\r\n                      Пароль не збігається\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div>\r\n                  <button mat-button [disabled]=\"!passwordForm.valid || processing\">Завершити</button>\r\n                </div>\r\n              </form>\r\n            </mat-step>\r\n\r\n            <!--<mat-step *ngIf=\"result\">-->\r\n              <!--<ng-template matStepLabel>Пароль успішно змінено</ng-template>-->\r\n              <!--&lt;!&ndash;<p class=\"mat-body-2\">Пароль успішно змінено</p>&ndash;&gt;-->\r\n              <!--<div>-->\r\n                <!--<button mat-button [routerLink]=\"['/user', 'profile']\">Перейти в профіль</button>-->\r\n              <!--</div>-->\r\n            <!--</mat-step>-->\r\n          </mat-vertical-stepper>\r\n\r\n\r\n          <!--<form [formGroup]=\"userPasswordResetForm\" (submit)=\"onUserPasswordResetSubmit()\">-->\r\n\r\n          <!--<div fxLayout=\"row\">-->\r\n          <!--<div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">-->\r\n          <!--<mat-icon [ngClass]=\"color1\">looks_one</mat-icon>-->\r\n          <!--</div>-->\r\n          <!--<mat-form-field>-->\r\n          <!--<input matInput placeholder=\"Email\" formControlName=\"email\" type=\"email\" required>-->\r\n          <!--<mat-error-->\r\n          <!--*ngIf=\"(userPasswordResetForm.get('email').errors?.minlength ||-->\r\n          <!--userPasswordResetForm.get('email').errors?.maxlength ||-->\r\n          <!--userPasswordResetForm.get('email').errors?.required) &&-->\r\n          <!--userPasswordResetForm.get('email').touched\">-->\r\n          <!--Довжина повинна бути від 5 до 30 символів-->\r\n          <!--</mat-error>-->\r\n          <!--<mat-error-->\r\n          <!--*ngIf=\"userPasswordResetForm.get('email').errors?.pattern &&-->\r\n          <!--userPasswordResetForm.get('email').touched\">-->\r\n          <!--Введіть правільну адресу-->\r\n          <!--</mat-error>-->\r\n          <!--</mat-form-field>-->\r\n          <!--<div fxFlexAlign=\"center\" class=\"mat-icon-wrapper-right\">-->\r\n          <!--<mat-spinner *ngIf=\"userPasswordResetForm.valid && processing === 'one' && !done1\"-->\r\n          <!--fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>-->\r\n          <!--<mat-icon *ngIf=\"userPasswordResetForm.valid && processing !== 'one' && !done1\"-->\r\n          <!--[ngClass]=\"color1\" class=\"clickable\" (click)=\"onUserPasswordResetSubmit()\">send</mat-icon>-->\r\n          <!--<mat-icon *ngIf=\"done1\" [ngClass]=\"color1\">done</mat-icon>-->\r\n          <!--</div>-->\r\n          <!--&lt;!&ndash;<div class=\"submit-button-wrapper\">&ndash;&gt;-->\r\n          <!--&lt;!&ndash;&lt;!&ndash;<span fxFlex></span>&ndash;&gt;&ndash;&gt;-->\r\n          <!--&lt;!&ndash;<button mat-raised-button class=\"full-width\" color=\"primary\" [disabled]=\"!userPasswordResetForm.valid\">Відправити</button>&ndash;&gt;-->\r\n          <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n          <!--</div>-->\r\n\r\n          <!--</form>-->\r\n\r\n          <!--<div fxLayout=\"row\">-->\r\n          <!--<div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">-->\r\n          <!--<mat-icon [ngClass]=\"color2\">looks_two</mat-icon>-->\r\n          <!--</div>-->\r\n          <!--<div>Перевірте пошту і перейдіть за посиланням</div>-->\r\n          <!--<div fxFlexAlign=\"center\" class=\"mat-icon-wrapper-right\">-->\r\n          <!--<mat-icon *ngIf=\"done2\" color=\"primary\">done</mat-icon>-->\r\n          <!--</div>-->\r\n          <!--&lt;!&ndash;<div class=\"submit-button-wrapper\">&ndash;&gt;-->\r\n          <!--&lt;!&ndash;&lt;!&ndash;<span fxFlex></span>&ndash;&gt;&ndash;&gt;-->\r\n          <!--&lt;!&ndash;<button mat-raised-button class=\"full-width\" color=\"primary\" [disabled]=\"!userPasswordResetForm.valid\">Відправити</button>&ndash;&gt;-->\r\n          <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n          <!--</div>-->\r\n\r\n        </mat-card-content>\r\n        <!--<img mat-card-image class=\"mat-card-image-bottom\" src=\"/assets/images/logo400x140-2.jpg\" alt=\"\">-->\r\n      </mat-card>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/user-password-reset/user-password-reset.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/user/user-password-reset/user-password-reset.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user-password-reset/user-password-reset.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/user/user-password-reset/user-password-reset.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UserPasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPasswordResetComponent", function() { return UserPasswordResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserPasswordResetComponent = /** @class */ (function () {
    function UserPasswordResetComponent(userService, validateService, matSnackBar, router) {
        this.userService = userService;
        this.validateService = validateService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_6__["config"];
        this.hidePassword = true;
        this.processing = false;
        this.result = false;
    }
    UserPasswordResetComponent.prototype.ngOnInit = function () {
        var emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(emailPattern),
            ]),
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])
        });
        this.codeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
        });
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9]+'),
            ]),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
        }, this.validateService.matchPassword);
    };
    UserPasswordResetComponent.prototype.onEmailSubmit = function (stepper) {
        var _this = this;
        this.processing = true;
        this.userService.userLocalRemoveToken('token');
        this.userService.userLocalRemoveToken('codeToken');
        this.userService.userLocalRemoveToken('passwordResetToken');
        var email = this.emailForm.get('email').value;
        var recaptcha = this.emailForm.get('recaptcha').value;
        this.userService.userPasswordResetEmail(email, recaptcha)
            .subscribe(function (result) {
            _this.processing = false;
            _this.emailForm.get('email').setErrors(null);
            _this.matStepper.next();
            var codeToken = result.data;
            _this.userService.userLocalSetToken('codeToken', codeToken);
        }, function (err) {
            _this.recaptchaRef.reset();
            _this.processing = false;
            if (err.error === 'noSuchUser') {
                _this.emailForm.get('email').setErrors({ invalidEmail: true });
            }
            else {
                _this.emailForm.get('email').setErrors({ unrecognizedError: true });
            }
        });
    };
    UserPasswordResetComponent.prototype.onCodeSubmit = function () {
        var _this = this;
        this.processing = true;
        var code = this.codeForm.get('code').value;
        var codeToken = this.userService.userLocalGetToken('codeToken');
        this.userService.userPasswordResetCode(code, codeToken)
            .subscribe(function (result) {
            _this.processing = false;
            _this.codeForm.get('code').setErrors(null);
            _this.matStepper.next();
            _this.userService.userLocalRemoveToken('codeToken');
            var passwordResetToken = result.data;
            _this.userService.userLocalSetToken('passwordResetToken', passwordResetToken);
        }, function (err) {
            _this.processing = false;
            if (err.error === 'wrongCredentials') {
                _this.codeForm.get('code').setErrors({ invalidCode: true });
            }
            else if (err.error === 'maxTries') {
                _this.codeForm.get('code').setErrors({ maxTries: true });
                _this.codeForm.setValidators(_this.validateService.maxTries);
                setTimeout(function () {
                    _this.router.navigate(['/']);
                }, 3000);
                _this.matSnackBar.open('Код невірний, спрпобуйте пізніше', '', { duration: 4000, panelClass: 'snack-bar-danger' });
            }
            else {
                _this.codeForm.get('code').setErrors({ unrecognizedError: true });
                console.log(err);
            }
        });
    };
    UserPasswordResetComponent.prototype.onPasswordSubmit = function () {
        var _this = this;
        this.processing = true;
        var password = this.passwordForm.get('password').value;
        var passwordResetToken = this.userService.userLocalGetToken('passwordResetToken');
        this.userService.userPasswordReset(password, passwordResetToken)
            .subscribe(function (result) {
            var token = result.data;
            _this.processing = false;
            _this.result = true;
            // this.matStepper.next();
            _this.userService.userLocalRemoveToken('passwordResetToken');
            _this.userService.userLocalLogin(token);
            _this.router.navigate(['/user', 'profile']);
            _this.matSnackBar.open(result.message, '', { duration: 3000, panelClass: 'snack-bar-danger' });
        }, function (err) {
            _this.processing = false;
            _this.matSnackBar.open('Пароль не змінено', '', { duration: 3000, panelClass: 'snack-bar-danger' });
        });
    };
    UserPasswordResetComponent.prototype.goHomePage = function () {
        this.router.navigate(['/']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepper"])
    ], UserPasswordResetComponent.prototype, "matStepper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('recaptchaRef'),
        __metadata("design:type", Object)
    ], UserPasswordResetComponent.prototype, "recaptchaRef", void 0);
    UserPasswordResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-password-reset',
            template: __webpack_require__(/*! ./user-password-reset.component.html */ "./src/app/components/user/user-password-reset/user-password-reset.component.html"),
            styles: [__webpack_require__(/*! ./user-password-reset.component.scss */ "./src/app/components/user/user-password-reset/user-password-reset.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserPasswordResetComponent);
    return UserPasswordResetComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-profile/user-profile.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n  <div class=\"cell\" fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"30\"></div>\r\n\r\n  <div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\">\r\n\r\n    <div class=\"item centered-container\" *ngIf=\"user\">\r\n      <div class=\"info-block mat-elevation-z4\">\r\n\r\n        <div class=\"avatar-block\">\r\n          <form [formGroup]=\"changeAvatarForm\" (submit)=\"onSubmitChangeAvatarForm()\">\r\n\r\n          <div class=\"avatar-img-wrapper\">\r\n            <img *ngIf=\"!previewAvatarUrl\" src=\"{{user.avatar}}\" alt=\"avatar\">\r\n            <img *ngIf=\"previewAvatarUrl\"  src=\"{{previewAvatarUrl}}\" alt=\"avatar\">\r\n\r\n            <div *ngIf=\"processingChangeAvatar\" class=\"avatar-div-processing\">\r\n              <div class=\"spinner-wrapper\">\r\n                <mat-spinner [diameter]=\"24\"></mat-spinner>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"!editAvatar && !processingChangeAvatar\" class=\"avatar-div-change\"></div>\r\n            <div *ngIf=\"!editAvatar && !processingChangeAvatar\" class=\"avatar-button-change\">\r\n              <input type=\"file\" accept=\".jpg, .jpe, .jpeg, .bmp, .webp, .png, .gif\" (change)=\"changeAvatar($event)\" id=\"input-file\">\r\n              <label for=\"input-file\">Змінити\r\n              </label>\r\n            </div>\r\n\r\n\r\n            <div *ngIf=\"editAvatar && !processingChangeAvatar\">\r\n              <div class=\"avatar-div-ok\" >\r\n              </div>\r\n              <div class=\"avatar-div-cancel\">\r\n              </div>\r\n              <button class=\"avatar-button-ok\" [disabled]=\"!changeAvatarForm.valid\">\r\n                <mat-icon>done</mat-icon>\r\n              </button>\r\n              <button type=\"button\" class=\"avatar-button-cancel\" (click)=\"cancelChangeAvatar()\">\r\n                <mat-icon>cancel</mat-icon>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          </form>\r\n\r\n        </div>\r\n\r\n        <div class=\"info-block-row-wrapper\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n            <div class=\"info-block-row-title mat-title\">{{user.login}}</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"info-block-row-wrapper\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n              <!--<div fxFlex=\"100%\">-->\r\n                <div class=\"info-block-row-title mat-subheading-1\" fxFlex=\"40%\">Email</div>\r\n                <div class=\"mat-body-1 muted\" fxFlex=\"60%\">{{user.email}}</div>\r\n                <mat-icon *ngIf=\"processing !== 'email'\" fxFlex=\"30px\"\r\n                          (click)=\"openDialog(makeEmailObject())\" class=\"muted\">edit</mat-icon>\r\n                <mat-spinner *ngIf=\"processing === 'email'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n              <!--</div>-->\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"user.role === 'guest' && !verificationSent\" class=\"info-block-row-wrapper border-0\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row mail-verification\">\r\n            <div class=\"mat-body-1\" fxFlex=\"100%\">Пошту не верифіковано, надіслати код</div>\r\n            <mat-icon *ngIf=\"processing !== 'verification'\" fxFlex=\"30px\" (click)=\"onVerificationSend()\">mail</mat-icon>\r\n            <mat-spinner *ngIf=\"processing === 'verification'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"user.role === 'guest' && verificationSent\" class=\"info-block-row-wrapper border-0\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row mail-verification\">\r\n            <div class=\"mat-body-1 muted\" fxFlex=\"100%\">На пошту надіслано посилання</div>\r\n            <mat-icon *ngIf=\"processing !== 'verification'\" fxFlex=\"30px\" class=\"muted\" (click)=\"onVerificationSend()\">refresh</mat-icon>\r\n            <mat-spinner *ngIf=\"processing === 'verification'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"info-block-row-wrapper\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n            <div class=\"info-block-row-title mat-subheading-1\" fxFlex=\"40%\">Ім'я</div>\r\n            <!--<div fxFlex></div>-->\r\n            <div class=\"mat-subheading-2 muted\" fxFlex=\"60%\">{{user.name}}</div>\r\n            <mat-icon *ngIf=\"processing !== 'name'\" fxFlex=\"30px\"\r\n                      (click)=\"openDialog(makeNameObject())\" class=\"muted\">edit</mat-icon>\r\n            <mat-spinner *ngIf=\"processing === 'name'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"info-block-row-wrapper\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n            <div class=\"info-block-row-title mat-subheading-1\" fxFlex=\"40%\">Прізвище</div>\r\n            <!--<div fxFlex></div>-->\r\n            <div class=\"mat-subheading-2 muted\" fxFlex=\"60%\">{{user.surname}}</div>\r\n            <mat-icon *ngIf=\"processing !== 'surname'\" fxFlex=\"30px\"\r\n                      (click)=\"openDialog(makeSurnameObject())\" class=\"muted\">edit</mat-icon>\r\n            <mat-spinner *ngIf=\"processing === 'surname'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"info-block-row-wrapper\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n            <div fxFlex=\"60%\"></div>\r\n            <div fxFlex=\"40%\">\r\n              <button mat-button (click)=\"openDialog(makePasswordObject())\">\r\n                <span *ngIf=\"processing !== 'password'\">Змінити пароль</span>\r\n                <mat-spinner *ngIf=\"processing === 'password'\" [diameter]=\"24\"></mat-spinner>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/user/user-profile/user-profile.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-profile.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user-profile/user-profile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-dialog/user-dialog.component */ "./src/app/components/user/user-dialog/user-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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








var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userService, matSnackBar, router, dialog) {
        this.userService = userService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.dialog = dialog;
        this.editAvatar = false;
        this.processingChangeAvatar = false;
        this.verificationSent = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.getProfile();
        this.changeAvatarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4),
            ]),
        });
    };
    UserProfileComponent.prototype.onVerificationSend = function () {
        var _this = this;
        this.verificationSent = true;
        this.processing = 'verification';
        this.userService.userEmailVerification()
            .subscribe(function (result) {
            _this.processing = '';
            _this.matSnackBar.open(result.message, '', { duration: 3000 });
        }, function (err) {
            _this.processing = '';
            // this.matSnackBar.open(err.error || 'Помилка', '',
            //   {duration: 3000, panelClass: 'snack-bar-danger'});
        });
    };
    UserProfileComponent.prototype.onSubmitChangeAvatarForm = function () {
        var _this = this;
        this.processingChangeAvatar = true;
        this.userService.userEditAvatar(this.changeAvatarForm.get('file').value)
            .subscribe(function (result) {
            _this.matSnackBar.open(result.message, '', { duration: 3000 });
            _this.getProfile();
            _this.previewAvatarUrl = null;
            _this.processingChangeAvatar = false;
            _this.editAvatar = false;
        }, function (err) {
            return _this.matSnackBar.open(err.error || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
        });
    };
    UserProfileComponent.prototype.changeAvatar = function (event) {
        var _this = this;
        this.editAvatar = true;
        var checkFile = this.userService.checkFile(event.target);
        if (!checkFile.success) {
            this.cancelChangeAvatar();
            this.matSnackBar.open(checkFile.message || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
        }
        else {
            this.changeAvatarForm.get('file').setValue(event.target.files[0]);
            var reader = new FileReader();
            reader.addEventListener('load', function (readerEvent) {
                // .jpg, .jpe, .jpeg, .bmp, .webp, .png
                _this.previewAvatarUrl = readerEvent.target.result;
            });
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    UserProfileComponent.prototype.cancelChangeAvatar = function () {
        this.changeAvatarForm.get('file').setValue(null);
        this.editAvatar = false;
        this.previewAvatarUrl = null;
    };
    UserProfileComponent.prototype.getProfile = function () {
        var _this = this;
        this.userService.userGetProfile()
            .subscribe(function (result) {
            _this.user = result.data;
        }, function (err) {
            _this.matSnackBar.open(err.error, '', { duration: 3000, panelClass: 'snack-bar-danger' });
            _this.router.navigate(['/user', 'login']);
        });
    };
    UserProfileComponent.prototype.openDialog = function (object) {
        var _this = this;
        var dialogRef = this.dialog.open(_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_4__["UserDialogComponent"], {
            width: '400px',
            data: object,
        });
        dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (result) {
            if (result) {
                return _this.userService.userEdit(result);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({
                success: false,
                message: 'dialog wasn\'t submitted',
                data: 'doNothing'
            });
        }))
            .subscribe(function (result) {
            _this.processing = null;
            if (!result.success) {
                // didn't get data from dialog
                if (result.data === 'doNothing') {
                    return;
                }
                return;
            }
            else {
                _this.matSnackBar.open('Дані успішно збережено', '', { duration: 3000 });
                _this.getProfile();
            }
        }, function (err) {
            _this.processing = null;
            _this.matSnackBar.open(err.error || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
        });
    };
    UserProfileComponent.prototype.makePasswordObject = function () {
        this.processing = 'password';
        return {
            payload: [{
                    name: 'password',
                    label: 'Новий пароль',
                    type: 'password',
                    icon: 'lock_outline',
                    validators: [
                        {
                            name: 'length',
                            message: 'Довжина повинна бути від 6 до 15 символів'
                        },
                        {
                            name: 'pattern',
                            message: 'Використовуйте тільки латинські символи та цифри'
                        },
                    ],
                },
                {
                    name: 'passwordConfirm',
                    label: 'Підтвердіть пароль',
                    type: 'password',
                    icon: '',
                    validators: [
                        {
                            name: 'require',
                            message: 'Це поле не може бути пустим'
                        },
                        {
                            name: 'match',
                            message: 'Пароль не збігається'
                        },
                    ]
                },
                {
                    name: 'passwordCurrent',
                    label: 'Діючий пароль',
                    type: 'password',
                    icon: '',
                    validators: [
                        {
                            name: 'require',
                            message: 'Це поле не може бути пустим'
                        }
                    ],
                }],
            initForm: function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                    password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[a-zA-Z0-9]+'),
                    ]),
                    passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    ]),
                    passwordCurrent: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    ]),
                }, function matchPassword(abstractControl) {
                    var password = abstractControl.get('password').value;
                    var passwordConfirm = abstractControl.get('passwordConfirm').value;
                    if (password === passwordConfirm) {
                        abstractControl.get('passwordConfirm').setErrors(null);
                        return null;
                    }
                    else {
                        abstractControl.get('passwordConfirm').setErrors({ mismatch: true });
                        return null;
                    }
                });
            }
        };
    };
    UserProfileComponent.prototype.makeEmailObject = function () {
        this.processing = 'email';
        var emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return {
            payload: [{
                    name: 'email',
                    label: 'Email',
                    type: 'email',
                    icon: 'mail_outline',
                    oldValue: this.user.email,
                    validators: [
                        {
                            name: 'length',
                            message: 'Довжина повинна бути від 5 до 30 символів'
                        },
                        {
                            name: 'pattern',
                            message: 'Введіть правільну адресу'
                        }
                    ],
                },
                {
                    name: 'passwordCurrent',
                    label: 'Введіть пароль',
                    type: 'password',
                    icon: '',
                    validators: [
                        {
                            name: 'require',
                            message: 'Це поле не може бути пустим'
                        }
                    ],
                }],
            initForm: function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                    email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(30),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(emailPattern),
                    ]),
                    passwordCurrent: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    ]),
                });
            },
        };
    };
    UserProfileComponent.prototype.makeNameObject = function () {
        this.processing = 'name';
        return {
            payload: [{
                    name: 'name',
                    label: 'Ім\'я',
                    type: '',
                    icon: 'perm_identity',
                    oldValue: this.user.name,
                    validators: [
                        {
                            name: 'length',
                            message: 'Довжина повинна бути від 2 до 20 символів'
                        },
                        {
                            name: 'pattern',
                            message: 'Використовуйте букви і цифри'
                        }
                    ],
                },
                {
                    name: 'passwordCurrent',
                    label: 'Введіть пароль',
                    type: 'password',
                    icon: '',
                    validators: [
                        {
                            name: 'require',
                            message: 'Це поле не може бути пустим'
                        }
                    ],
                }],
            initForm: function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
                    ]),
                    passwordCurrent: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    ]),
                });
            },
        };
    };
    UserProfileComponent.prototype.makeSurnameObject = function () {
        this.processing = 'surname';
        return {
            payload: [{
                    name: 'surname',
                    label: 'Прізвище',
                    type: '',
                    icon: 'perm_identity',
                    oldValue: this.user.surname,
                    validators: [
                        {
                            name: 'length',
                            message: 'Довжина повинна бути від 2 до 20 символів'
                        },
                        {
                            name: 'pattern',
                            message: 'Використовуйте букви і цифри'
                        }
                    ],
                },
                {
                    name: 'passwordCurrent',
                    label: 'Введіть пароль',
                    type: 'password',
                    icon: '',
                    validators: [
                        {
                            name: 'require',
                            message: 'Це поле не може бути пустим'
                        }
                    ],
                }],
            initForm: function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                    surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
                    ]),
                    passwordCurrent: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    ]),
                });
            },
        };
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/components/user/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/components/user/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/user/user-routing.module.ts ***!
  \********************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/components/user/user-create/user-create.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/components/user/user-login/user-login.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/components/user/user-profile/user-profile.component.ts");
/* harmony import */ var _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-password-reset/user-password-reset.component */ "./src/app/components/user/user-password-reset/user-password-reset.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/page-404/page-404.component */ "./src/app/components/shared/page-404/page-404.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var userRoutes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        children: [
            {
                path: 'create',
                component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_3__["UserCreateComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'login',
                component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__["UserLoginComponent"],
            },
            {
                path: 'profile',
                component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
                data: { auth: 'guest' },
            },
            {
                path: 'password-reset',
                component: _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_6__["UserPasswordResetComponent"],
            },
            { path: '', component: _shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_8__["Page404Component"] },
        ],
    },
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(userRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/user.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
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

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/components/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/user/user.module.ts ***!
  \************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/components/user/user-routing.module.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/components/user/user-create/user-create.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/components/user/user-login/user-login.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/components/user/user-profile/user-profile.component.ts");
/* harmony import */ var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-dialog/user-dialog.component */ "./src/app/components/user/user-dialog/user-dialog.component.ts");
/* harmony import */ var _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-password-reset/user-password-reset.component */ "./src/app/components/user/user-password-reset/user-password-reset.component.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-recaptcha/forms */ "./node_modules/ng-recaptcha/forms.js");
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
                _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_4__["UserCreateComponent"],
                _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_5__["UserLoginComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"],
                _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_9__["UserDialogComponent"],
                _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_10__["UserPasswordResetComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__["RecaptchaModule"],
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_12__["RecaptchaFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            ],
            exports: [],
            entryComponents: [
                _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_9__["UserDialogComponent"],
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-dashboard-dashboard-module~components-user-user-module.js.map
import {config} from './app.config';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';

import { ValidateService } from './services/validate.service';
import { UserService } from './services/user.service';
import { CatalogService } from './services/catalog.service';
import { ProductService } from './services/product.service';
import { SharedService } from './services/shared.service';

// import { CloudinaryModule } from '@cloudinary/angular-5.x';
// import { Cloudinary } from 'cloudinary-core/cloudinary-core-shrinkwrap';

import { AuthGuard } from './guards/auth.guard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ConfirmPopupComponent } from './components/shared/confirm-popup/confirm-popup.component';
import { DesignPopupComponent } from './components/shared/design-popup/design-popup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ReactiveFormsModule,
  ],
  providers: [
    ValidateService,
    UserService,
    RecaptchaModule,
    RecaptchaFormsModule,
    CatalogService,
    ProductService,
    SharedService,
    AuthGuard,
  ],
  exports: [
  ],
  entryComponents: [
    ConfirmPopupComponent,
    DesignPopupComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Page404Component } from './components/shared/page-404/page-404.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { FeedbackComponent } from './components/shared/feedback/feedback.component';
import { GalleryComponent } from './components/shared/gallery/gallery.component';
import { ContactsComponent } from './components/shared/contacts/contacts.component';
import { DownloadsComponent } from './components/shared/downloads/downloads.component';
import { InfoComponent } from './components/shared/info/info.component';
import { UsagesComponent } from './components/shared/usages/usages.component';
import { LandingComponent } from './components/shared/landing/landing.component';

const appRoutes: Routes = [
  {
    path: 'products',
    loadChildren: './components/products/products.module#ProductsModule',
  },
  {
    path: 'gallery/ch',
    component: GalleryComponent
  },
  {
    path: 'usages/ch/:_id',
    component: UsagesComponent
  },
  {
    path: 'usages/ch',
    component: UsagesComponent
  },

  {
    path: 'contacts/ch',
    component: ContactsComponent
  },
  {
    path: 'downloads/ch',
    component: DownloadsComponent
  },
  {
    path: 'info/ch',
    component: InfoComponent
  },
  {
    path: 'dashboard',
    loadChildren: './components/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard],
    data: { auth: 'user' },
  },
  {
    path: 'user',
    loadChildren: './components/user/user.module#UserModule'
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  { path: 'page-404', component: Page404Component },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: '', loadChildren: './components/home/home.module#HomeModule', pathMatch: 'full' },
  { path: '**', component: Page404Component }, // MAKE redirect
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

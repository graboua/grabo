import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../../material.module';
import { DashboardSidenavComponent } from './dashboard-sidenav/dashboard-sidenav.component';
import { UserModule } from '../user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { DesignsEditorComponent } from './designs-editor/designs-editor.component';
import { SharedModule } from '../shared/shared.module';
import { DesignsEditorFormComponent } from './designs-editor-form/designs-editor-form.component';
import { ProductsEditorComponent } from './products-editor/products-editor.component';
import { ProductsEditorFormComponent } from './products-editor-form/products-editor-form.component';
import { ToolsComponent } from './tools/tools.component';
import { DesignsEditorBatchComponent } from './designs-editor-batch/designs-editor-batch.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    DashboardRoutingModule,
    UserModule,
    // CloudinaryModule,
    SharedModule,
  ],
  declarations: [
    DashboardComponent,
    DashboardSidenavComponent,
    DesignsEditorComponent,
    DesignsEditorFormComponent,
    ProductsEditorComponent,
    ProductsEditorFormComponent,
    ToolsComponent,
    DesignsEditorBatchComponent
  ]
})
export class DashboardModule { }

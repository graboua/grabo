import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule,
  MatGridListModule, MatSidenavModule, MatSnackBarModule, MatTabsModule,
  MatDialogModule, MatTableModule, MatProgressSpinnerModule, MatStepperModule,
  MatRadioModule, MatSelectModule, MatIconModule, MatCheckboxModule, MatMenuModule,
  MatExpansionModule, MatListModule, MatAutocompleteModule
} from '@angular/material';
// import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDialogModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    MatAutocompleteModule,
    ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDialogModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    MatAutocompleteModule,
  ],
})

export class MaterialModule {}

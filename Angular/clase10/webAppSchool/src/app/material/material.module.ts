import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { 
  MatSidenavModule, 
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatSlideToggleModule
 } from "@angular/material";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [], 
  exports: [
    FlexLayoutModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatListModule, 
    MatMenuModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDialogModule, 
	MatTableModule, 
	MatDatepickerModule, 
	MatNativeDateModule, 
	MatSlideToggleModule
  ]
})
export class MaterialModule { }

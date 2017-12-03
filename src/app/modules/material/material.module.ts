import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTabsModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule
} from '@angular/material';

const modules = [
  MatTabsModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateSuffix } from './date-suffix.pipe';



@NgModule({
  declarations: [
    DateSuffix
  ],
  imports: [
    CommonModule
  ],
  exports: [DateSuffix]
})
export class CustomPipesModule { }

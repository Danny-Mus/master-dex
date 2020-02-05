import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CaughtComponent } from './caught.component';

const Components = [
  CaughtComponent,
];

@NgModule({
  declarations: [...Components],
  imports: [
  ],
  exports:  [...Components],
  schemas: []
})
export class CaughtModule { }

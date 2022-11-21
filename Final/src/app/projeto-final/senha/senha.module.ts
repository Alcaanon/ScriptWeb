import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SenhaComponent } from './senha.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    SenhaComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    SenhaComponent
  ]
})
export class SenhaModule { }

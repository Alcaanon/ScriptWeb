import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    NavbarComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NavbarModule { }

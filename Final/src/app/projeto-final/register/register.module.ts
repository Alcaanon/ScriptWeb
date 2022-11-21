import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterModule { }

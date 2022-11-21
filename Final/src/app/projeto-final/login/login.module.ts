import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    LoginComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
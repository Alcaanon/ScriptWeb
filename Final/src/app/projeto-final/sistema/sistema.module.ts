import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaComponent } from '../sistema/sistema.component';
import { HomeComponent } from './home/home.component';
import { SenhaComponent } from './senha/senha.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    SistemaComponent,
    HomeComponent,
    SenhaComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SistemaModule { }

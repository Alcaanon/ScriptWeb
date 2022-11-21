import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './projeto-final/login/login.module';
import { ProjetoFinalModule } from './projeto-final/projeto-final.module';
import { NavbarModule } from './projeto-final/shared/navbar/navbar.module';
import { SharedModule } from './projeto-final/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    SharedModule,
    LoginModule,
    ProjetoFinalModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

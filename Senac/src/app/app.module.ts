import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FreelancerModule } from './freelancer/freelancer.module';
import { FormularioModule } from './freelancer/fotos/formulario/formulario.module';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FreelancerModule,
    FormularioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
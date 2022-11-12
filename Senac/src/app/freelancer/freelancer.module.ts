import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent
  ]
})
export class FreelancerModule { }

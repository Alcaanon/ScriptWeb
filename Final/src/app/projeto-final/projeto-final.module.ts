import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { IndexComponent } from './index/index.component';
import { IndexModule } from './index/index.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    NavbarModule,
    IndexModule
    
  ],
  exports:[
    IndexComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProjetoFinalModule { }

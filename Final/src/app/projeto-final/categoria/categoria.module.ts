import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from '../categoria/categoria.component';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { CategoriaFormularioComponent } from './categoria-formulario/categoria-formulario.component';



@NgModule({
  declarations: [
    CategoriaComponent,
    CategoriaDetalheComponent,
    CategoriaFormularioComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CategoriaComponent,
    CategoriaDetalheComponent,
    CategoriaFormularioComponent
  ]
})
export class CategoriaModule { }

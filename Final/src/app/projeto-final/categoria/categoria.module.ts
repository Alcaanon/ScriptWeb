import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from '../categoria/categoria.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DetalhesComponent } from './detalhes/detalhes.component';



@NgModule({
  declarations: [
    CategoriaComponent,
    FormularioComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoriaModule { }

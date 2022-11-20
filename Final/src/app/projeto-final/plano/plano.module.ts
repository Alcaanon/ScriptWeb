import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanoComponent } from '../plano/plano.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DetalhesComponent } from './detalhes/detalhes.component';



@NgModule({
  declarations: [
    PlanoComponent,
    FormularioComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlanoModule { }

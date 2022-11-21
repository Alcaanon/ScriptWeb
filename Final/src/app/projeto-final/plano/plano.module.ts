import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanoComponent } from '../plano/plano.component';
import { PlanoDetalhesComponent } from './plano-detalhes/plano-detalhes.component';
import { PlanoFormularioComponent } from './plano-formulario/plano-formulario.component';



@NgModule({
  declarations: [
    PlanoComponent,
    PlanoDetalhesComponent,
    PlanoFormularioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlanoComponent,
    PlanoDetalhesComponent,
    PlanoFormularioComponent
  ]
})
export class PlanoModule { }

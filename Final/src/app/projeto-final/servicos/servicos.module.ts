import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoFormularioComponent } from './servico-formulario/servico-formulario.component';
import { ServicoDetalhesComponent } from './servico-detalhes/servico-detalhes.component';



@NgModule({
  declarations: [
    ServicoFormularioComponent,
    ServicoDetalhesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServicosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ServicoFormularioComponent } from './servico-formulario/servico-formulario.component';
import { ServicoDetalhesComponent } from './servico-detalhes/servico-detalhes.component';
import { ServicosComponent } from './servicos.component';



@NgModule({
  declarations: [
    ServicosComponent,
    ServicoFormularioComponent,
    ServicoDetalhesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ServicosComponent,
    ServicoFormularioComponent,
    ServicoDetalhesComponent
  ]
})
export class ServicosModule { }

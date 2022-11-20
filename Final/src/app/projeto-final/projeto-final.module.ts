import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features/features.component';
import { ServicosComponent } from './servicos/servicos.component';
import { PrecosComponent } from './precos/precos.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { ContatoComponent } from './contato/contato.component';
import { FormularioComponent } from './servicos/formulario/formulario.component';
import { DetalhesComponent } from './servicos/detalhes/detalhes.component';
import { SobreComponent } from './sobre/sobre.component';



@NgModule({
  declarations: [
    FeaturesComponent,
    ServicosComponent,
    PrecosComponent,
    DepoimentosComponent,
    ContatoComponent,
    FormularioComponent,
    DetalhesComponent,
    SobreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjetoFinalModule { }

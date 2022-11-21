import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index.component';
import { PlanoModule } from '../plano/plano.module';
import { DepoimentosComponent } from '../depoimentos/depoimentos.component';
import { ContatoComponent } from '../contato/contato.component';
import { ServicosModule } from '../servicos/servicos.module';


@NgModule({
  declarations: [
    IndexComponent,
    DepoimentosComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PlanoModule,
    ServicosModule
  ],
  exports:[
    IndexComponent
  ]
})
export class IndexModule { }

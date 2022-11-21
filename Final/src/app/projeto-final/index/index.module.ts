import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index.component';
import { ServicosComponent } from '../servicos/servicos.component';
import { PlanoModule } from '../plano/plano.module';
import { DepoimentosComponent } from '../depoimentos/depoimentos.component';
import { ContatoComponent } from '../contato/contato.component';


@NgModule({
  declarations: [
    IndexComponent,
    ServicosComponent,
    DepoimentosComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PlanoModule
  ],
  exports:[
    IndexComponent
  ]
})
export class IndexModule { }

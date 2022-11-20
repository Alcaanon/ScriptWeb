import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DetalhesComponent } from './detalhes/detalhes.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    FormularioComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './projeto-final/contato/contato.component';
import { IndexComponent } from './projeto-final/index/index.component';
import { LoginComponent } from './projeto-final/login/login.component';
import { RegisterComponent } from './projeto-final/register/register.component';
import { SenhaComponent } from './projeto-final/senha/senha.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'cadastro', component: RegisterComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'recuperar-senha', component: SenhaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './projeto-final/contato/contato.component';
import { IndexComponent } from './projeto-final/index/index.component';
import { LoginComponent } from './projeto-final/login/login.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

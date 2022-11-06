import { Component } from '@angular/core';

//Diretivas do angular
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Data Binding';
  descricao = "O data binding pega uma informação no arquivo .ts e leva para o arquivo. html";
  imagem = "https://cdn.pixabay.com/photo/2022/10/05/20/43/hyacinth-macaw-7501470__340.jpg";
  des = "Papagaio";

  //Declarando um objeto quando coloco as ={}
 
}
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
  titulo = "Minhas Fotos";
  
  catalogoFotos = [
    {img: "assets/img/portfolio/cabin.png", titulo: "Cabana"},
    {img: "assets/img/portfolio/cake.png", titulo: "Bolo"},
    {img: "assets/img/portfolio/circus.png", titulo: "Circo"},
    {img: "assets/img/portfolio/game.png", titulo: "Jogo"},
    {img: "assets/img/portfolio/safe.png", titulo: "Cofre"},
    {img: "assets/img/portfolio/submarine.png", titulo: "Submarino"},
  ]

  clicar()
  {
    if(this.titulo == "Minhas Fotos")
    {
      this.titulo = "Minhas Imagens";
    }
    else
    {
      this.titulo = "Minhas Fotos";
    }    
  }
}
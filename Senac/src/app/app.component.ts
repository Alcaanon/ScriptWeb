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
  pessoa = {
    nome:"Thalis Mateus",
    idade: 28,
    altura: 1.70,
    aniversario: "28/01/1994"
  };

  fotos = {
    img: ""
  }
  catalogoFotos = [
    {img: "https://i.imgur.com/27Fu23S.jpg"},
    {img: "https://imgur.com/iXTbTNQ.jpg"},
    {img: "https://imgur.com/ngVf76n.jpg"},
    {img: "https://imgur.com/Rqf8EhW.jpg"},
    {img: "https://imgur.com/OeKSUpk.jpg"},
  ]
  
  meuCliente = [
 
    { nome: "Joao", idade:15 },
    { nome: "Mara", idade:35 },
    { nome: "Maria", idade:35 },
    { nome: "silva", idade:11 },
  ];
}
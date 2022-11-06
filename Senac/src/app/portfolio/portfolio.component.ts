import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  titulo = "PORTFOLIO";
  
  catalogoFotos = [
    {img: "assets/img/portfolio/cabin.png", titulo: "Cabana"},
    {img: "assets/img/portfolio/cake.png", titulo: "Bolo"},
    {img: "assets/img/portfolio/circus.png", titulo: "Circo"},
    {img: "assets/img/portfolio/game.png", titulo: "Jogo"},
    {img: "assets/img/portfolio/safe.png", titulo: "Cofre"},
    {img: "assets/img/portfolio/submarine.png", titulo: "Submarino"},
  ]

  Pares: boolean = true;
  button = 'Mostrar Pares';
  clicar() {
    if (this.Pares) {
      this.Pares = !this.Pares;
      this.button = 'Mostrar Todas as fotos';
    } else {
      this.Pares = !this.Pares;
      this.button = 'Mostrar Pares';
    }
  }
}

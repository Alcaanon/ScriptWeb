import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Fotos } from './portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

  ngOnInit(): void {
  }
  titulo = "PORTFOLIO";
    
  catalogoFotos: Fotos[] = [];

  constructor(private fotos: HttpClient) 
  { 
    fotos.get<Fotos[]>('http://localhost:3000/fotos').subscribe(caixa => this.catalogoFotos = caixa)    
  }

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

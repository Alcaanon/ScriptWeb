import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Fotos } from './portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  ngOnInit(): void {
  }
  titulo = "PORTFOLIO";
    
  catalogoFotos: Fotos[] = [];

  constructor(private http: HttpClient) 
  { 
    http.get<Fotos[]>('http://localhost:3000/fotos').subscribe(caixa => this.catalogoFotos = caixa)    
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

  deletar(id:number){
    alert("Deletado com sucesso");
    this.http.delete('http://localhost:3000/fotos/'+ id).subscribe();
  }

}

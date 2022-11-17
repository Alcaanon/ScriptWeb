import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Fotos } from './portfolio';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

  constructor(private database: DatabaseService) {}

  catalogoFotos: Fotos[] = [];

  ngOnInit() {
    this.database.getFoto().subscribe(caixa => this.catalogoFotos = caixa);
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  titulo = "PORTFOLIO";

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
    this.database.delFoto(id).subscribe();
  }

}

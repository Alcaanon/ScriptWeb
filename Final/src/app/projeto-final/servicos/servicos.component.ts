import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/assets/Interfaces/Servico';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  constructor(
    private database: DatabaseService
  ) { }

  catalogoServico: Servico[] = [];

  ngOnInit() {
    this.database.getServico().subscribe(servico => this.catalogoServico = servico)
  }

  deletar(id: number){
    alert("Deletado com sucesso");
    this.database.delServico(id).subscribe();
  }

}

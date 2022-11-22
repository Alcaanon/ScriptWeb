import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Servico } from 'src/assets/Interfaces/Servico';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-servico-detalhes',
  templateUrl: './servico-detalhes.component.html',
  styleUrls: ['./servico-detalhes.component.css']
})
export class ServicoDetalhesComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private database: DatabaseService
  ) { }


  ngOnInit(): void {
    this.ValidaForm();
  }

  formulario!: FormGroup;

  servico: Servico = {
    id: 0,
    imagem: "",
    titulo:"",
    descricao: ""
  }
  submitted = false;

  ValidaForm(){
    this.formulario = this.formBuilder.group({
      imagem: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
    });
  }

  editar(value: any) {
    let body = {
      imagem: value.imagem,
      titulo: value.titulo,
      descricao: value.descricao
    }

    this.database.updateServico(body, `622ca8c59f6c668226f74f52`)
      .subscribe(response => {
        console.log(response)
      })
  }

}


import { Component, OnInit } from '@angular/core';
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

  cadastro(): void{
    const data = {
      imagem: this.servico.imagem,
      titulo: this.servico.titulo,
      descricao: this.servico.descricao
    };
    this.database.postServico(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });

}

}


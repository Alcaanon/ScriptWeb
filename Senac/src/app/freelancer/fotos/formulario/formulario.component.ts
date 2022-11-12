import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Foto } from '../shared/foto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  formulario!: FormGroup;

  fotos: Foto = new Foto();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fotos = new Foto();
    this.formulario = this.formBuilder.group({
      img: [null, [Validators.required]],
      titulo: [null, [Validators.required]],
      descricao: [null, [Validators.required]]
    });
  }

  cadastro(){
    alert("Cadastrado com sucesso");
    console.log(this.formulario.value);
  }



}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Usuario } from 'src/assets/Interfaces/Usuario';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  constructor(
    private formBuilder: FormBuilder,
    private database: DatabaseService
  ) { }

  ngOnInit(): void {
    this.validaForm();
  }

  usuario: Usuario = {
    id: 0,
    nome: "",
    email: "",
    senha: ""
  }    
  submitted = false;

  
  formulario!: FormGroup;

  validaForm(){
    this.formulario = this.formBuilder.group({
      
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]

    });
  }

  cadastro(): void{
    const data = {
      nome: this.usuario.nome,
      email: this.usuario.email,
      senha: this.usuario.senha
    };
    this.database.postUsuario(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Fotos } from '../../portfolio/portfolio';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  
  foto: Fotos = {
    img: "",
    titulo: "",
    id: 0
  };
  submitted = false;

  constructor(
    private formBuilder: FormBuilder, 
    private database: DatabaseService
    ) { }
    
    ngOnInit(): void {
      this.validaForm();
    }

    formulario!: FormGroup;

    validaForm(){
      this.formulario = this.formBuilder.group({
        img: ['', [Validators.required]],
        titulo: ['', [Validators.required]]
      });
    }
  
    cadastro(): void{
      const data = {
        img: this.foto.img,
        titulo: this.foto.titulo
      };
      this.database.postFoto(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    }
}

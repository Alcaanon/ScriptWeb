import { Component, OnInit } from '@angular/core';
import { Foto } from '../shared/foto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  fotos: Foto = new Foto();

  constructor() { }

  ngOnInit(): void {
    this.fotos = new Foto();
  }

  onSubmit() { 
    console.log(this.fotos);
    this.fotos = new Foto();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/assets/Interfaces/Usuario';
import { Servico } from 'src/assets/Interfaces/Servico';


const UserURL = 'http://localhost:3000/Usuario'
const ServiceURL = 'http://localhost:3000/Servico'

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  constructor(
    private http: HttpClient
  ) { }

  

  getUsuario(){
    return this.http.get<Usuario[]>(UserURL)
  }

  postUsuario(data: any): Observable<any>{
    return this.http.post(UserURL,data)
  }

  delUsuario(id:number){
    return this.http.delete(`${UserURL}/${id}`);
  }

  updateUsuario(id: any, data: any): Observable<any>{
    return this.http.put(`${UserURL}/${id}`, data);
  }

  getServico(){
    return this.http.get<Servico[]>(ServiceURL)
  }

  postServico(data: any): Observable<any>{
    return this.http.post(ServiceURL,data)
  }

  delServico(id:number){
    return this.http.delete(`${ServiceURL}/${id}`);
  }

  updateServico(id: any, data: any): Observable<any>{
    return this.http.put(`${ServiceURL}/${id}`, data);
  }



}

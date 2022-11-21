import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/assets/Interfaces/Usuario';


const UserURL = 'http://localhost:3000/Usuario'

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





}

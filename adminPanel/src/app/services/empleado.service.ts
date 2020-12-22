import { Injectable } from '@angular/core';
import { Empleado } from '../interfaces/empleado';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  API_ENDPOINT='http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) { }
  empleado: Empleado[];
  
  get(){
    return this.httpClient.get(this.API_ENDPOINT+'/listar-empleados');
  }
  
  save(empleado: Empleado){
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.post(this.API_ENDPOINT+'/ingresar-empleado', empleado,{headers: headers});
  }

  getDisponibles(){
    return this.httpClient.get(this.API_ENDPOINT+'/empleados-disponibles');
  }
}

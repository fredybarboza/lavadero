import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Vehiculo } from '../interfaces/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private httpClient: HttpClient) { }

  API_ENDPOINT='http://127.0.0.1:8000/api';

  get(){
    return this.httpClient.get(this.API_ENDPOINT+'/vehiculos');
  }

  save(vehiculo: Vehiculo){
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.post(this.API_ENDPOINT+'/vehiculos', vehiculo,{headers: headers});
  }
}

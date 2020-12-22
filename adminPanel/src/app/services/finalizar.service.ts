import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinalizarService {

  API_ENDPOINT='http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) { }

  put(id){
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.put(this.API_ENDPOINT+'/finalizar-pedido/'+id, {headers: headers});
  }

  get(){
    return this.httpClient.get(this.API_ENDPOINT+'/pedidos-finalizados');
  }
}

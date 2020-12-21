import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Pedido} from '../interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  
  API_ENDPOINT='http://127.0.0.1:8000/api';
  
  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(this.API_ENDPOINT+'/pedidos-en-espera');
  }

  getAprobados(){
    return this.httpClient.get(this.API_ENDPOINT+'/pedidos-aceptados');
  }

  put(pedido){
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.put(this.API_ENDPOINT+'/asignar-empleado/'+pedido.id, pedido,{headers: headers});
  }

  getFinalizados(){
    return this.httpClient.get(this.API_ENDPOINT+'/pedidos-finalizados');
  }

  putTrabajos(id){
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.put(this.API_ENDPOINT+'/listar-trabajos/'+id,{headers: headers});
  }
}

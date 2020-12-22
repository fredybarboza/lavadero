import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Pedido } from '../interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private httpClient: HttpClient) { }

  API_ENDPOINT='http://127.0.0.1:8000/api';

  get(){
    return this.httpClient.get(this.API_ENDPOINT+'/pedidos');
  }

  getWaiting(){
    return this.httpClient.get(this.API_ENDPOINT+'/pedidos-en-espera');
  }

  getAccepted(){
    return this.httpClient.get(this.API_ENDPOINT+'/pedidos-aceptados');
  }

  save(pedido: Pedido){
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.post(this.API_ENDPOINT+'/pedidos', pedido,{headers: headers});
  }

  getFinish(){
    return this.httpClient.get(this.API_ENDPOINT+'/pedidos-finalizados');
  }
}

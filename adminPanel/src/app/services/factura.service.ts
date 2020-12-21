import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  API_ENDPOINT='http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) { }

  getFacturas(id){//Se utiliza el metodo put para poder mandar el id del pedido
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.httpClient.put(this.API_ENDPOINT+'/guardar-factura/'+id,{headers: headers});
  }
}

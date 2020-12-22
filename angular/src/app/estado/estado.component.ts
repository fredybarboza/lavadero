import { Component, OnInit } from '@angular/core';
import { Aceptado } from '../interfaces/aceptado';
import { Pedido } from '../interfaces/pedido';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss']
})
export class EstadoComponent implements OnInit {

  Pedidos: Pedido[];
  Aceptados: Aceptado[];

  
  constructor(private pedidoService: PedidosService) {
    this.waiting();
    this.accepted();
   }

  ngOnInit(): void {
  }
  
  waiting(){
    this.pedidoService.getWaiting().subscribe((data: Pedido[])=>{
      this.Pedidos=data;
    });
    
  }

  accepted(){
    this.pedidoService.getAccepted().subscribe((data: Aceptado[])=>{
      this.Aceptados=data;
    });
  }
  

}

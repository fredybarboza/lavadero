import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import {Pedido} from '../interfaces/pedido';
import { Factura } from '../interfaces/factura';
import { FacturaService } from '../services/factura.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  mostrar: boolean=false;
  Pedidos: Pedido[];
  Facturas: Factura[];
  constructor(private pedidosService: PedidosService, private facturaService: FacturaService) {
    this.getFinalizados();
   }

  ngOnInit(): void {
  }

  getFinalizados(){
    this.pedidosService.getFinish().subscribe((data: Pedido[])=>{
      this.Pedidos=data;
    });
  }
  show: boolean=true;
  mostrarFactura(id){
    this.show=false;
    this.mostrar=true;
    this.facturaService.getFacturas(id).subscribe((data: Factura[])=>{
      this.Facturas=data;
    })
  }

}

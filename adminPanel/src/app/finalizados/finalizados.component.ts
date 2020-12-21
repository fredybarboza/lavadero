import { Component, OnInit } from '@angular/core';
import { Factura } from '../interfaces/factura';
import { Pedido } from '../interfaces/pedido';
import { FacturaService } from '../services/factura.service';
import { FinalizarService } from '../services/finalizar.service';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.scss']
})
export class FinalizadosComponent implements OnInit {

  Pedidos: Pedido[];
  constructor(private finalizadosService: FinalizarService, private facturaService: FacturaService) {
    this.getFinalizados();
   }

  ngOnInit(): void {
  }

  getFinalizados(){
    this.finalizadosService.get().subscribe((data: Pedido[])=>{
      this.Pedidos=data;
    });
  }

  mostrar: boolean=false;
  Facturas: Factura[];
  show: boolean=true;
  mostrarFactura(id){
    this.show=false;
    this.mostrar=true;
    this.facturaService.getFacturas(id).subscribe((data: Factura[])=>{
      this.Facturas=data;
    })
  }

}

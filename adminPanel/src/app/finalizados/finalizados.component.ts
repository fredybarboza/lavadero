import { Component, OnInit } from '@angular/core';
import { Pedido } from '../interfaces/pedido';
import { FinalizarService } from '../services/finalizar.service';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.scss']
})
export class FinalizadosComponent implements OnInit {

  Pedidos: Pedido[];
  constructor(private finalizadosService: FinalizarService) {
    this.getFinalizados();
   }

  ngOnInit(): void {
  }

  getFinalizados(){
    this.finalizadosService.get().subscribe((data: Pedido[])=>{
      this.Pedidos=data;
    });
  }

}

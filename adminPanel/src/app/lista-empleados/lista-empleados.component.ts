import { Component, OnInit } from '@angular/core';
import { Empleado } from '../interfaces/empleado';
import { Pedido } from '../interfaces/pedido';
import { EmpleadoService } from '../services/empleado.service';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent implements OnInit {

  empleado: Empleado[];
  constructor(private empleadoService: EmpleadoService, private pedidoService: PedidoService) {
    this.getEmpleados();
   }

  ngOnInit(): void {
  }

  getEmpleados(){
    this.empleadoService.get().subscribe((data: Empleado[])=>{
      this.empleado=data;
    });
  }

  Pedidos: Pedido[];
  mostrarTrabajos(e){
    this.pedidoService.putTrabajos(e).subscribe((data: Pedido[])=>{
      this.Pedidos=data;
    });
  }


}

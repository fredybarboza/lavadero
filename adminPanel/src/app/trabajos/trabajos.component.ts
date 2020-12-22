import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from '../interfaces/pedido';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {

  id: any;
  Pedidos: Pedido[];
  /*Pedido: Pedido ={
    id: null,
    id_usuario: null,
    id_vehiculo: null,
    id_servicio: null,
    monto: null,
    id_empleado_encargado: null,
    updated_at: null,
  };*/
  constructor(private activatedRoute: ActivatedRoute, private pedidoService: PedidoService) {
    /*this.id = this.activatedRoute.snapshot.params['id'];
    this.pedidoService.getFinalizados().subscribe((data: Pedido[]) =>{
      this.Pedidos=data;
      this.Pedido= this.Pedidos.find((p)=>{return p.id == this.id});
      console.log(this.Pedido);
      
    }, (error)=>{
      console.log(error);
    });*/
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from '../interfaces/pedido';
import { PedidoService } from '../services/pedido.service';
import { Empleado } from '../interfaces/empleado';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.component.html',
  styleUrls: ['./asignar.component.scss']
})
export class AsignarComponent implements OnInit {

  Empleados: Empleado[];
  Pedido: Pedido={
    id: null,
    id_usuario: null,
    id_vehiculo: null,
    id_servicio: null,
    monto: null,
    turno: null,
    id_empleado_encargado: null,
    created_at: null,
    updated_at: null

  }
  id: any;
  editing: boolean=false;
  Pedidos: Pedido[];
  constructor(private activatedRoute: ActivatedRoute, private pedidosService: PedidoService, private empleadoService: EmpleadoService) {
    this.getEmpleadosDisponibles();
    this.id=this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.editing=true;
      this.pedidosService.get().subscribe((data: Pedido[])=>{
        this.Pedidos=data;
        this.Pedido=this.Pedidos.find((m)=>{return m.id== this.id});
        console.log(this.Pedido);
      },(error)=>{
        console.log("Error");
      });
    }else{
      this.editing=false;
    }
   }

  ngOnInit(): void {
  }

  updatePedido(){
    this.pedidosService.put(this.Pedido).subscribe(data => {
      alert('Pedido actualizado'),
      console.log(data);
    },error => {
      console.log(error);
      alert('Ocurrio un error');
    }
    );
  }


  getEmpleadosDisponibles(){
    this.empleadoService.getDisponibles().subscribe((data: Empleado[])=>{
      this.Empleados=data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehiculo } from '../interfaces/vehiculo';
import { Pedido } from '../interfaces/pedido';
import { VehiculosService } from '../services/vehiculos.service';
import { PedidosService } from '../services/pedidos.service';
import { FacturaService } from '../services/factura.service';
import { Factura } from '../interfaces/factura';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  id_vehiculo: any;
  precio: string;
  editing: boolean=false;
  vehiculo: Vehiculo[];
  vehicle: Vehiculo={
    id_vehiculo: null,
    id_categoria: null,
    id_usuario: null,
    marca: null,
    modelo: null,
    color: null,
    chapa: null,
  }

  pedido: Pedido={
    id_usuario: null,
    id_vehiculo: null,
    id_servicio: null,
    monto: null
  };

  factura: Factura={
    nombre: null,
    apellido: null,
    direccion: null,
    monto: null,
    servicio: null,
    numero_documento: null
  }


  constructor(private vehiculoService: VehiculosService,private activatedRoute: ActivatedRoute, private pedidosService: PedidosService, private facturaService: FacturaService) { 
    this.id_vehiculo=this.activatedRoute.snapshot.params['id_vehiculo'];
    if(this.id_vehiculo){
     this.editing=true;
     this.vehiculoService.get().subscribe((data: Vehiculo[]) =>{
       this.vehiculo=data;
       this.vehicle=this.vehiculo.find((n)=>{return n.id_vehiculo==this.id_vehiculo});
       console.log(this.vehicle);
     })
    }
    else{
      this.editing=false;
    }
  }

  ngOnInit(): void {
  }
  
  servicio: string;
  price: string;
  categoria: string;
  descripcion(servicio,categoria){
    const p = document.getElementById('servicio');
    //p.innerHTML='correcto';
    if(servicio==1){
      p.innerHTML='&#10003; Lavado interior <br>&#10003; Lavado de Motor <br>&#10003; Lavado Exterior <br>&#10003; Encerado(Pulido)';
      switch(categoria){
        case '1': this.price="80.000"; break;
        case '2': this.price="90.000"; break;
        case '3': this.price=""; break;
        case '4': this.price="100.000"; break;
        case '5': this.price="120.000"; break;
      }
    }
    else{
      if(servicio==2){
        p.innerHTML='&#10003; Lavado Exterior <br>&#10003; Encerado';
      switch(categoria){
        case '1': this.price="40.000"; break;
        case '2': this.price="50.000"; break;
        case '3': this.price=""; break;
        case '4': this.price="60.000"; break;
        case '5': this.price="70.000"; break;
      }
      }
      else{
        if(servicio==3){
          p.innerHTML='&#10003; Lavado Exterior';
      switch(categoria){
        case '1': this.price="30.000"; break;
        case '2': this.price="40.000"; break;
        case '3': this.price="20.000"; break;
        case '4': this.price="50.000"; break;
        case '5': this.price="60.000"; break;
      }
        }
        else{
          if(servicio==4){
            p.innerHTML='&#10003; Lavado Exterior <br>&#10003; Lavado Interior <br>&#10003; Encerado';
      switch(categoria){
        case '1': this.price="50.000"; break;
        case '2': this.price="60.000"; break;
        case '3': this.price=""; break;
        case '4': this.price="70.000"; break;
        case '5': this.price="80.000"; break;
      }
          }
          else{
            if(servicio==5){
              p.innerHTML='&#10003; Lavado Interior';
      switch(categoria){
        case '1': this.price="20.000"; break;
        case '2': this.price="30.000"; break;
        case '3': this.price=""; break;
        case '4': this.price="30.000"; break;
        case '5': this.price="50.000"; break;
      }
            }
          }
        }
      }
    }
  }

  savePedido(){
    /*Guardar Pedido*/
   this.pedidosService.save(this.pedido).subscribe(data => {
    alert('Pedido Guardado'),
    console.log(data);
  },error => {
    console.log(error);
    alert('Selecciones todos los items');
  }
  );
  /*Fin Guardar Pedido */
  /*Guardar Factura */
  this.facturaService.save(this.factura).subscribe(data => {
    console.log(data);
  },error => {
    console.log(error);
    alert('Error en la factura');
  }
  );
  

  }
  

}

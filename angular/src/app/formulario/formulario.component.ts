import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../services/vehiculos.service';
import {Vehiculo} from '../interfaces/vehiculo';
import { Pedido } from '../interfaces/pedido';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  
  constructor(private vehiculosService: VehiculosService) { 
    this.getVehiculos();
  }
  pedido: Pedido={
    id_usuario: null,
    id_vehiculo: null,
    id_servicio: null,
    monto: null
  };
  Vehiculos: Vehiculo[];
  getVehiculos(){
    this.vehiculosService.get().subscribe((data: Vehiculo[])=>{
      this.Vehiculos=data;
      console.log(data);
    });
  }

 

  ngOnInit(): void {
  }
  
  mostrar(id){
    const p = document.getElementById(id);
    p.innerHTML='&#x2705;&#xfe0e Lavado Exterior<br>&#x2705;&#xfe0e Lavado de motor<br>&#x2705;&#xfe0e Lavado Interior<br>&#x2705;&#xfe0e Encerado<hr><br> GS. 80.000';
    
  }

 
  




}

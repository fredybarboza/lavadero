import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../interfaces/vehiculo';
import { VehiculosService } from '../services/vehiculos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent implements OnInit {

  vehiculo: Vehiculo={
    id_categoria: null,
    id_usuario: null,
    marca: null,
    modelo: null,
    color: null,
    chapa: null
  }
  constructor(private vehiculoService: VehiculosService, private router: Router) { }

  ngOnInit(): void {
  }

  saveVehiculo(){
    this.vehiculoService.save(this.vehiculo).subscribe(data => {
      alert('Vehiculo Guardado'),
      console.log(data);
      this.router.navigate(['formulario']);
    },error => {
      console.log(error);
      alert('INGRESE TODOS LOS DATOS')});
  
   }


}

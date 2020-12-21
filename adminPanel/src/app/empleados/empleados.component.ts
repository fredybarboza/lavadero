import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../interfaces/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  empleado: Empleado={
    ci: null,
    nombre: null,
    apellido: null,
  }
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
  }

  saveEmpleado(){
    this.empleadoService.save(this.empleado).subscribe(data => {
      alert('Empleado Guardado'),
      console.log(data);
    },error => {
      console.log(error);
      alert('Ocurrio un error');
    }
    );
  }
  

}

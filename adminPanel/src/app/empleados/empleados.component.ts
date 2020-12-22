import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../interfaces/empleado';
import { Router } from '@angular/router';

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
  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmpleado(){
    this.empleadoService.save(this.empleado).subscribe(data => {
      alert('Empleado Guardado'),
      console.log(data);
      this.router.navigate(['/listar-empleados']);
    },error => {
      console.log(error);
      alert('Ocurrio un error');
    }
    );
  }
  

}

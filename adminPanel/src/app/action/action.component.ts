import { Component, OnInit } from '@angular/core';
import { Pedido } from '../interfaces/pedido';
import { PedidoService } from '../services/pedido.service';
import { FinalizarService } from '../services/finalizar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  Pedidos: Pedido[];
  Aprobados: Pedido[];
  constructor(private pedidoService: PedidoService,private finalizarService: FinalizarService, private router: Router) { 
    this.getPedidos();
    this.getPedidosAprobados();
  }

  ngOnInit(): void {
  }

  getPedidos(){
    this.pedidoService.get().subscribe((data: Pedido[])=>{
      this.Pedidos=data;
    });
  }

  getPedidosAprobados(){
    this.pedidoService.getAprobados().subscribe((data: Pedido[])=>{
      this.Aprobados=data;
    });
  }
  id: any;
  finalizar(id){
    this.finalizarService.put(id).subscribe(data => {
      alert('Finalizado'),
      console.log(data);
      this.router.navigate(['/finalizados']);
    },error => {
      console.log(error);
      alert('Ocurrio un error');
    }
    );
  }
  

}

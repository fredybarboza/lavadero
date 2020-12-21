<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pedido;

class estadoController extends Controller
{
    public function index()
    {
        $pedido= Pedido::where('estado','0')->get();
        foreach($pedido as $p){
        $servicio = $p->id_servicio;
        switch($servicio){
          case 1: $p->id_servicio="Full"; break;
          case 2: $p->id_servicio="Semi"; break;
          case 3: $p->id_servicio="ECO"; break;
        }
        }
        echo json_encode($pedido);
    }
}

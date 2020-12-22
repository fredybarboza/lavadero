<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pedido;
use App\Models\empleados;

class FinalizarController extends Controller
{
    public function update(Request $request, $id)
    {
        $pedido = Pedido::find($id);
        $pedido->estado = "2";
        $e = $pedido->id_empleado_encargado;
        $empleado =empleados::find($e);
        $empleado->estado = "0";
        $empleado->save();
        $pedido->save();
        
    }
}

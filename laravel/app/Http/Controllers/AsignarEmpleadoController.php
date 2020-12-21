<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pedido;
use App\Models\empleados;

class AsignarEmpleadoController extends Controller
{
    public function update(Request $request, $id)//Metodo para asignar un empleado a un pedido y cambiar el estado del empleado
    {
        //Asignar empleado
        $pedido = Pedido::find($id);
        $pedido->id_empleado_encargado = $request->id_empleado_encargado;
        //Cambiar estado del pedido a Ejecucion
        $pedido->estado="1";
        $pedido->save();
        //Cambiar estado del empleado
        $e = $request->id_empleado_encargado;
        $empleado = empleados::find($e);
        $empleado->estado = "1";
        $empleado->save();
        

    }
}

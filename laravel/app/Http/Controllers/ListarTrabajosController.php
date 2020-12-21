<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pedido;

class ListarTrabajosController extends Controller
{
    public function update(Request $request, $id)
    {
        $pedido= Pedido::where('id_empleado_encargado', $id)->get();
        echo json_encode($pedido);
    }
}

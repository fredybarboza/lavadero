<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pedido;

class PedidosFinalizadosController extends Controller
{
    public function index()
    {
        $pedido = Pedido::where('estado','2')->get();
        echo json_encode($pedido);
    }
}

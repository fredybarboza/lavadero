<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pedido;

class aceptadoController extends Controller
{
    public function index()
    {
        $n = 1;
        $pedido= Pedido::where('estado','1')->orderBy('id','ASC')->get();
        foreach($pedido as $p){
        $p->turno = $n;
        $p->save();
        $n++;
        }
        echo json_encode($pedido);
    }
}

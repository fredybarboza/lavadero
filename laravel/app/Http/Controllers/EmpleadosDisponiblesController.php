<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\empleados;

class EmpleadosDisponiblesController extends Controller
{
    public function index()
    {
        $empleados = empleados::where('estado','0')->get();
        echo json_encode($empleados);
    }
}

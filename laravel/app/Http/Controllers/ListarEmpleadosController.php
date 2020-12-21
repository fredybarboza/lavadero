<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\empleados;

class ListarEmpleadosController extends Controller
{
    public function index()
    {
        $empleados= empleados::get();
        echo json_encode($empleados);
    }
}

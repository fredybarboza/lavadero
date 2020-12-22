<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\VehiculoController;
use App\Http\Controllers\estadoController;
use App\Http\Controllers\aceptadoController;
use App\Http\Controllers\AsignarEmpleadoController;
use App\Http\Controllers\EmpleadosController;
use App\Http\Controllers\FinalizarController;
use App\Http\Controllers\EmpleadosDisponiblesController;
use App\Http\Controllers\PedidosFinalizadosController;
use App\Http\Controllers\ListarEmpleadosController;
use App\Http\Controllers\ListarTrabajosController;
use App\Http\Controllers\FacturaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('pedidos',PedidoController::class);
Route::resource('vehiculos',VehiculoController::class);
Route::resource('pedidos-en-espera',estadoController::class);
Route::resource('pedidos-aceptados',aceptadoController::class);
Route::resource('asignar-empleado',AsignarEmpleadoController::class);
Route::resource('ingresar-empleado',EmpleadosController::class);
Route::resource('finalizar-pedido',FinalizarController::class);
Route::resource('empleados-disponibles',EmpleadosDisponiblesController::class);
Route::resource('pedidos-finalizados',PedidosFinalizadosController::class);
Route::resource('listar-empleados',ListarEmpleadosController::class);
Route::resource('listar-trabajos',ListarTrabajosController::class);
Route::resource('guardar-factura',FacturaController::class);


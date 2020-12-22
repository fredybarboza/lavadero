<?php

namespace App\Http\Controllers;

use App\Models\Factura;
use App\Models\Pedido;
use Illuminate\Http\Request;

class FacturaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $factura = new Factura();
        $factura->nombre=$request->nombre;
        $factura->apellido=$request->apellido;
        $factura->numero_documento=$request->numero_documento;
        $factura->direccion=$request->direccion;
        $factura->monto=$request->monto;
        $factura->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Factura  $factura
     * @return \Illuminate\Http\Response
     */
    public function show(Factura $factura)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Factura  $factura
     * @return \Illuminate\Http\Response
     */
    public function edit(Factura $factura)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Factura  $factura
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
       $pedido=Pedido::find($id);
       $factura=Factura::find($id);
       $factura->monto=$pedido->monto;
       $s = $pedido->id_servicio;
       switch($s){
           case '1': $factura->servicio="FULL" ;break;
           case '2': $factura->servicio="EXTERIOR+" ;break;
           case '3': $factura->servicio="Exterior Eco" ;break;
           case '4': $factura->servicio="SEMI+" ;break;
           case '5': $factura->servicio="INTERIOR" ;break;
       }
       $factura->save();
       $f=Factura::where('id',$id)->get();
        echo json_encode($f);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Factura  $factura
     * @return \Illuminate\Http\Response
     */
    public function destroy(Factura $factura)
    {
        //
    }
}

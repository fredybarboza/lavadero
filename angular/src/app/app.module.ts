import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Route, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ActionComponent } from './action/action.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PedidoComponent } from './pedido/pedido.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { EstadoComponent } from './estado/estado.component';
import { HistorialComponent } from './historial/historial.component';


const routes: Route[]=[
  {path: '', component: ActionComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'pedido/:id_vehiculo', component: PedidoComponent},
  {path: 'agregar-vehiculo', component: VehiculoComponent},
  {path: 'seguir-pedido', component: EstadoComponent},
  {path: 'historial-de-lavados', component: HistorialComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioComponent,
    HeaderComponent,
    ActionComponent,
    PedidoComponent,
    VehiculoComponent,
    EstadoComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActionComponent } from './action/action.component';
import { Route, RouterModule } from '@angular/router';
import { Panel1Component } from './panel1/panel1.component';
import { HttpClientModule } from '@angular/common/http';
import { AsignarComponent } from './asignar/asignar.component';
import { FormsModule } from '@angular/forms';
import { FinalizadosComponent } from './finalizados/finalizados.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { TrabajosComponent } from './trabajos/trabajos.component';

const routes: Route[]=[
  {path: '', component: ActionComponent},
  {path: 'asignar-aceptar/:id', component: AsignarComponent},
  {path: 'finalizados', component: FinalizadosComponent},
  {path: 'registrar-empleados', component: EmpleadosComponent},
  {path: 'listar-empleados', component: ListaEmpleadosComponent},
  {path: 'trabajos/:id', component: TrabajosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActionComponent,
    Panel1Component,
    AsignarComponent,
    FinalizadosComponent,
    EmpleadosComponent,
    ListaEmpleadosComponent,
    TrabajosComponent
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

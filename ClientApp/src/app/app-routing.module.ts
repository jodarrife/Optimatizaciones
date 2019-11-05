import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//IMPORTAR LOS FICHEROS
//HOME DEL LOGIN
import { HomeComponent } from "./home/home.component";
//para cada ruta nos servira cada fichero de estos 
import { NotFountPageComponent } from "./Componentes/Complementos/not-fount-page/not-fount-page.component";
//registro docente
import { RegistroDocenteComponent } from "./Componentes/Registrar/registro-docente/registro-docente.component";
//Actividades Complementarias
import { RegistroActComplementariasComponent } from "./Componentes/Registrar/registro-act-complementarias/registro-act-complementarias.component";
//Registro plan de accion
import { RegistroPlanAccionComponent } from "./Componentes/Registrar/registro-plan-accion/registro-plan-accion.component";
//consulta docente
import { ConsultaDocenteComponent } from "./Componentes/Consultas/consulta-docente/consulta-docente.component";
//Modificar docente
import { ModificarDocenteComponent } from './Componentes/Modificar/modificar-docente/modificar-docente.component';
//crearemos varios objetos para crear las rutas
const routes: Routes = [
  //HOME LOGIN
  {path: 'HomePrincipal', component: HomeComponent},
  //Registro Docente
  {path: 'RegistroDocente', component: RegistroDocenteComponent},
  //Consulta Docente
  { path: 'ConsultaDocente', component: ConsultaDocenteComponent},
  //Modificar Docente
  { path: 'ModificarDocente/:identificacion', component: ModificarDocenteComponent},
  //RegistroActividades complememtarias
  {path: 'ActividadesComplementarias', component: RegistroActComplementariasComponent},
  //Registro plan de accion
  {path: 'PlanDeAccion', component: RegistroPlanAccionComponent},
  //error en url
  {path: '**', component: NotFountPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

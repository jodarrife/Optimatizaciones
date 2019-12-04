import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//IMPORTAR LOS FICHEROS
//HOME DEL LOGIN
import { HomeComponent } from "./home/home.component";
// Login
import { LoginComponent } from "./Componentes/Complementos/login/login.component"
//para cada ruta nos servira cada fichero de estos 
import { NotFountPageComponent } from "./Componentes/Complementos/not-fount-page/not-fount-page.component";


//registro docente
import { RegistroDocenteComponent } from "./Componentes/Registrar/registro-docente/registro-docente.component";
//Registro Complementarias
import { RegistroActComplementariasComponent } from "./Componentes/Registrar/registro-act-complementarias/registro-act-complementarias.component";
//Registro plan de accion
import { RegistroPlanAccionComponent } from "./Componentes/Registrar/registro-plan-accion/registro-plan-accion.component";
// Registrar Acciones
import { RegistroAccionesComponent } from './Componentes/Registrar/registro-acciones/registro-acciones.component';
//Registro de Tipo de Actividad
//import { RegistroTipoActividadComponent } from '';
//asignar tipo de actividad
import { AsignarTipoDeActividadComponent } from './Componentes/Registrar/asignar-tipo-de-actividad/asignar-tipo-de-actividad.component';


//consulta docente
import { ConsultaDocenteComponent } from "./Componentes/Consultas/consulta-docente/consulta-docente.component";
// Consultar Acciones
import { ConsultaAccionesComponent } from './Componentes/Consultas/consulta-acciones/consulta-acciones.component';
//Consultar Tipo de Actividad
import { ConsultaTipoActividadComponent } from './Componentes/Consultas/consulta-tipo-actividad/consulta-tipo-actividad.component';

//Modificar docente
import { ModificarDocenteComponent } from './Componentes/Modificar/modificar-docente/modificar-docente.component';
// Modificar Acciones
import { ModificarAccionesComponent } from './Componentes/Modificar/modificar-acciones/modificar-acciones.component';


// Desactivar Acciones
//crearemos varios objetos para crear las rutas
const routes: Routes = [
  
  //HOME LOGIN
  {path: '', component: HomeComponent},
  //LOGIN
  {path: 'Login', component: LoginComponent},

  //Registro Docente
  {path: 'RegistroDocente', component: RegistroDocenteComponent},
  //RegistroActividades complememtarias
  {path: 'RegistroActividadesComplementarias', component: RegistroActComplementariasComponent},
  //Registro plan de accion
  {path: 'RegistroPlanDeAccion', component: RegistroPlanAccionComponent},
  //Registro Acciones
  {path: 'RegistroAcciones', component: RegistroAccionesComponent},
  //Registrar Tipo de Actividades
  //{path: 'RegistroTipodeActividad', component: RegistroTipoDeActividadComponent},
  //ASIGNAR TIPO
  {path: 'AsignarTipodeActividad', component: AsignarTipoDeActividadComponent},

  //Consulta Docente
  { path: 'ConsultaDocente', component: ConsultaDocenteComponent},
  //Consulta Acciones
  { path: 'ConsultaAcciones', component: ConsultaAccionesComponent},
  //Consulta Tipo de Actividad
  { path: 'ConsultaTipoActividad', component: ConsultaTipoActividadComponent},
  
  
  //Modificar Docente
  { path: 'ModificarDocente/:identificacion', component: ModificarDocenteComponent},
  //Modificar Acciones
  { path: 'ModificarAcciones/:cod_Accion', component: ModificarAccionesComponent},


  //error en url
  {path: '**', component: NotFountPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';


import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';


import { HomeComponent } from './home/home.component';
import { NotFountPageComponent } from './Componentes/Complementos/not-fount-page/not-fount-page.component';


import { RegistroDocenteComponent } from './Componentes/Registrar/registro-docente/registro-docente.component';
import { RegistroActComplementariasComponent } from './Componentes/Registrar/registro-act-complementarias/registro-act-complementarias.component';
import { RegistroPlanAccionComponent } from './Componentes/Registrar/registro-plan-accion/registro-plan-accion.component';
import { RegistroAccionesComponent} from './Componentes/Registrar/registro-acciones/registro-acciones.component';
import { AsignarTipoDeActividadComponent } from './Componentes/Registrar/asignar-tipo-de-actividad/asignar-tipo-de-actividad.component';

import { ConsultaTipoActividadComponent } from './Componentes/Consultas/consulta-tipo-actividad/consulta-tipo-actividad.component';
import { ConsultaDocenteComponent } from './Componentes/Consultas/consulta-docente/consulta-docente.component';
import { ConsultaActComplementariasComponent } from './Componentes/Consultas/consulta-act-complementarias/consulta-act-complementarias.component';
import { ConsultaPlanAccionComponent } from './Componentes/Consultas/consulta-plan-accion/consulta-plan-accion.component';
import { ConsultaAccionesComponent } from './Componentes/Consultas/consulta-acciones/consulta-acciones.component';


import { DesactivarDocenteComponent } from './Componentes/Desactivar/desactivar-docente/desactivar-docente.component';
import { DesactivarActComplementariasComponent } from './Componentes/Desactivar/desactivar-act-complementarias/desactivar-act-complementarias.component';
import { DesactivarPlanAccionComponent } from './Componentes/Desactivar/desactivar-plan-accion/desactivar-plan-accion.component';
import { DesactivarAccionesComponent } from './Componentes/Desactivar/desactivar-acciones/desactivar-acciones.component';


import { ModificarDocenteComponent } from './Componentes/Modificar/modificar-docente/modificar-docente.component';
import { ModificarActComplementariasComponent } from './Componentes/Modificar/modificar-act-complementarias/modificar-act-complementarias.component';
import { ModificarPlanAccionComponent } from './Componentes/Modificar/modificar-plan-accion/modificar-plan-accion.component';
import { ModificarAccionesComponent } from './Componentes/Modificar/modificar-acciones/modificar-acciones.component';


import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './Componentes/Barras/sidebar/sidebar.component';
import { LoginComponent } from './Componentes/ComponetesLogin/login/login.component';

//modal
import { RegistroTipoDeActividadComponent } from './Componentes/Registrar/registro-tipo-de-actividad/registro-tipo-de-actividad.component';
import { AlertModalComponent } from './Componentes/Errores/@base/modals/alert-modal/alert-modal.component';

//pipes
import { FiltroDocentePipe } from './Componentes/Pipes/filtro-docente.pipe';

import { from } from 'rxjs';
import { FiltroAccionesPipe } from './Componentes/Pipes/filtro-acciones.pipe';
import { FiltroTipoActividadPipe } from './Componentes/Pipes/filtro-tipo-actividad.pipe';
import { FiltroPlanAccionPipe } from './Componentes/Pipes/filtro-plan-accion.pipe';
import {UserService} from  '../app/Componentes/ComponetesLogin/servicesLogin/user.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFountPageComponent,


    AsignarTipoDeActividadComponent,
    RegistroDocenteComponent,
    RegistroActComplementariasComponent,
    RegistroPlanAccionComponent,
    RegistroAccionesComponent,


    ConsultaDocenteComponent,
    ConsultaActComplementariasComponent,
    ConsultaPlanAccionComponent,
    ConsultaAccionesComponent,
    ConsultaTipoActividadComponent,

    DesactivarDocenteComponent,
    DesactivarActComplementariasComponent,
    DesactivarPlanAccionComponent,
    DesactivarAccionesComponent,


    ModificarDocenteComponent,
    ModificarActComplementariasComponent,
    ModificarPlanAccionComponent,
    ModificarAccionesComponent,


    SidebarComponent,
    LoginComponent,
    
    RegistroTipoDeActividadComponent,
   
    FiltroDocentePipe,
    AlertModalComponent,
    FiltroAccionesPipe,
    FiltroTipoActividadPipe,
    FiltroPlanAccionPipe,

    
    
   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' }
    ]),
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertModalComponent
]
})
export class AppModule { }

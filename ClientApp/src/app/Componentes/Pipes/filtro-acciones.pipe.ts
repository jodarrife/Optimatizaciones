import { Pipe, PipeTransform } from '@angular/core';
import { Acciones } from 'src/app/models/acciones';

@Pipe({
  name: 'filtroAcciones'
})
export class FiltroAccionesPipe implements PipeTransform {
  
  transform(acciones: Acciones[], searchText: string) {
    if (searchText == null) return acciones;
    return acciones.filter(accion =>
      accion.cod_Accion.toString().toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        accion.nombre_Accion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
       
    );
}

}
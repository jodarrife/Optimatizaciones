import { Pipe, PipeTransform } from '@angular/core';
import { TipoActividad } from 'src/app/models/tipo-actividad';

@Pipe({
  name: 'filtroTipoActividad'
})
export class FiltroTipoActividadPipe implements PipeTransform {
  transform(tipoActividades: TipoActividad[], searchText: string) {
    if (searchText == null) return tipoActividades;
    return tipoActividades.filter(tipoActividad =>
      tipoActividad.cod_TipoActividad.toString().toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      ||
      tipoActividad.nombre_Actividad.toLowerCase().indexOf(searchText.toLowerCase()) !== -1

    );
  }
}

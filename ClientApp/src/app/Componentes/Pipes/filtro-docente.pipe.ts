import { Pipe, PipeTransform } from '@angular/core';
import { Docente } from '../../models/docente';

@Pipe({
  name: 'filtroDocente'
})
export class FiltroDocentePipe implements PipeTransform {
  transform(docentes: Docente[], searchText: string) {
    if (searchText == null) return docentes;
    return docentes.filter(docente =>
      docente.identificacion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        docente.primer_Nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        docente.primer_Apellido.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        docente.telefono.toString().toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        docente.email.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}

}

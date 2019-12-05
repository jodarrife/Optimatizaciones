import { Pipe, PipeTransform } from '@angular/core';
import { DocenteViewModel } from '../../Componentes/Modals/Models/docente-view-model';

@Pipe({
  name: 'filtroCliente'
})
export class FiltroDocente implements PipeTransform {
    transform(docentes: DocenteViewModel[], searchText: string) {
        if (searchText == null) return docentes;
        return docentes.filter(docente =>
            docente.primer_Apellido.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
            ||
            docente.identificacion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        );
    }
  

}

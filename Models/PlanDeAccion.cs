using System;
using System.Data;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace DocenteSharpHTTP.Models
{
    public class PlanDeAccion
    {
        public PlanDeAccion() { }
        [Key]
        public int cod_Plan_Accion { get; set; }
        [Required, MaxLength(50), MinLength(3)]
        public string nombre_Plan_Accion { get; set; }

        [Required, MinLength(10)]
        public string descripcion { get; set; }
        [Required]
        public DateTime fecha_Inicio { get; set; }
        [Required]
        public DateTime fecha_Final { get; set; }
        
        //agregacion
        public string docenteId { get; set; }
        public List<AccionesItem> acciones { get; set; }
    }
}
using System;
using System.Data;
using System.ComponentModel.DataAnnotations;
namespace DocenteSharpHTTP.Models
{
    public class PlanDeAccion
    {
        public PlanDeAccion() { }
        [Key]
        public string cod_Plan_Accion { get; set; }
        [Required, MaxLength(50), MinLength(3)]
        public string nombre_Plan_Accion { get; set; }
        [Required]
        public string tipo_Plan_Accion { get; set; }
        [Required, MinLength(10)]
        public string descripcion { get; set; }
        [Required]
        public DateTime fecha_Inicio { get; set; }
        [Required]
        public DateTime fecha_Final { get; set; }
        [Required]
        public string idDocente { get; set; }
        public string estado_Plan_Accion { get; set; }
    }
}
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
namespace DocenteSharpHTTP.Models
{
    public class InterceptoTipo
    {
          [Key]
        public int codigo { get; set; }
        [Required]
        public int tipoActividadId { get; set; }
        [Required]
        public string docenteId { get; set; }
        [Required]
        public int horasAsignadas { get; set; }


    }
}
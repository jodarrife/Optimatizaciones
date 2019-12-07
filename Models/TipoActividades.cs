using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
namespace DocenteSharpHTTP.Models
{
    public class TipoActividad
    {/* */
        [Key]
        public int cod_TipoActividad { get; set; }
        [Required, MaxLength(50)]
        public string nombre_Actividad { get; set; }
      
    }
}
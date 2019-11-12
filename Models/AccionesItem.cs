
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
namespace DocenteSharpHTTP.Models
{
    public class AccionesItem
    {/* */
        [Key]
        public int cod_Accion { get; set; }
        [Required, MaxLength(50)]
        public string nombre_Accion { get; set; }
        [Required]
        public string tipo_Accion { get; set; }
    }
}
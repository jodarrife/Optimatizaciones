
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
        public int Cod_Accion { get; set; }
        [Required, MaxLength(50)]
        public string Nombre_Accion { get; set; }
        [Required]
        public string Tipo_Accion { get; set; }
    }
}
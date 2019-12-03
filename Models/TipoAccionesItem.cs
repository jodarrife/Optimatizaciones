using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
namespace DocenteSharpHTTP.Models
{
    public class TipoAccionesItem
    {/* */
        [Key]
        public int cod_TipoAcciones { get; set; }
        [Required, MaxLength(50)]
        public string nombre_Acciones { get; set; }

    }
}
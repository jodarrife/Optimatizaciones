
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
namespace DocenteSharpHTTP.Models
{
    public class Acciones
    {/* */
        [Key]
        [JsonProperty("cod_Accion")]
        public int Cod_Accion { get; set; }
        [JsonProperty("nombre_Accion")]
        public string Nombre_Accion { get; set; }
        [JsonProperty("tipo_Accion")]
        public string Tipo_Accion { get; set; }
    }
}
using Newtonsoft.Json;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
using System;
using System.ComponentModel.DataAnnotations;

namespace DocenteSharpHTTP.Models
{
    public class ActividadComplementaria
    {
        public ActividadComplementaria() { }
        [JsonProperty("cod_Actividad")]
        [Key]
        public int Cod_Actividad { get; set; }
        [JsonProperty("informe_Numero")]
        public string Informe_Numero { get; set; }
        [JsonProperty("tipo_Actividad")]
        public string Tipo_Actividad { get; set; }
        [JsonProperty("nombre_Actividad")]
        public string Nombre_Actividad { get; set; }
        [JsonProperty("descripcion")]
        public string Descripcion { get; set; }
        [JsonProperty("estado_Actividad")]
        public string Estado_Actividad { get; set; }
        [JsonProperty("fecha_Actividad")]
        public DateTime Fecha_Actividad { get; set; }
       
         
    }
}
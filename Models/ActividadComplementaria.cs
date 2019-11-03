using Newtonsoft.Json;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
using System;

namespace UPC.Modelos
{
    public class ActividadComplementaria
    {
        public ActividadComplementaria() { }
        [JsonProperty("cod_Actividad")]
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
        public ActividadComplementaria(int cod_Actividad, string informe_Numero, string tipo_Actividad, string nombre_Actividad, string descripcion, string estado_Actividad, DateTime fecha_Actividad)
        {
            Cod_Actividad = cod_Actividad;
            Informe_Numero = informe_Numero;
            Tipo_Actividad = tipo_Actividad;
            Nombre_Actividad = nombre_Actividad;
            Descripcion = descripcion;
            Estado_Actividad = estado_Actividad;
            Fecha_Actividad = fecha_Actividad;
        }
    }
}
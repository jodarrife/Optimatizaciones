
using Newtonsoft.Json;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
namespace UPC.Modelos
{
    public class Acciones
    {
        [JsonProperty("cod_Accion")]
        public int Cod_Accion { get; set; }
        [JsonProperty("nombre_Accion")]
        public string Nombre_Accion { get; set; }
        [JsonProperty("tipo_Accion")]
        public string Tipo_Accion { get; set; }
    }
}
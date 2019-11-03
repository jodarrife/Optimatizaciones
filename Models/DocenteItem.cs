using Newtonsoft.Json;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
namespace UPC.Modelos
{
    public class DocenteItem : PersonaItem
    {
        public DocenteItem() { }
        [JsonProperty("tipo_Docente")]
        public string Tipo_Docente { get; set; }
        public DocenteItem(string tipo_docente)
        {
            Tipo_Docente = tipo_docente;
        }
    }
}
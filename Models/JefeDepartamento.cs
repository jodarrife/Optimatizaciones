using Newtonsoft.Json;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,porque Task es una palabra Reservada de .NetCore
/// </Summary>
///

namespace UPC.Modelos
{
    public class JefeDepartamento : PersonaItem
    {
        public JefeDepartamento() { }
        [JsonProperty("cod_Departamentos")]
        public int Cod_Departamentos { get; set; }
        public JefeDepartamento(int cod_Departamentos)
        {
            Cod_Departamentos = cod_Departamentos;
        }
    }
}
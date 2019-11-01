using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UPC.Modelos
{
    public class Evidencia
    {
        public Evidencia() { }
        [JsonProperty("cod_Evidencia")]
        public int Cod_Evidencia { get; set; }
        [JsonProperty("nombre_Evidencia")]
        public string Nombre_Evidencia { get; set; }
        [JsonProperty("tipo_Evidencia")]
        public string Tipo_Evidencia { get; set; }
        public Evidencia(int cod_Evidencia, string nombre_Evidencia, string tipo_Evidencia)
        {
            Cod_Evidencia = cod_Evidencia;
            Nombre_Evidencia = nombre_Evidencia;
            Tipo_Evidencia = tipo_Evidencia;
        }
    }
}
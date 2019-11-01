using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UPC.Modelos
{
    public class Docente : Persona
    {
        public Docente() { }
        [JsonProperty("tipo_Docente")]
        public string Tipo_Docente { get; set; }
        public Docente(string tipo_docente)
        {
            Tipo_Docente = tipo_docente;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UPC.Modelos
{
    public class JefeDepartamento : Persona
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
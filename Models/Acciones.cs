using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UPC.Modelos
{
    public class Acciones
    {
        public Acciones() { }
        [JsonProperty("cod_Accion")]
        public int Cod_Accion { get; set; }
        [JsonProperty("nombre_Accion")]
        public string Nombre_Accion { get; set; }
        [JsonProperty("tipo_Accion")]
        public string Tipo_Accion { get; set; }
        public Acciones(int cod_Accion, string nombre_Accion, string tipo_Accion)
        {
            Cod_Accion = cod_Accion;
            Nombre_Accion = nombre_Accion;
            Tipo_Accion = tipo_Accion;
        }
    }
}
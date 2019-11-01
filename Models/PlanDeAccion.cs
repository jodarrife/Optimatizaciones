using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UPC.Modelos
{
    public class PlanDeAccion
    {
        public PlanDeAccion() { }
        [JsonProperty("cod_Plan_Accion")]
        public int Cod_Plan_Accion { get; set; }
        [JsonProperty("tipo_Plan_Accion")]
        public string Tipo_Plan_Accion { get; set; }
        [JsonProperty("descripcion")]
        public string Descripcion { get; set; }
        [JsonProperty("fecha_Inicio")]
        public DateTime Fecha_Inicio { get; set; }
        [JsonProperty("fecha_Final")]
        public DateTime Fecha_Final { get; set; }
        [JsonProperty("estado_Plan_Accion")]
        public string Estado_Plan_Accion { get; set; }
        public PlanDeAccion(int cod_Plan_Accion, string tipo_Plan_Accion, string descripcion, DateTime fecha_Inicio, DateTime fecha_Final, string estado_Plan_Accion)
        {
            Cod_Plan_Accion = cod_Plan_Accion;
            tipo_Plan_Accion = Tipo_Plan_Accion;
            Descripcion = descripcion;
            Fecha_Inicio = fecha_Inicio;
            Fecha_Final = fecha_Final;
            Estado_Plan_Accion = estado_Plan_Accion;
        }
    }
}
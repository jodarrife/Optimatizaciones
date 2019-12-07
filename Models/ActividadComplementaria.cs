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
  
        [Key]
        public int cod_Actividad { get; set; }
        public string informe_Numero { get; set; }
        public string Nombre_Actividad { get; set; }
        public string Descripcion { get; set; }
        private string _Estado_Actividad = "PLANEADO";
        public string Estado_Actividad { get { return this._Estado_Actividad; } set { this._Estado_Actividad = value; } }
        public DateTime Fecha_Actividad { get; set; }


        //agregar
        public int PlanDeAccion { get; set; }
       
         
    }
}
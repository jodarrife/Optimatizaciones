using Newtonsoft.Json;
using System;
using System.Data;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
///<Summary>
/// </Summary>
namespace DocenteSharpHTTP.Models
{
    public class DocenteItem
    {
         [Required]
        public string tipo_Documento { get; set; }
        [Key, MinLength(5)]
        public string identificacion { get; set; }
        [Required, MinLength(2)]
        public string primer_Nombre { get; set; }
        [MinLength(2)]
        public string segundo_Nombre { get; set; }
        [Required, MinLength(2)]
        public string primer_Apellido { get; set; }
        [Required, MinLength(2)]
        public string segundo_Apellido { get; set; }
        [Required]
        public DateTime fecha_Nacimiento { get; set; }
        [Required]
        public string genero { get; set; }
        [Required, EmailAddress]
        public string email { get; set; }
        [Required]
        public uint telefono { get; set; }
        private string _Cargo = "DOCENTE";
        public string cargo { get { return this._Cargo; } set { this._Cargo = value; } }
        private string _Estado = "ACTIVO";
        public string estadoSys { get { return this._Estado; } set { this._Estado = value; } } //estado en el sistema
        [Required]
        public string tipo_Docente { get; set; }
        [Required, MinLength(2)]
        public string user_Name { get; set; }
        [Required, MinLength(2)]
        public string contrasena { get; set; }


        //agregacion
        public List<TipoActividad> tipoActividad  { get; set; }
    }
}
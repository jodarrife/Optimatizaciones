using Newtonsoft.Json;
using System;
using System.Data;
using System.ComponentModel.DataAnnotations;
///<Summary>
/// </Summary>
namespace DocenteSharpHTTP.Models
{
    public class DocenteItem
    {
        [Required]
        public string tipo_Documento { get; set; }
        [Key]
        public string identificacion { get; set; }
        [Required, MaxLength(30)]
        public string primer_Nombre { get; set; }
        [MaxLength(30)]
        public string segundo_Nombre { get; set; }
        [Required, MaxLength(30)]
        public string primer_Apellido { get; set; }
        [MaxLength(30)]
        public string segundo_Apellido { get; set; }
        [Required]
        public DateTime fecha_Nacimiento { get; set; }
        public int edad { get; set; }
        public string genero { get; set; }
        [Required, EmailAddress]
        public string email { get; set; }
        [Required]
        public uint telefono { get; set; }
        private string _Cargo = "DOCENTE";
        public string cargo { get { return this._Cargo; } set { this._Cargo = value; } }
        [Required]
        public DateTime fecha_Vinculacion { get; set; }
        private string _Estado = "ACTIVO";
        public string estadoSys { get { return this._Estado; } set { this._Estado = value; } } //estado en el sistema
        [Required]
        public string tipo_Docente { get; set; }

    }
}
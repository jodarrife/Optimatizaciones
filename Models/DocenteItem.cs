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
        public string Tipo_Documento { get; set; }
        [Key]
        public string Identificacion { get; set; }
        [Required, MaxLength(30)]
        public string Primer_Nombre { get; set; }
        [MaxLength(30)]
        public string Segundo_Nombre { get; set; }
        [Required, MaxLength(30)]
        public string Primer_Apellido { get; set; }
        [MaxLength(30)]
        public string Segundo_Apellido { get; set; }
        [Required]
        public DateTime Fecha_Nacimiento { get; set; }
        public int Edad { get; set; }
        public string Genero { get; set; }
        [Required, EmailAddress]
        public string Email { get; set; }
        [Required]
        public uint Telefono { get; set; }
        private string _Cargo = "DOCENTE";
        public string Cargo { get { return this._Cargo; } set { this._Cargo = value; } }
        [Required]
        public DateTime Fecha_Vinculacion { get; set; }
        private string _Estado = "ACTIVO";
        public string EstadoSys { get { return this._Estado; } set { this._Estado = value; } } //estado en el sistema
        [Required]
        public string Tipo_Docente { get; set; }

    }
}
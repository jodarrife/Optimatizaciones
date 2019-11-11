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
        [JsonProperty("tipo_Documento")]
        [Required]
        public string Tipo_Documento { get; set; }
        [Key]
        [JsonProperty("identificacion")]
        public string Identificacion { get; set; }
        [JsonProperty("primer_Nombre")]
        [Required, MaxLength(100)]
        public string Primer_Nombre { get; set; }
        [JsonProperty("segundo_Nombre")]
        [MaxLength(100)]
        public string Segundo_Nombre { get; set; }
        [JsonProperty("primer_Apellido")]
        [Required, MaxLength(100)]
        public string Primer_Apellido { get; set; }
        [JsonProperty("segundo_Apellido")]
        [MaxLength(100)]
        public string Segundo_Apellido { get; set; }
        [JsonProperty("fecha_Nacimiento")]
        [Required]
        public DateTime Fecha_Nacimiento { get; set; }
        [JsonProperty("edad")]
        public int Edad { get; set; }
        [JsonProperty("genero")]
        public string Genero { get; set; }
        [JsonProperty("email")]
        [Required, EmailAddress]
        public string Email { get; set; }
        [JsonProperty("telefono")]
        public uint Telefono { get; set; }
        private string _Cargo = "DOCENTE";
        [JsonProperty("cargo")]
        public string Cargo { get{return this._Cargo;} set{this._Cargo=value;} }
        [JsonProperty("fecha_Vinculacion")]
        public DateTime Fecha_Vinculacion { get; set; }
        private string _Estado = "ACTIVO";
        [JsonProperty("estadoSys")]
        public string EstadoSys { get{return this._Estado;} set{this._Estado=value;} } //estado en el sistema
        [JsonProperty("tipo_Docente")]
        [Required]
        public string Tipo_Docente { get; set; }
    
    }
}
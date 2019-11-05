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
        public string Tipo_Documento { get; set; }
        [Key]
        [JsonProperty("identificacion")]
        public string Identificacion { get; set; }
        [JsonProperty("primer_Nombre")]
        public string Primer_Nombre { get; set; }
        [JsonProperty("segundo_Nombre")]
        public string Segundo_Nombre { get; set; }
        [JsonProperty("primer_Apellido")]
        public string Primer_Apellido { get; set; }
        [JsonProperty("segundo_Apellido")]
        public string Segundo_Apellido { get; set; }
        [JsonProperty("fecha_Nacimiento")]
        public DateTime Fecha_Nacimiento { get; set; }
        [JsonProperty("edad")]
        public int Edad { get; set; }
        [JsonProperty("genero")]
        public string Genero { get; set; }
        [JsonProperty("email")]
        public string Email { get; set; }
        [JsonProperty("telefono")]
        public uint Telefono { get; set; }
        [JsonProperty("cargo")]
        public string Cargo { get; set; }
        [JsonProperty("fecha_Vinculacion")]
        public DateTime Fecha_Vinculacion { get; set; }
        [JsonProperty("estadoSys")]
        public string EstadoSys { get; set; } //estado en el sistema
        [JsonProperty("tipo_Docente")]
        public string Tipo_Docente { get; set; }
    
    }
}
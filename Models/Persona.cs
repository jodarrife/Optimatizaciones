using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UPC.Modelos
{
    public class Persona
    {
        public Persona() { }
        [JsonProperty("tipo_Documento")]
        public string Tipo_Documento { get; set; }
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
        public decimal Edad { get; set; }
        [JsonProperty("genero")]
        public string Genero { get; set; }
        [JsonProperty("email")]
        public string Email { get; set; }
        [JsonProperty("telefono")]
        public string Telefono { get; set; }
        [JsonProperty("contraseña")]
        public string Contraseña { get; set; }
        [JsonProperty("cargo")]
        public decimal Cargo { get; set; }
        [JsonProperty("fecha_Vinculacion")]
        public string Fecha_Vinculacion { get; set; }
        [JsonProperty("estadoSys")]
        public string EstadoSys { get; set; } //estado en el sistema
        public Persona(
        string tipo_Documento,
        string identificacion,
        string primer_Nombre,
        string segundo_Nombre, 
        string primer_Apellido,
        string segundo_Apellido,
        DateTime fecha_Nacimiento,
        decimal edad,
        string genero,
        string email,
        string telefono,
        string Contraseña,
        string cargo,
        DataTime Fecha_Vinculacion,
        string estadoSys)
        {
            Tipo_Documento = tipo_Documento;
            Identificacion = identificacion;
            Primer_Nombre = primer_Nombre;
            Segundo_Nombre = segundo_Nombre;
            Primer_Apellido = primer_Apellido;
            Segundo_Apellido = segundo_Apellido;
            Fecha_Nacimiento = fecha_Nacimiento;
            Edad = edad;
            Genero = genero;
            Email = email;
            Telefono = telefono;
            Contraseña = contraseña;
            Cargo = cargo;
            EstadoSys = estadoSys;
        }

        //NOMBRE COMPLETO
        public string NombreCompleto
        {
            get
            {
                return primer_nombre + " " + segundo_nombre + " " + primer_Apellido + " " + segundo_Apellido;
            }
        }
    }
}
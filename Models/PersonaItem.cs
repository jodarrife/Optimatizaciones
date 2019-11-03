using Newtonsoft.Json;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
using System;

namespace UPC.Modelos
{
    public class PersonaItem
    {
        /* 
        public PersonaItem() { }
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
        public int Edad { get; set; }
        [JsonProperty("genero")]
        public string Genero { get; set; }
        [JsonProperty("email")]
        public string Email { get; set; }
        [JsonProperty("telefono")]
        public string Telefono { get; set; }
        [JsonProperty("cargo")]
        public string Cargo { get; set; }
        [JsonProperty("fecha_Vinculacion")]
        public DateTime Fecha_Vinculacion { get; set; }
        [JsonProperty("estadoSys")]
        public string EstadoSys { get; set; } //estado en el sistema
        public PersonaItem(
        string tipo_Documento,
        string identificacion,
        string primer_Nombre,
        string segundo_Nombre,
        string primer_Apellido,
        string segundo_Apellido,
        DateTime fecha_Nacimiento,
        int edad,
        string genero,
        string email,
        string telefono,
        string cargo,
        DateTime fecha_Vinculacion,
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
            Cargo = cargo;
            Fecha_Vinculacion = fecha_Vinculacion;
            EstadoSys = estadoSys;
        }

        //NOMBRE COMPLETO
        public string NombreCompleto
        {
            get
            {
                return Primer_Nombre + " " + Segundo_Nombre + " " + Primer_Apellido + " " + Segundo_Apellido;
            }
        }*/
    }
}
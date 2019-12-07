using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using DocenteSharpHTTP.Models;
using System.Threading.Tasks;
using System;
using System.Data;

namespace DocenteSharpHTTP.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class JefeDepartamentoController
    {

        private readonly ClassContext _context;
        public JefeDepartamentoController(ClassContext context)
        {
            _context = context;
            if (_context.JefeDepartamentos.Count() == 0)
            {

                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                //_context.JefeDepartamentos.Add(new DocenteItem { Tipo_Docente = "CATEDRATICO" });
                _context.JefeDepartamentos.Add(new JefeDepartamento
                {
                    tipo_Documento = "CEDULA",
                    identificacion = "1003242276",
                    primer_Nombre = "DIEGO",
                    segundo_Nombre = "ALEJANDRO",
                    primer_Apellido = "MARTINEZ",
                    segundo_Apellido = "BARBOSA",
                    fecha_Nacimiento = Convert.ToDateTime("3/11/2000").Date,
                    genero = "MASCULINO",
                    email = "jodarrife12@gmail.com",
                    telefono = 3004128610,
                    cargo = "DOCENTE",
                    estadoSys = "ACTIVO",
                    tipo_Docente = "CATEDRATICO",
                    user_Name = "Administrador",
                    contraseña = "12345"
                });
                _context.SaveChanges();
            }
        }
    }
}

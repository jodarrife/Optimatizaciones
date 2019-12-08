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
    public class JefeDepartamentoController : ControllerBase
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
                    contrasena = "12345"
                });
                _context.SaveChanges();
            }
        }
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        // GET: api/Docente
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JefeDepartamento>>> GetJefeDepartamento()
        {
            return await _context.JefeDepartamentos.ToListAsync();
        }
        // GET: api/Docente/1003242276
        [HttpGet("{identificacion}")]
        public async Task<ActionResult<JefeDepartamento>> GetJefeDepartamento(string identificacion)
        {
            var JefeDepartamento = await _context.JefeDepartamentos.FindAsync(identificacion);
            if (JefeDepartamento == null)
            {
                return NotFound();
            }
            return JefeDepartamento;
        }
        // POST: api/Docente
        [HttpPost]
        public async Task<ActionResult<JefeDepartamento>> PostDocente(JefeDepartamento item)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            /**var docenteItem = await _context.Docentes.FindAsync(identificacion);
            if (docenteItem != null)
            {
                return BadRequest();
            }*/

            _context.JefeDepartamentos.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetJefeDepartamento), new { identificacion = item.identificacion }, item);
        }



        // PUT: api/Docente/5
        [HttpPut("{identificacion}")]
        public async Task<IActionResult> PutJefeDepartamento(string identificacion, JefeDepartamento item)
        {
            if (identificacion != item.identificacion)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }
        // DELETE: api/Todo/5
        [HttpDelete("{identificacion}")]
        public async Task<IActionResult> DeletJefeDepartamento(string identificacion)
        {
            var JefeDepartamento = await
            _context.JefeDepartamentos.FindAsync(identificacion);
            if (JefeDepartamento == null)
            {
                return NotFound();
            }

            _context.JefeDepartamentos.Remove(JefeDepartamento);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        //LOGIN
        [HttpGet("user={user}")]
        public async Task<ActionResult<JefeDepartamento>> GetJefeDepartamentoByUser(string user)
        {
            //prueba linq
            var jefeDpto = await _context.JefeDepartamentos.FirstOrDefaultAsync(i => i.user_Name == user);
            if (jefeDpto == null)
            {
                return NotFound();
            }
            return jefeDpto;
        }
    }
}



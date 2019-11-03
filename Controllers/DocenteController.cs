using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using UPC.Modelos;
using System.Threading.Tasks;
using System;

namespace Docente.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocenteController : ControllerBase
    {

        private readonly ClassContext _context;
        public DocenteController(ClassContext context)
        {
            _context = context;
            if (_context.Docentes.Count() == 0)
            {
                
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                //_context.Docentes.Add(new DocenteItem { Tipo_Docente = "CATEDRATICO" });
                _context.Docentes.Add(new DocenteItem
                {
                    Tipo_Documento = "CEDULA",
                    Identificacion = "1003242276",
                    Primer_Nombre = "JORGE",
                    Segundo_Nombre = "DANIEL",
                    Primer_Apellido = "RINCONES",
                    Segundo_Apellido = "FERNANDEZ",
                    Fecha_Nacimiento =  "3/11/2000",
                    Edad = 19,
                    Genero = "MASCULINO",
                    Email = "jodarrife12@gmail.com",
                    Telefono = "3004128610",
                    //Contraseña = "12345",
                    Cargo = "DOCENTE",
                    Fecha_Vinculacion = "3/11/2019",
                    EstadoSys = "ACTIVO",
                    Tipo_Docente = "CATEDRATICO"
                });
                _context.SaveChanges();
            }
        }

        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        // GET: api/Docente
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DocenteItem>>> GetDocentes()
        {
            return await _context.Docentes.ToListAsync();
        }
        // GET: api/Docente/1003242276
        [HttpGet("{identificacion}")]
        public async Task<ActionResult<DocenteItem>> GetDocentes(string identificacion)
        {
            var docente = await _context.Docentes.FindAsync(identificacion);
            if (docente == null)
            {
                return NotFound();
            }
            return docente;
        }
        // POST: api/Docente
        [HttpPost]
        public async Task<ActionResult<DocenteItem>> PostDocente(DocenteItem docente)
        {
            _context.Docentes.Add(docente);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetDocentes), new { identificacion = docente.Identificacion }, docente);
        }
        // PUT: api/Task/5
        [HttpPut("{identificacion}")]
        public async Task<IActionResult> PutDocente(string identificacion, DocenteItem docente)
        {
            if (identificacion != docente.Identificacion)
            {
                return BadRequest();
            }
            _context.Entry(docente).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }
        // DELETE: api/Todo/5
        [HttpDelete("{identificacion}")]
        public async Task<IActionResult> DeleteDocente(string identificacion)
        {
            var docente = await
            _context.Docentes.FindAsync(identificacion);
            if (docente == null)
            {
                return NotFound();
            }

            _context.Docentes.Remove(docente);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
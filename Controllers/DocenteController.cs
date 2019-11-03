using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using UPC.Modelos;
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
                _context.Docentes.Add(new DocenteItem { Tipo_Docente = "CATEDRATICO" });
                //_context.Docentes.Add(new DocenteItem { tipo_Documento = "CEDULA", identificacion = "1003242276", primer_Nombre = "JORGE", segundo_Nombre = "DANIEL", primer_Apellido = "RINCONES", segundo_Apellido = "FERNANDEZ", Fecha_Nacimiento = 12 / 1 / 2000, Edad = 19, Genero = "MASCULINO", Email = "jodarrife12@gmail.com", Telefono = "3004128610", Contraseña = "12345", Cargo = "DOCENTE", Fecha_Vinculacion = 1 / 11 / 2019, EstadoSys = "ACTIVO", tipo_Docente = "CATEDRATICO" });
                _context.SaveChanges();
            }
        }
        /*
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        // GET: api/Docente
        [HttpGet]
        public async Docente<ActionResult<IEnumerable<DocenteItem>>> GetDocentes()
        {
            return await _context.Docentes.ToListAsync();
        }
        // GET: api/Docente/1003242276
        [HttpGet("{identificacion}")]
        public async Docente<ActionResult<DocenteItem>> GetDocentes(string identificacion)
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
        public async Docente<ActionResult<DocenteItem>> PostDocente(Docente docente)
        {
            _context.GetDocentes.Add(docente);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetDocentes), new { identificacion = docente.identificacion }, docente);
        }
        // PUT: api/Task/5
        [HttpPut("{identificacion}")]
        public async Docente<IActionResult> PutDocente(int identificacion, Docente docente)
        {
            if (identificacion != docente.identificacion)
            {
                return BadRequest();
            }
            _context.Entry(docente).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }
        // DELETE: api/Todo/5
        [HttpDelete("{identificacion}")]
        public async Docente<IActionResult> DeleteDocente(string identificacion)
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
        }*/
    }
}
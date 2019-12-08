using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using DocenteSharpHTTP.Models;
using System.Threading.Tasks;
using System;
using System.Data;

namespace DocenteSharpHTTP.Controllers
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
                    tipo_Documento = "CEDULA",
                    identificacion = "1003242276",
                    primer_Nombre = "JORGE",
                    segundo_Nombre = "DANIEL",
                    primer_Apellido = "RINCONES",
                    segundo_Apellido = "FERNANDEZ",
                    fecha_Nacimiento = Convert.ToDateTime("3/11/2000").Date,
                    genero = "MASCULINO",
                    email = "jodarrife12@gmail.com",
                    telefono = 3004128610,
                    cargo = "DOCENTE",
                    estadoSys = "ACTIVO",
                    tipo_Docente = "CATEDRATICO",
                    user_Name = "Docente",
                    contrasena = "12345"
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
            var docenteItem = await _context.Docentes.FindAsync(identificacion);
            if (docenteItem == null)
            {
                return NotFound();
            }
            return docenteItem;
        }
        // POST: api/Docente
        [HttpPost]
        public async Task<ActionResult<DocenteItem>> PostDocente(DocenteItem item)
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

            _context.Docentes.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetDocentes), new { identificacion = item.identificacion }, item);
        }


    
    // PUT: api/Docente/5
    [HttpPut("{identificacion}")]
    public async Task<IActionResult> PutDocente(string identificacion, DocenteItem item)
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
    //LOGIN
    [HttpGet("user={user}")]
         public async Task<ActionResult<DocenteItem>> GetDocenteByUser(string user)
        {
            //prueba linq
            var docente = await _context.Docentes.FirstOrDefaultAsync(i=>i.user_Name==user);
            if (docente == null)
            {
                return NotFound();
            }
                return docente;
        }
    }
}

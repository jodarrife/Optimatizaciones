using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DocenteSharpHTTP.Models;
using System;

namespace DocenteSharpHTTP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoActividadController : ControllerBase
    {
        private readonly ClassContext _context;
        public TipoActividadController(ClassContext context)
        {
            _context = context;
            if (_context.TipoActividades.Count() == 0)
            {
                _context.TipoActividades.Add(new TipoActividad { nombre_Actividad = "COMITÉ DE EVALUACIÓN" } );
                _context.TipoActividades.Add(new TipoActividad { nombre_Actividad = "TUTORÍAS" } );
                _context.TipoActividades.Add(new TipoActividad { nombre_Actividad = "INVESTIGACIÓN" } );
                _context.TipoActividades.Add(new TipoActividad { nombre_Actividad = "EXTENCIÓN" } );
                _context.TipoActividades.Add(new TipoActividad { nombre_Actividad = "MATERIAL DE APOYO" } );
                _context.TipoActividades.Add(new TipoActividad { nombre_Actividad = "TRABAJO DE GRADO" } );
                _context.TipoActividades.Add(new TipoActividad { nombre_Actividad = "COOPERACIÓN INTERISTITUCIONAL" } );
                _context.TipoActividades.Add(new TipoActividad { nombre_Actividad = "CRECIMIENTO PROFECIONAL" } );
                _context.TipoActividades.Add(new TipoActividad { nombre_Actividad = "ENCARGO ADMINISTRATIVO" } );
                _context.SaveChanges();
            }
        }
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        // GET: api/Acciones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoActividad>>> GetTipoActividades()
        {
            return await _context.TipoActividades.ToListAsync();
        }
        // GET: api/Acciones/1
        [HttpGet("{cod_TipoActividad}")]
        public async Task<ActionResult<TipoActividad>> GetTipoActividades(int cod_TipoActividad)
        {
            var tipoActividad = await _context.TipoActividades.FindAsync(cod_TipoActividad);
            if (tipoActividad == null)
            {
                return NotFound();
            }
            return tipoActividad;
        }
        // POST: api/Acciones
        [HttpPost]
        public async Task<ActionResult<TipoActividad>> PostTipoActividad(TipoActividad item)
        {
            _context.TipoActividades.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTipoActividades), new { cod_TipoActividad = item.cod_TipoActividad }, item);
        }
        // PUT: api/Acciones/5
        [HttpPut("{cod_TipoActividad}")]
        public async Task<IActionResult> PutTipoActividad(int cod_TipoActividad, TipoActividad item)
        {
            if (cod_TipoActividad != item.cod_TipoActividad)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }
        // DELETE: api/Todo/5
        [HttpDelete("{cod_TipoActividad}")]
        public async Task<IActionResult> DeleteTipoActividad(int cod_TipoActividad)
        {
            var tipoActividades = await
            _context.TipoActividades.FindAsync(cod_TipoActividad);
            if (tipoActividades == null)
            {
                return NotFound();
            }

            _context.TipoActividades.Remove(tipoActividades);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
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
    public class InterceptoTipoController : ControllerBase
    {
        private readonly ClassContext _context;
        public InterceptoTipoController(ClassContext context)
        {
            _context = context;
            if (_context.InterceptoTipos.Count() == 0)
            {
                _context.InterceptoTipos.Add(new InterceptoTipo
                {
                    tipoActividadId = 1,
                    docenteId= "1003242276",
                    horasAsignadas=60
                });
                _context.SaveChanges();
            }
        }
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        /** GET: api/Acciones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<IntersectoTipos>>> GetTipoAcciones()
        {
            return await _context.TipoAcciones.ToListAsync();
        }
        // GET: api/Acciones/1
        [HttpGet("{cod_TipoAcciones}")]
        public async Task<ActionResult<IntersectoTipos>> GetTipoAcciones(int cod_TipoAcciones)
        {
            var TipoAcciones = await _context.TipoAcciones.FindAsync(cod_TipoAcciones);
            if (TipoAcciones == null)
            {
                return NotFound();
            }
            return TipoAcciones;
        }
        // POST: api/Acciones
        [HttpPost]
        public async Task<ActionResult<IntersectoTipos>> PostTipoAcciones(TipoAccionesItem item)
        {
            _context.TipoAcciones.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTipoAcciones), new { cod_TipoAcciones = item.cod_TipoAcciones }, item);
        }
        // PUT: api/Acciones/5
        [HttpPut("{cod_TipoAcciones}")]
        public async Task<IActionResult> PutTipoAcciones(int cod_TipoAcciones, IntersectoTipos item)
        {
            if (cod_TipoAcciones != item.cod_TipoAcciones)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }
        // DELETE: api/Todo/5
        [HttpDelete("{cod_TipoAcciones}")]
        public async Task<IActionResult> DeleteTipoAcciones(int cod_TipoAcciones)
        {
            var TipoAcciones = await
            _context.TipoAcciones.FindAsync(cod_TipoAcciones);
            if (TipoAcciones == null)
            {
                return NotFound();
            }

            _context.TipoAcciones.Remove(TipoAcciones);
            await _context.SaveChangesAsync();
            return NoContent();
        }*/
    }
}
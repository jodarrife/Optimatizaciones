using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UPC.Modelos;
namespace TaskSharpHTTP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassController : ControllerBase
    {
        private readonly ClassContext _context;
        public TaskController(ClassContext context)
        {
            _context = context;
            if (_context.Persona.Count() == 0)
            {
                _context = context;
                if (_context.TaskItems.Count() == 0)
                {
                    // Crea un nuevo item si la coleccion esta vacia,
                    // lo que significa que no puedes borrar todos los Items.
                    _context.TaskItems.Add(new TaskItem { Id = 1, Title = "Priorizar el proyecto", Description = "Priorizar", Priority = true });
                    _context.TaskItems.Add(new TaskItem { Id = 2, Title = "Calendario el proyecto", Description = "Priorizar", Priority = true });
                    _context.SaveChanges();
                }
            }
        }

        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT

    }
}
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DocenteSharpHTTP.Models;
namespace PlanDeAccion.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlanAccionController : ControllerBase
    {
        private readonly ClassContext _context;
        public PlanAccionController(ClassContext context)
        {
           
        }

        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT

    }
}
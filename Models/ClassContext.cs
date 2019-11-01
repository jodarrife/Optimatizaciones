using Microsoft.EntityFrameworkCore;
namespace UPC.Modelos
{
    public class ClassContext : DbContext
    {
        public ClassContext(DbContextOptions<ClassContext> options) :
        base(options)
        {
        }
        public DbSet<Persona> Persona { get; set; }
        public DbSet<Docente> Docente { get; set; }
        public DbSet<JefeDepartamento> JefeDepartamento { get; set; }
        public DbSet<PlanDeAccion> PlanDeAccion { get; set; }
        public DbSet<Evidencia> Evidencia { get; set; }
        public DbSet<Acciones> Acciones { get; set; }
        public DbSet<ActividadComplementaria> ActividadComplementaria { get; set; }
    }

}

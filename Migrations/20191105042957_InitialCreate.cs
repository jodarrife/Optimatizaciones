using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Proyecto.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Acciones",
                columns: table => new
                {
                    Cod_Accion = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre_Accion = table.Column<string>(nullable: true),
                    Tipo_Accion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Acciones", x => x.Cod_Accion);
                });

            migrationBuilder.CreateTable(
                name: "ActividadComplementarias",
                columns: table => new
                {
                    Cod_Actividad = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Informe_Numero = table.Column<string>(nullable: true),
                    Tipo_Actividad = table.Column<string>(nullable: true),
                    Nombre_Actividad = table.Column<string>(nullable: true),
                    Descripcion = table.Column<string>(nullable: true),
                    Estado_Actividad = table.Column<string>(nullable: true),
                    Fecha_Actividad = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActividadComplementarias", x => x.Cod_Actividad);
                });

            migrationBuilder.CreateTable(
                name: "Docentes",
                columns: table => new
                {
                    Identificacion = table.Column<string>(nullable: false),
                    Tipo_Documento = table.Column<string>(nullable: true),
                    Primer_Nombre = table.Column<string>(nullable: true),
                    Segundo_Nombre = table.Column<string>(nullable: true),
                    Primer_Apellido = table.Column<string>(nullable: true),
                    Segundo_Apellido = table.Column<string>(nullable: true),
                    Fecha_Nacimiento = table.Column<DateTime>(nullable: false),
                    Edad = table.Column<int>(nullable: false),
                    Genero = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Telefono = table.Column<long>(nullable: false),
                    Cargo = table.Column<string>(nullable: true),
                    Fecha_Vinculacion = table.Column<DateTime>(nullable: false),
                    EstadoSys = table.Column<string>(nullable: true),
                    Tipo_Docente = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Docentes", x => x.Identificacion);
                });

            migrationBuilder.CreateTable(
                name: "Evidencias",
                columns: table => new
                {
                    Cod_Evidencia = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre_Evidencia = table.Column<string>(nullable: true),
                    Tipo_Evidencia = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Evidencias", x => x.Cod_Evidencia);
                });

            migrationBuilder.CreateTable(
                name: "PlanDeAccions",
                columns: table => new
                {
                    Cod_Plan_Accion = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Tipo_Plan_Accion = table.Column<string>(nullable: true),
                    Descripcion = table.Column<string>(nullable: true),
                    Fecha_Inicio = table.Column<DateTime>(nullable: false),
                    Fecha_Final = table.Column<DateTime>(nullable: false),
                    Estado_Plan_Accion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlanDeAccions", x => x.Cod_Plan_Accion);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Acciones");

            migrationBuilder.DropTable(
                name: "ActividadComplementarias");

            migrationBuilder.DropTable(
                name: "Docentes");

            migrationBuilder.DropTable(
                name: "Evidencias");

            migrationBuilder.DropTable(
                name: "PlanDeAccions");
        }
    }
}

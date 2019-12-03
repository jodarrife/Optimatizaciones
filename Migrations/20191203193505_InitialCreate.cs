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
                    cod_Accion = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre_Accion = table.Column<string>(maxLength: 50, nullable: false),
                    tipo_Accion = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Acciones", x => x.cod_Accion);
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
                    identificacion = table.Column<string>(nullable: false),
                    tipo_Documento = table.Column<string>(nullable: false),
                    primer_Nombre = table.Column<string>(maxLength: 30, nullable: false),
                    segundo_Nombre = table.Column<string>(maxLength: 30, nullable: true),
                    primer_Apellido = table.Column<string>(maxLength: 30, nullable: false),
                    segundo_Apellido = table.Column<string>(maxLength: 30, nullable: true),
                    fecha_Nacimiento = table.Column<DateTime>(nullable: false),
                    edad = table.Column<int>(nullable: false),
                    genero = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: false),
                    telefono = table.Column<long>(nullable: false),
                    cargo = table.Column<string>(nullable: true),
                    fecha_Vinculacion = table.Column<DateTime>(nullable: false),
                    estadoSys = table.Column<string>(nullable: true),
                    tipo_Docente = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Docentes", x => x.identificacion);
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
                    cod_Plan_Accion = table.Column<string>(nullable: false),
                    nombre_Plan_Accion = table.Column<string>(maxLength: 50, nullable: false),
                    tipo_Plan_Accion = table.Column<string>(nullable: false),
                    descripcion = table.Column<string>(nullable: false),
                    fecha_Inicio = table.Column<DateTime>(nullable: false),
                    fecha_Final = table.Column<DateTime>(nullable: false),
                    idDocente = table.Column<string>(nullable: false),
                    estado_Plan_Accion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlanDeAccions", x => x.cod_Plan_Accion);
                });

            migrationBuilder.CreateTable(
                name: "TipoAcciones",
                columns: table => new
                {
                    cod_TipoAcciones = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre_Acciones = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TipoAcciones", x => x.cod_TipoAcciones);
                });

            migrationBuilder.CreateTable(
                name: "TipoActividades",
                columns: table => new
                {
                    cod_TipoActividad = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre_Actividad = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TipoActividades", x => x.cod_TipoActividad);
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

            migrationBuilder.DropTable(
                name: "TipoAcciones");

            migrationBuilder.DropTable(
                name: "TipoActividades");
        }
    }
}

using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Proyecto.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ActividadComplementarias",
                columns: table => new
                {
                    cod_Actividad = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    informe_Numero = table.Column<string>(nullable: true),
                    Nombre_Actividad = table.Column<string>(nullable: true),
                    Descripcion = table.Column<string>(nullable: true),
                    Estado_Actividad = table.Column<string>(nullable: true),
                    Fecha_Actividad = table.Column<DateTime>(nullable: false),
                    PlanDeAccion = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActividadComplementarias", x => x.cod_Actividad);
                });

            migrationBuilder.CreateTable(
                name: "Docentes",
                columns: table => new
                {
                    identificacion = table.Column<string>(nullable: false),
                    tipo_Documento = table.Column<string>(nullable: false),
                    primer_Nombre = table.Column<string>(nullable: false),
                    segundo_Nombre = table.Column<string>(nullable: true),
                    primer_Apellido = table.Column<string>(nullable: false),
                    segundo_Apellido = table.Column<string>(nullable: false),
                    fecha_Nacimiento = table.Column<DateTime>(nullable: false),
                    genero = table.Column<string>(nullable: false),
                    email = table.Column<string>(nullable: false),
                    telefono = table.Column<long>(nullable: false),
                    cargo = table.Column<string>(nullable: true),
                    estadoSys = table.Column<string>(nullable: true),
                    tipo_Docente = table.Column<string>(nullable: false),
                    user_Name = table.Column<string>(nullable: false),
                    contrasena = table.Column<string>(nullable: false)
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
                name: "InterceptoTipos",
                columns: table => new
                {
                    codigo = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    tipoActividadId = table.Column<int>(nullable: false),
                    docenteId = table.Column<string>(nullable: false),
                    horasAsignadas = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InterceptoTipos", x => x.codigo);
                });

            migrationBuilder.CreateTable(
                name: "JefeDepartamentos",
                columns: table => new
                {
                    identificacion = table.Column<string>(nullable: false),
                    tipo_Documento = table.Column<string>(nullable: false),
                    primer_Nombre = table.Column<string>(nullable: false),
                    segundo_Nombre = table.Column<string>(nullable: true),
                    primer_Apellido = table.Column<string>(nullable: false),
                    segundo_Apellido = table.Column<string>(nullable: false),
                    fecha_Nacimiento = table.Column<DateTime>(nullable: false),
                    genero = table.Column<string>(nullable: false),
                    email = table.Column<string>(nullable: false),
                    telefono = table.Column<long>(nullable: false),
                    cargo = table.Column<string>(nullable: true),
                    estadoSys = table.Column<string>(nullable: true),
                    tipo_Docente = table.Column<string>(nullable: false),
                    user_Name = table.Column<string>(nullable: false),
                    contrasena = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JefeDepartamentos", x => x.identificacion);
                });

            migrationBuilder.CreateTable(
                name: "PlanDeAccions",
                columns: table => new
                {
                    cod_Plan_Accion = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre_Plan_Accion = table.Column<string>(maxLength: 50, nullable: false),
                    descripcion = table.Column<string>(nullable: false),
                    fecha_Inicio = table.Column<DateTime>(nullable: false),
                    fecha_Final = table.Column<DateTime>(nullable: false),
                    docenteId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlanDeAccions", x => x.cod_Plan_Accion);
                });

            migrationBuilder.CreateTable(
                name: "TipoActividades",
                columns: table => new
                {
                    cod_TipoActividad = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre_Actividad = table.Column<string>(maxLength: 50, nullable: false),
                    DocenteItemidentificacion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TipoActividades", x => x.cod_TipoActividad);
                    table.ForeignKey(
                        name: "FK_TipoActividades_Docentes_DocenteItemidentificacion",
                        column: x => x.DocenteItemidentificacion,
                        principalTable: "Docentes",
                        principalColumn: "identificacion",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Acciones",
                columns: table => new
                {
                    cod_Accion = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre_Accion = table.Column<string>(maxLength: 50, nullable: false),
                    tipoActividadID = table.Column<int>(nullable: false),
                    PlanDeAccioncod_Plan_Accion = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Acciones", x => x.cod_Accion);
                    table.ForeignKey(
                        name: "FK_Acciones_PlanDeAccions_PlanDeAccioncod_Plan_Accion",
                        column: x => x.PlanDeAccioncod_Plan_Accion,
                        principalTable: "PlanDeAccions",
                        principalColumn: "cod_Plan_Accion",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Acciones_PlanDeAccioncod_Plan_Accion",
                table: "Acciones",
                column: "PlanDeAccioncod_Plan_Accion");

            migrationBuilder.CreateIndex(
                name: "IX_TipoActividades_DocenteItemidentificacion",
                table: "TipoActividades",
                column: "DocenteItemidentificacion");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Acciones");

            migrationBuilder.DropTable(
                name: "ActividadComplementarias");

            migrationBuilder.DropTable(
                name: "Evidencias");

            migrationBuilder.DropTable(
                name: "InterceptoTipos");

            migrationBuilder.DropTable(
                name: "JefeDepartamentos");

            migrationBuilder.DropTable(
                name: "TipoActividades");

            migrationBuilder.DropTable(
                name: "PlanDeAccions");

            migrationBuilder.DropTable(
                name: "Docentes");
        }
    }
}

﻿// <auto-generated />
using System;
using DocenteSharpHTTP.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Proyecto.Migrations
{
    [DbContext(typeof(ClassContext))]
    partial class ClassContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DocenteSharpHTTP.Models.Acciones", b =>
                {
                    b.Property<int>("Cod_Accion")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Nombre_Accion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Tipo_Accion")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Cod_Accion");

                    b.ToTable("Accioness");
                });

            modelBuilder.Entity("DocenteSharpHTTP.Models.ActividadComplementaria", b =>
                {
                    b.Property<int>("Cod_Actividad")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Descripcion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Estado_Actividad")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Fecha_Actividad")
                        .HasColumnType("datetime2");

                    b.Property<string>("Informe_Numero")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nombre_Actividad")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Tipo_Actividad")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Cod_Actividad");

                    b.ToTable("ActividadComplementarias");
                });

            modelBuilder.Entity("DocenteSharpHTTP.Models.DocenteItem", b =>
                {
                    b.Property<string>("Identificacion")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Cargo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Edad")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EstadoSys")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Fecha_Nacimiento")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("Fecha_Vinculacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("Genero")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Primer_Apellido")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Primer_Nombre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Segundo_Apellido")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Segundo_Nombre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("Telefono")
                        .HasColumnType("bigint");

                    b.Property<string>("Tipo_Docente")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Tipo_Documento")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Identificacion");

                    b.ToTable("Docentes");
                });

            modelBuilder.Entity("DocenteSharpHTTP.Models.Evidencia", b =>
                {
                    b.Property<int>("Cod_Evidencia")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Nombre_Evidencia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Tipo_Evidencia")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Cod_Evidencia");

                    b.ToTable("Evidencias");
                });

            modelBuilder.Entity("DocenteSharpHTTP.Models.PlanDeAccion", b =>
                {
                    b.Property<int>("Cod_Plan_Accion")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Descripcion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Estado_Plan_Accion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Fecha_Final")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("Fecha_Inicio")
                        .HasColumnType("datetime2");

                    b.Property<string>("Tipo_Plan_Accion")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Cod_Plan_Accion");

                    b.ToTable("PlanDeAccions");
                });
#pragma warning restore 612, 618
        }
    }
}

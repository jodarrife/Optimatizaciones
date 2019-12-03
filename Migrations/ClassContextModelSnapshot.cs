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

            modelBuilder.Entity("DocenteSharpHTTP.Models.AccionesItem", b =>
                {
                    b.Property<int>("cod_Accion")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("nombre_Accion")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)")
                        .HasMaxLength(50);

                    b.Property<string>("tipo_Accion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("cod_Accion");

                    b.ToTable("Acciones");
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
                    b.Property<string>("identificacion")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("cargo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("edad")
                        .HasColumnType("int");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("estadoSys")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("fecha_Nacimiento")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("fecha_Vinculacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("genero")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("primer_Apellido")
                        .IsRequired()
                        .HasColumnType("nvarchar(30)")
                        .HasMaxLength(30);

                    b.Property<string>("primer_Nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(30)")
                        .HasMaxLength(30);

                    b.Property<string>("segundo_Apellido")
                        .HasColumnType("nvarchar(30)")
                        .HasMaxLength(30);

                    b.Property<string>("segundo_Nombre")
                        .HasColumnType("nvarchar(30)")
                        .HasMaxLength(30);

                    b.Property<long>("telefono")
                        .HasColumnType("bigint");

                    b.Property<string>("tipo_Docente")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tipo_Documento")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("identificacion");

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
                    b.Property<string>("cod_Plan_Accion")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("descripcion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("estado_Plan_Accion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("fecha_Final")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("fecha_Inicio")
                        .HasColumnType("datetime2");

                    b.Property<string>("idDocente")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nombre_Plan_Accion")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)")
                        .HasMaxLength(50);

                    b.Property<string>("tipo_Plan_Accion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("cod_Plan_Accion");

                    b.ToTable("PlanDeAccions");
                });

            modelBuilder.Entity("DocenteSharpHTTP.Models.TipoAccionesItem", b =>
                {
                    b.Property<int>("cod_TipoAcciones")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("nombre_Acciones")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)")
                        .HasMaxLength(50);

                    b.HasKey("cod_TipoAcciones");

                    b.ToTable("TipoAcciones");
                });

            modelBuilder.Entity("DocenteSharpHTTP.Models.TipoActividad", b =>
                {
                    b.Property<int>("cod_TipoActividad")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("nombre_Actividad")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)")
                        .HasMaxLength(50);

                    b.HasKey("cod_TipoActividad");

                    b.ToTable("TipoActividades");
                });
#pragma warning restore 612, 618
        }
    }
}

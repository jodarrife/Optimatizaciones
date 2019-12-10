﻿// <auto-generated />
using System;
using DocenteSharpHTTP.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Proyecto.Migrations
{
    [DbContext(typeof(ClassContext))]
    [Migration("20191208171857_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
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

                    b.Property<int?>("PlanDeAccioncod_Plan_Accion")
                        .HasColumnType("int");

                    b.Property<string>("nombre_Accion")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)")
                        .HasMaxLength(50);

                    b.Property<int>("tipoActividadID")
                        .HasColumnType("int");

                    b.HasKey("cod_Accion");

                    b.HasIndex("PlanDeAccioncod_Plan_Accion");

                    b.ToTable("Acciones");
                });

            modelBuilder.Entity("DocenteSharpHTTP.Models.ActividadComplementaria", b =>
                {
                    b.Property<int>("cod_Actividad")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Descripcion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Estado_Actividad")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Fecha_Actividad")
                        .HasColumnType("datetime2");

                    b.Property<string>("Nombre_Actividad")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PlanDeAccion")
                        .HasColumnType("int");

                    b.Property<string>("informe_Numero")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("cod_Actividad");

                    b.ToTable("ActividadComplementarias");
                });

            modelBuilder.Entity("DocenteSharpHTTP.Models.DocenteItem", b =>
                {
                    b.Property<string>("identificacion")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("cargo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("contrasena")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("estadoSys")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("fecha_Nacimiento")
                        .HasColumnType("datetime2");

                    b.Property<string>("genero")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("primer_Apellido")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("primer_Nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("segundo_Apellido")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("segundo_Nombre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("telefono")
                        .HasColumnType("bigint");

                    b.Property<string>("tipo_Docente")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tipo_Documento")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("user_Name")
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

            modelBuilder.Entity("DocenteSharpHTTP.Models.InterceptoTipo", b =>
                {
                    b.Property<int>("codigo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("docenteId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("horasAsignadas")
                        .HasColumnType("int");

                    b.Property<int>("tipoActividadId")
                        .HasColumnType("int");

                    b.HasKey("codigo");

                    b.ToTable("InterceptoTipos");
                });

            modelBuilder.Entity("DocenteSharpHTTP.Models.JefeDepartamento", b =>
                {
                    b.Property<string>("identificacion")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("cargo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("contrasena")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("estadoSys")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("fecha_Nacimiento")
                        .HasColumnType("datetime2");

                    b.Property<string>("genero")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("primer_Apellido")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("primer_Nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("segundo_Apellido")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("segundo_Nombre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("telefono")
                        .HasColumnType("bigint");

                    b.Property<string>("tipo_Docente")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tipo_Documento")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("user_Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("identificacion");

                    b.ToTable("JefeDepartamentos");
                });

            modelBuilder.Entity("DocenteSharpHTTP.Models.PlanDeAccion", b =>
                {
                    b.Property<int>("cod_Plan_Accion")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("descripcion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("docenteId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("fecha_Final")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("fecha_Inicio")
                        .HasColumnType("datetime2");

                    b.Property<string>("nombre_Plan_Accion")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)")
                        .HasMaxLength(50);

                    b.HasKey("cod_Plan_Accion");

                    b.ToTable("PlanDeAccions");
                });

            modelBuilder.Entity("DocenteSharpHTTP.Models.TipoActividad", b =>
                {
                    b.Property<int>("cod_TipoActividad")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DocenteItemidentificacion")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("nombre_Actividad")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)")
                        .HasMaxLength(50);

                    b.HasKey("cod_TipoActividad");

                    b.HasIndex("DocenteItemidentificacion");

                    b.ToTable("TipoActividades");
                });

            modelBuilder.Entity("DocenteSharpHTTP.Models.AccionesItem", b =>
                {
                    b.HasOne("DocenteSharpHTTP.Models.PlanDeAccion", null)
                        .WithMany("acciones")
                        .HasForeignKey("PlanDeAccioncod_Plan_Accion");
                });

            modelBuilder.Entity("DocenteSharpHTTP.Models.TipoActividad", b =>
                {
                    b.HasOne("DocenteSharpHTTP.Models.DocenteItem", null)
                        .WithMany("tipoActividad")
                        .HasForeignKey("DocenteItemidentificacion");
                });
#pragma warning restore 612, 618
        }
    }
}
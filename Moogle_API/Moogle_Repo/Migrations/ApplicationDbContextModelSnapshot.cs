﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Moogle_Repo;

#nullable disable

namespace Moogle_Repo.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Moogle_Models.Db_Models.FavoriteMovie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("DirectedBy")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EmsId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EmsVersionId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PosterImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ReleaseDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Synopsis")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("TotalGross")
                        .HasColumnType("int");

                    b.Property<string>("TrailerUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("FavoriteMovie");
                });

            modelBuilder.Entity("Moogle_Models.Db_Models.FavoriteMovieCast", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("CharacterName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("FavoriteMovieId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("FavoriteMovieId");

                    b.ToTable("FavoriteMovieCasts");
                });

            modelBuilder.Entity("Moogle_Models.Db_Models.FavoriteMovieImage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("FavoriteMovieId")
                        .HasColumnType("int");

                    b.Property<int?>("Height")
                        .HasColumnType("int");

                    b.Property<string>("Url")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Width")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("FavoriteMovieId");

                    b.ToTable("FavoriteMovieImages");
                });

            modelBuilder.Entity("Moogle_Models.Db_Models.Theater", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<float>("Distance")
                        .HasColumnType("real");

                    b.Property<bool>("HasReservedSeating")
                        .HasColumnType("bit");

                    b.Property<string>("HasShowTimes")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsTicketing")
                        .HasColumnType("bit");

                    b.Property<float>("Latitude")
                        .HasColumnType("real");

                    b.Property<float>("Longitude")
                        .HasColumnType("real");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Tid")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Theaters");
                });

            modelBuilder.Entity("Moogle_Models.Db_Models.TheaterZip", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("TheaterId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ZipCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("TheaterId");

                    b.ToTable("TheaterZips");
                });

            modelBuilder.Entity("Moogle_Models.Db_Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("State")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ZipCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Moogle_Models.Db_Models.UserZip", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<string>("ZipCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("UserZip");
                });

            modelBuilder.Entity("Moogle_Models.Db_Models.FavoriteMovie", b =>
                {
                    b.HasOne("Moogle_Models.Db_Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("Moogle_Models.Db_Models.FavoriteMovieCast", b =>
                {
                    b.HasOne("Moogle_Models.Db_Models.FavoriteMovie", "FavoriteMovie")
                        .WithMany("MovieCast")
                        .HasForeignKey("FavoriteMovieId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("FavoriteMovie");
                });

            modelBuilder.Entity("Moogle_Models.Db_Models.FavoriteMovieImage", b =>
                {
                    b.HasOne("Moogle_Models.Db_Models.FavoriteMovie", "FavoriteMovie")
                        .WithMany("Images")
                        .HasForeignKey("FavoriteMovieId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("FavoriteMovie");
                });

            modelBuilder.Entity("Moogle_Models.Db_Models.TheaterZip", b =>
                {
                    b.HasOne("Moogle_Models.Db_Models.Theater", "Theater")
                        .WithMany()
                        .HasForeignKey("TheaterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Theater");
                });

            modelBuilder.Entity("Moogle_Models.Db_Models.UserZip", b =>
                {
                    b.HasOne("Moogle_Models.Db_Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("Moogle_Models.Db_Models.FavoriteMovie", b =>
                {
                    b.Navigation("Images");

                    b.Navigation("MovieCast");
                });
#pragma warning restore 612, 618
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Moogle_Repo.Migrations
{
    /// <inheritdoc />
    public partial class addingfavoritemovietables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FavoriteMovie",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmsId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    EmsVersionId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PosterImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Synopsis = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DirectedBy = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TotalGross = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TrailerUrl = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FavoriteMovie", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FavoriteMovie_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FavoriteMovieCasts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CharacterName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FavoriteMovieId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FavoriteMovieCasts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FavoriteMovieCasts_FavoriteMovie_FavoriteMovieId",
                        column: x => x.FavoriteMovieId,
                        principalTable: "FavoriteMovie",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FavoriteMovieImages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FavoriteMovieId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FavoriteMovieImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FavoriteMovieImages_FavoriteMovie_FavoriteMovieId",
                        column: x => x.FavoriteMovieId,
                        principalTable: "FavoriteMovie",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FavoriteMovie_UserId",
                table: "FavoriteMovie",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_FavoriteMovieCasts_FavoriteMovieId",
                table: "FavoriteMovieCasts",
                column: "FavoriteMovieId");

            migrationBuilder.CreateIndex(
                name: "IX_FavoriteMovieImages_FavoriteMovieId",
                table: "FavoriteMovieImages",
                column: "FavoriteMovieId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FavoriteMovieCasts");

            migrationBuilder.DropTable(
                name: "FavoriteMovieImages");

            migrationBuilder.DropTable(
                name: "FavoriteMovie");
        }
    }
}

using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Midas.Migrations
{
    public partial class InitialDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Companys",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    tiingoTickerId = table.Column<int>(nullable: false),
                    iexTickerId = table.Column<int>(nullable: false),
                    yahooTickerId = table.Column<int>(nullable: false),
                    Symbol = table.Column<string>(nullable: true),
                    CompanyName = table.Column<string>(nullable: true),
                    Exchange = table.Column<string>(nullable: true),
                    Industry = table.Column<string>(nullable: true),
                    Website = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Ceo = table.Column<string>(nullable: true),
                    SecurityName = table.Column<string>(nullable: true),
                    IssueType = table.Column<string>(nullable: true),
                    Sector = table.Column<string>(nullable: true),
                    PrimarySicCode = table.Column<long>(nullable: false),
                    Employees = table.Column<long>(nullable: false),
                    Address = table.Column<string>(nullable: true),
                    Address2 = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Zip = table.Column<string>(nullable: true),
                    Country = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companys", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Days",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTimeOffset>(nullable: false),
                    day = table.Column<int>(nullable: false),
                    month = table.Column<int>(nullable: false),
                    year = table.Column<int>(nullable: false),
                    deleted = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Days", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "OptionCycleCloseMonths",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Month = table.Column<int>(nullable: false),
                    Year = table.Column<int>(nullable: false),
                    CloseDate = table.Column<DateTimeOffset>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OptionCycleCloseMonths", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "OptionCycleDates",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DayId = table.Column<int>(nullable: false),
                    OptionCycleMonthId = table.Column<int>(nullable: false),
                    OpenDate = table.Column<DateTimeOffset>(nullable: false),
                    OpenMonth = table.Column<int>(nullable: false),
                    OpenYear = table.Column<int>(nullable: false),
                    OptionCycleCloseMonthId = table.Column<int>(nullable: false),
                    CloseDate = table.Column<DateTimeOffset>(nullable: false),
                    CloseMonth = table.Column<int>(nullable: false),
                    CloseYear = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OptionCycleDates", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "OptionCycleMonths",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Month = table.Column<int>(nullable: false),
                    Year = table.Column<int>(nullable: false),
                    Date = table.Column<DateTimeOffset>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OptionCycleMonths", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Settings",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    averageDailyVolume = table.Column<double>(nullable: false),
                    systemAverageDailyVolume = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Settings", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Tickers",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompanyId = table.Column<int>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    ticker = table.Column<string>(nullable: true),
                    TiingoBool = table.Column<bool>(nullable: false),
                    IexBool = table.Column<bool>(nullable: false),
                    YahooBool = table.Column<bool>(nullable: false),
                    exchange = table.Column<string>(nullable: true),
                    assetType = table.Column<string>(nullable: true),
                    priceCurrency = table.Column<string>(nullable: true),
                    startDate = table.Column<string>(nullable: true),
                    endDate = table.Column<string>(nullable: true),
                    isEnabled = table.Column<bool>(nullable: false),
                    Isin = table.Column<double>(nullable: false),
                    type = table.Column<string>(nullable: true),
                    industry = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tickers", x => x.id);
                    table.ForeignKey(
                        name: "FK_Tickers_Companys_CompanyId",
                        column: x => x.CompanyId,
                        principalTable: "Companys",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EODs",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DayId = table.Column<int>(nullable: false),
                    TickerId = table.Column<int>(nullable: false),
                    TiingoBool = table.Column<bool>(nullable: false),
                    IexBool = table.Column<bool>(nullable: false),
                    YahooBool = table.Column<bool>(nullable: false),
                    Date = table.Column<DateTimeOffset>(nullable: false),
                    Close = table.Column<double>(nullable: false),
                    High = table.Column<double>(nullable: false),
                    Low = table.Column<double>(nullable: false),
                    Open = table.Column<double>(nullable: false),
                    Volume = table.Column<long>(nullable: false),
                    AdjClose = table.Column<double>(nullable: false),
                    AdjHigh = table.Column<double>(nullable: false),
                    AdjLow = table.Column<double>(nullable: false),
                    AdjOpen = table.Column<double>(nullable: false),
                    AdjVolume = table.Column<long>(nullable: false),
                    Change = table.Column<double>(nullable: false),
                    ChangePercent = table.Column<double>(nullable: false),
                    DivCash = table.Column<double>(nullable: false),
                    SplitFactor = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EODs", x => x.id);
                    table.ForeignKey(
                        name: "FK_EODs_Days_DayId",
                        column: x => x.DayId,
                        principalTable: "Days",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EODs_Tickers_TickerId",
                        column: x => x.TickerId,
                        principalTable: "Tickers",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EODs_DayId",
                table: "EODs",
                column: "DayId");

            migrationBuilder.CreateIndex(
                name: "IX_EODs_TickerId",
                table: "EODs",
                column: "TickerId");

            migrationBuilder.CreateIndex(
                name: "IX_Tickers_CompanyId",
                table: "Tickers",
                column: "CompanyId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EODs");

            migrationBuilder.DropTable(
                name: "OptionCycleCloseMonths");

            migrationBuilder.DropTable(
                name: "OptionCycleDates");

            migrationBuilder.DropTable(
                name: "OptionCycleMonths");

            migrationBuilder.DropTable(
                name: "Settings");

            migrationBuilder.DropTable(
                name: "Days");

            migrationBuilder.DropTable(
                name: "Tickers");

            migrationBuilder.DropTable(
                name: "Companys");
        }
    }
}

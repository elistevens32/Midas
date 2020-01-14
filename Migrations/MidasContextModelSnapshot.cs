﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Midas;

namespace Midas.Migrations
{
    [DbContext(typeof(MidasContext))]
    partial class MidasContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Midas.Data.Entities.Company", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Address2")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ceo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CompanyName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Country")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("Employees")
                        .HasColumnType("bigint");

                    b.Property<string>("Exchange")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Industry")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IssueType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("PrimarySicCode")
                        .HasColumnType("bigint");

                    b.Property<string>("Sector")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SecurityName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("State")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Symbol")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Website")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Zip")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("iexTickerId")
                        .HasColumnType("int");

                    b.Property<int>("tiingoTickerId")
                        .HasColumnType("int");

                    b.Property<int>("yahooTickerId")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.ToTable("Companys");
                });

            modelBuilder.Entity("Midas.Data.Entities.Day", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTimeOffset>("Date")
                        .HasColumnType("datetimeoffset");

                    b.Property<int>("day")
                        .HasColumnType("int");

                    b.Property<int>("deleted")
                        .HasColumnType("int");

                    b.Property<int>("month")
                        .HasColumnType("int");

                    b.Property<int>("year")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.ToTable("Days");
                });

            modelBuilder.Entity("Midas.Data.Entities.EOD", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("AdjClose")
                        .HasColumnType("float");

                    b.Property<double>("AdjHigh")
                        .HasColumnType("float");

                    b.Property<double>("AdjLow")
                        .HasColumnType("float");

                    b.Property<double>("AdjOpen")
                        .HasColumnType("float");

                    b.Property<long>("AdjVolume")
                        .HasColumnType("bigint");

                    b.Property<double>("Change")
                        .HasColumnType("float");

                    b.Property<double>("ChangePercent")
                        .HasColumnType("float");

                    b.Property<double>("Close")
                        .HasColumnType("float");

                    b.Property<DateTimeOffset>("Date")
                        .HasColumnType("datetimeoffset");

                    b.Property<int>("DayId")
                        .HasColumnType("int");

                    b.Property<double>("DivCash")
                        .HasColumnType("float");

                    b.Property<double>("High")
                        .HasColumnType("float");

                    b.Property<bool>("IexBool")
                        .HasColumnType("bit");

                    b.Property<double>("Low")
                        .HasColumnType("float");

                    b.Property<double>("Open")
                        .HasColumnType("float");

                    b.Property<double>("SplitFactor")
                        .HasColumnType("float");

                    b.Property<int>("TickerId")
                        .HasColumnType("int");

                    b.Property<bool>("TiingoBool")
                        .HasColumnType("bit");

                    b.Property<long>("Volume")
                        .HasColumnType("bigint");

                    b.Property<bool>("YahooBool")
                        .HasColumnType("bit");

                    b.HasKey("id");

                    b.HasIndex("DayId");

                    b.HasIndex("TickerId");

                    b.ToTable("EODs");
                });

            modelBuilder.Entity("Midas.Data.Entities.OptionCycleCloseMonth", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTimeOffset>("CloseDate")
                        .HasColumnType("datetimeoffset");

                    b.Property<int>("Month")
                        .HasColumnType("int");

                    b.Property<int>("Year")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.ToTable("OptionCycleCloseMonths");
                });

            modelBuilder.Entity("Midas.Data.Entities.OptionCycleDate", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTimeOffset>("CloseDate")
                        .HasColumnType("datetimeoffset");

                    b.Property<int>("CloseMonth")
                        .HasColumnType("int");

                    b.Property<int>("CloseYear")
                        .HasColumnType("int");

                    b.Property<int>("DayId")
                        .HasColumnType("int");

                    b.Property<DateTimeOffset>("OpenDate")
                        .HasColumnType("datetimeoffset");

                    b.Property<int>("OpenMonth")
                        .HasColumnType("int");

                    b.Property<int>("OpenYear")
                        .HasColumnType("int");

                    b.Property<int>("OptionCycleCloseMonthId")
                        .HasColumnType("int");

                    b.Property<int>("OptionCycleMonthId")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.ToTable("OptionCycleDates");
                });

            modelBuilder.Entity("Midas.Data.Entities.OptionCycleMonth", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTimeOffset>("Date")
                        .HasColumnType("datetimeoffset");

                    b.Property<int>("Month")
                        .HasColumnType("int");

                    b.Property<int>("Year")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.ToTable("OptionCycleMonths");
                });

            modelBuilder.Entity("Midas.Data.Entities.SystemSettings", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("averageDailyVolume")
                        .HasColumnType("float");

                    b.Property<double>("systemAverageDailyVolume")
                        .HasColumnType("float");

                    b.HasKey("id");

                    b.ToTable("Settings");
                });

            modelBuilder.Entity("Midas.Data.Entities.Ticker", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CompanyId")
                        .HasColumnType("int");

                    b.Property<string>("Exchange")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IPOyear")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MarketCap")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Sector")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SummaryQuote")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("eodVerified")
                        .HasColumnType("bit");

                    b.Property<bool>("include")
                        .HasColumnType("bit");

                    b.Property<string>("industry")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("newTicker")
                        .HasColumnType("bit");

                    b.Property<string>("ticker")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("volumeVerified")
                        .HasColumnType("bit");

                    b.HasKey("id");

                    b.ToTable("Tickers");
                });

            modelBuilder.Entity("Midas.Data.Entities.EOD", b =>
                {
                    b.HasOne("Midas.Data.Entities.Day", "Day")
                        .WithMany()
                        .HasForeignKey("DayId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Midas.Data.Entities.Ticker", "Ticker")
                        .WithMany()
                        .HasForeignKey("TickerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}

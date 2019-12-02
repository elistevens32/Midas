﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Midas.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas
{
    public class MidasContext : IdentityDbContext<MidasUser>
    {
        public MidasContext(DbContextOptions<MidasContext> options) : base(options)
        {
        }

        public DbSet<Ticker> Tickers { get; set; }
        public DbSet<EOD> EODs { get; set; }

        public DbSet<Day> Days { get; set; }
        public DbSet<Company> Companys { get; set; }


        // NESTED OBJECTS

        //protected override void OnModelCreating(ModelBuilder builder)
        //{
        //  base.OnModelCreating(builder);

        //  builder.Entity<Product>()
        //    .Property(p => p.Price)
        //    .HasColumnType("decimal(18,2)");

        //  builder.Entity<OrderItem>()
        //    .Property(p => p.UnitPrice)
        //    .HasColumnType("decimal(18,2)");
        //}
    }
}

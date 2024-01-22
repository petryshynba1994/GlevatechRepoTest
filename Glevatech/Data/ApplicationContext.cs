using Glevatech.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Glevatech.Data
{
    public class ApplicationContext : IdentityDbContext
    {
        
        public DbSet<HeatPump> HeatPumps { get; set; }
        public DbSet<Customer> Customers { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<HeatPump>().HasData(
                new HeatPump { Id = 1, Status = "активний", Type = "ґрунт-вода", Name = "GTHP-6", Power = 6, HeatArea = 120, Price = 3010},
                new HeatPump { Id = 2, Status = "активний", Type = "ґрунт-вода", Name = "GTHP-8", Power = 8, HeatArea = 160, Price = 3190 },
                new HeatPump { Id = 3, Status = "активний", Type = "ґрунт-вода", Name = "GTHP-10", Power = 10, HeatArea = 200, Price = 3220 },
                new HeatPump { Id = 4, Status = "активний", Type = "ґрунт-вода", Name = "GTHP-12", Power = 12, HeatArea = 240, Price = 3400 },
                new HeatPump { Id = 5, Status = "активний", Type = "ґрунт-вода", Name = "GTHP-14", Power = 14, HeatArea = 280, Price = 3700 },
                new HeatPump { Id = 6, Status = "активний", Type = "ґрунт-вода", Name = "GTHP-16", Power = 16, HeatArea = 320, Price = 3900 },
                new HeatPump { Id = 7, Status = "активний", Type = "ґрунт-вода", Name = "GTHP-20", Power = 20, HeatArea = 400, Price = 4250 }
                );
        }

    }
}

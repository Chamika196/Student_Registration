using Microsoft.EntityFrameworkCore;
using Student_Registration.API.Models;

namespace Student_Registration.API.Data.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }    
    }
}

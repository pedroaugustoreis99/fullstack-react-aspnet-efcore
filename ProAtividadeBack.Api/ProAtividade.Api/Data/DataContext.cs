using Microsoft.EntityFrameworkCore;
using ProAtividadeBack.Api.Models;

namespace ProAtividadeBack.Api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        
        public DbSet<Atividade> Atividades { get; set; }
    }
}
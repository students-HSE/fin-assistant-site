using Microsoft.EntityFrameworkCore;

namespace FinancialAssistant.Model
{
    public sealed class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Company> Companies { get; set; }
        
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<User>()
                .HasData(new User
                {
                    Id = 1,
                    FirstName = "Иван",
                    LastName = "Иванов",
                    Age = 20,
                    Email = "ivan@ivanov.pro",
                    Password = "password"
                });

            AddStock(modelBuilder, 1, "Apple", "AAPL");
            AddStock(modelBuilder, 2, "Tesla", "TSLA");
            AddStock(modelBuilder, 3, "Лукойл", "LKOH");
            AddStock(modelBuilder, 4, "Google", "GOOG");
            AddStock(modelBuilder, 5, "Amazon", "AMZN");
            AddStock(modelBuilder, 6, "Facebook", "FB");
            AddStock(modelBuilder, 7, "McDonalds", "MCD");
            AddStock(modelBuilder, 8, "Новатек", "NVTK");
            AddStock(modelBuilder, 9, "Роснефть", "ROSN");
            AddStock(modelBuilder, 10, "Сбербанк", "SBER");
        }

        private void AddStock(ModelBuilder modelBuilder, int id, string name, string symbol)
        {
            modelBuilder
                .Entity<Company>()
                .HasData(new Company {Id = id, Name = name, TradingViewSymbol = symbol});
        }
    }
}
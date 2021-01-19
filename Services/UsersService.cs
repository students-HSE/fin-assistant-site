using System.Threading.Tasks;
using FinancialAssistant.Model;
using Microsoft.EntityFrameworkCore;

namespace FinancialAssistant.Services
{
    public class UsersService
    {
        private readonly ApplicationDbContext _dbContext;

        public UsersService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Task<User> GetUserAsync()
        {
            return _dbContext.Users.FirstAsync();
        }
    }
}
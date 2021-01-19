using System.Threading.Tasks;
using FinancialAssistant.Model;
using FinancialAssistant.Services;
using Microsoft.AspNetCore.Mvc;

namespace FinancialAssistant.Controllers
{
    [ApiController]
    [Route("/api/v1/users")]
    public class UsersController : ControllerBase
    {
        private readonly UsersService _usersService;

        public UsersController(UsersService usersService)
        {
            _usersService = usersService;
        }

        [HttpGet("@me")]
        public async Task<User> GetUser()
        {
            return await _usersService.GetUserAsync();
        }
    }
}
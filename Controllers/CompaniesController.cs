using System.Collections.Generic;
using System.Linq;
using FinancialAssistant.Model;
using Microsoft.AspNetCore.Mvc;

namespace FinancialAssistant.Controllers
{
    [ApiController]
    [Route("/api/v1/companies")]
    public class CompaniesController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public CompaniesController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IEnumerable<Company> GetAll()
        {
            return _dbContext.Companies.ToList();
        }
    }
}
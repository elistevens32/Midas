using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Midas.Data;
using Midas.Data.Entities;
using System.Collections.Generic;

namespace Midas.Controllers
{
    [Route("api/[Controller]")]
    public class TickersController : Controller
    {
        private readonly ITickerRepository repository;
        private readonly ILogger<TickersController> logger;

        public TickersController(ITickerRepository repository, ILogger<TickersController> logger)
        {
            this.repository = repository;
            this.logger = logger;
        }

        [HttpGet]
        public IEnumerable<Ticker> Get()
        {
            return repository.GetTestTickers(50);
        }
    }
}

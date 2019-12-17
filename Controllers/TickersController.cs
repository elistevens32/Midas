using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Midas.Data;
using Midas.Data.Entities;
using System.Collections.Generic;

namespace Midas.Controllers
{
    [Route("api/[Controller]")]
    public class TickersController : ControllerBase
    {
        private readonly ITickerRepository repository;
        private readonly ILogger<TickersController> logger;

        public TickersController(ITickerRepository repository, ILogger<TickersController> logger)
        {
            this.repository = repository;
            this.logger = logger;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Ticker>> Get()
        {
            try
            {
                return repository.GetTestTickers(50);
            }
            catch (System.Exception ex)
            {

                logger.LogError($"Failed to get tickers: {ex}");
                return BadRequest("Failed to get tickers");
            }
        }

        [HttpGet("/api/tickers/{id}")]
        public ActionResult<Ticker> Get(int id)
        {
            try
            {
                return repository.GetTickerById(id);
            }
            catch (System.Exception ex)
            {

                logger.LogError($"Failed to get tickers: {ex}");
                return BadRequest("Failed to get tickers");
            }
        }
    }
}

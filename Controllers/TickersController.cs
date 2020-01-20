using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Midas.Data;
using Midas.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

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
        public ActionResult<List<Ticker>> Get()
        {
            try
            {
                var listTicker = repository.GetTickersAndQSByDate(DevelopmentEnvironment.tickersCount, DateTime.Today.Date);
                return listTicker;
            }
            catch (Exception ex)
            {

                logger.LogError($"Failed to get tickers: {ex}");
                return BadRequest($"Failed to get tickers |  {ex}");
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

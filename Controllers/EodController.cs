using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Midas.Data;
using Midas.Data.Entities;
using System.Collections.Generic;

namespace Midas.Controllers
{
    [Route("api/[Controller]")]
    public class EodController : Controller
    {
        private readonly IEodRepository repository;
        private readonly ILogger<EodController> logger;

        public EodController(IEodRepository repository, ILogger<EodController> logger)
        {
            this.repository = repository;
            this.logger = logger;
        }

        [HttpGet]
        public ActionResult<IEnumerable<EOD>> Get() {
            try
            {
                return repository.GetAllTestEOD();
            }
            catch (System.Exception ex)
            {

                logger.LogError($"Failed to get tickers: {ex}");
                return BadRequest("Failed to get tickers");
            }
        }
    }
}

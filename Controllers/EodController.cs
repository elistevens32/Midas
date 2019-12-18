using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Midas.Data;
using Midas.Data.Entities;
using System.Collections.Generic;

namespace Midas.Controllers
{
    public class EodController : Controller
    {
        private readonly IEodRepository repository;
        private readonly ILogger<EodController> logger;

        public EodController(IEodRepository repository, ILogger<EodController> logger)
        {
            this.repository = repository;
            this.logger = logger;
        }

        // GET LIST OF EOD BY TICKER ID
        [HttpGet("/api/eod/{id}")]
        public ActionResult<IEnumerable<EOD>> Get(int id)
        {
            try
            {
                return repository.GetEODsByTickerId(id);

            }
            catch (System.Exception ex)
            {

                logger.LogError($"Failed to get End of Day Data: {ex}");
                return BadRequest("Failed to get End of Day Data");
            }
        }
    }
}

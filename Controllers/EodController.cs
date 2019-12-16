using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Midas.Data;


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


    }
}

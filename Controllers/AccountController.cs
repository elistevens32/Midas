﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas.Controllers
{
    public class AccountController : Controller
    {
        private readonly ILogger<AccountController> logger;

        public AccountController(ILogger<AccountController> logger)
        {
            this.logger = logger;
        }

        public IActionResult Login()
        {
            //if (this.User.Identity.IsAuthenticated)
            //{
            //    return RedirectToAction("Index", "Home");
            //}

            return View();
        }
    }
}

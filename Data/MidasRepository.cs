using Microsoft.Extensions.Logging;
using Midas.Data;
using Midas.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas
{
    public class MidasRepository : IMidasRepository
    {
        private readonly MidasContext _ctx;
        private readonly ILogger<MidasRepository> _logger;

        public MidasRepository(MidasContext ctx, ILogger<MidasRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public void AddEntity(object model)
        {
            _ctx.Add(model);
        }

        public List<Company> GetCompaniesThatAreGood()
        {
            return _ctx.Companys
                .Where(c => (c.Symbol != null) &&
                (c.CompanyName != null) &&
                (c.iexTickerId != 0))
               .ToList();
        }

        public List<Company> GetAllCompanies()
        {
            return _ctx.Companys
               .ToList();
        }

        public void CreateCompany(Company Company)
        {
            var companyCheck = _ctx.Companys
                .Where(c => (c.CompanyName == Company.CompanyName) &&
                (c.Symbol == Company.Symbol))
                .FirstOrDefault();

            if (companyCheck == null)
            {
                var companyObj = Company;

                _ctx.Companys.Add(companyObj);
                _ctx.SaveChanges();
            }

        }



        //public IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems)
        //{
        //    if (includeItems)
        //    {

        //        return _ctx.Orders
        //                   .Where(o => o.User.UserName == username)
        //                   .Include(o => o.Items)
        //                   .ThenInclude(i => i.Product)
        //                   .ToList();

        //    }
        //    else
        //    {
        //        return _ctx.Orders
        //                   .Where(o => o.User.UserName == username)
        //                   .ToList();
        //    }
        //}

        //public Order GetOrderById(string username, int id)
        //{
        //    return _ctx.Orders
        //               .Include(o => o.Items)
        //               .ThenInclude(i => i.Product)
        //               .Where(o => o.Id == id && o.User.UserName == username)
        //               .FirstOrDefault();
        //}

        public bool SaveAll()
        {
            return _ctx.SaveChanges() > 0;
        }
    }
}

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

        public Company GetCompanyByTickerId(int tickerId)
        {
            return _ctx.Companys
                .Where(c => c.iexTickerId == tickerId)
                .FirstOrDefault();
        }

        public Company GetCompanyBySymbol(string ticker)
        {
            return _ctx.Companys
                .Where(c => c.Symbol == ticker)
                .FirstOrDefault();
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

        // QUALITY SCORES
        public List<QualityScore> GetAllQualityScores(int number)
        {
            return _ctx.QualityScores
               .OrderBy(q => q.Id)
               .Take(number)
               .ToList();
        }
    }
}

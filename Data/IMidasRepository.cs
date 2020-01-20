using Midas.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas
{
    public interface IMidasRepository
    {
        void AddEntity(object model);
        void CreateCompany(Company Company);
        Company GetCompanyByTickerId(int tickerId);
        Company GetCompanyBySymbol(string ticker);
        List<Company> GetCompaniesThatAreGood();
        List<Company> GetAllCompanies();
        List<QualityScore> GetAllQualityScores(int number);
    }
}

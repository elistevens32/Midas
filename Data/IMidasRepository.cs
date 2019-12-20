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
        bool SaveAll();
        void AddEntity(object model);
        void CreateCompany(Company Company);
        List<Company> GetCompaniesThatAreGood();
        List<Company> GetAllCompanies();
    }
}

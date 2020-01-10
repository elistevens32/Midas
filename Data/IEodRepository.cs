using Midas.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas.Data
{
    public interface IEodRepository
    {
        // GENERAL
        List<EOD> GetEODsByTickerId(int tickerId);
        EOD GetEODByTickerIdAndDayId(int tickerId, int dayId);

        // TIINGO
        List<EOD> GetTiingoEODByTickerId(int tickerId);

        // TEST
        List<EOD> GetAllTestEOD();
        
        // CRUD
        EOD CreateEod(EOD eOD, Day day, Ticker ticker, string source);
    }
}

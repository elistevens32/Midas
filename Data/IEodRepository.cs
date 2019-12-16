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

        EOD GetTiingoEODByTickerId(int tickerId, int dayId);
        List<EOD> GetEODByTickerIDAndDateRange(int tickerId, List<Day> dayList);
        List<EOD> GetAllTestEOD();
        EOD CreateEod(EOD eOD, Day day, Ticker ticker, string source);
    }
}

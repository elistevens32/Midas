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
        //IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems);
        //Order GetOrderById(string username, int id);

        bool SaveAll();
        void AddEntity(object model);

        // DAY
        List<Day> DaysBack(DateTime DateBack);
        Day GetDayByDate(DateTime date);

        // TICKER
        List<Ticker> GetAllTickers(int tickerCount);
        List<Ticker> GetTickersTiingo(int number);
        List<Ticker> GetTickersIex(int number);

        // EOD
        EOD GetTiingoEODByTickerId(int tickerId, int dayId);

    }
}

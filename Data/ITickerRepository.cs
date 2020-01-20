using Microsoft.AspNetCore.Mvc;
using Midas.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas.Data
{
    public interface ITickerRepository
    {
        // TICKER
        List<Ticker> GetAllTickers(int tickerCount);
        List<Ticker> GetTickersAndQSByDate(int tickerCount, DateTime date);
        List<Ticker> GetVolumeVerifiedTickers(int number);
        List<Ticker> GetAllStockTickers(int number);
        Ticker GetTickerBySymbol(String symbol);
        Ticker GetTickerById(int id);
        List<Ticker> GetTestTickers(int number);
        List<Ticker> GetAllEodTickers();
        List<Ticker> GetTickersByExchange(String exchange);
    }
}

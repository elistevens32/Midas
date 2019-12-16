﻿using Midas.Data.Entities;
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
        Ticker GetTickerBySymbol(String symbol);
        List<Ticker> GetTickersTiingo(int number);
        List<Ticker> GetTickersIex(int number);
        List<Ticker> GetTestTickers(int number);
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas
{
    public class ApiTokens
    {
        // IEX CONSTANTS
        public const string iex_live_domain = "https://cloud.iexapis.com";
        public const string iex_sandbox_domain = "https://sandbox.iexapis.com";
        public const string iex_historical_day_p1 = "/v1/stock/";
        public const string iex_historical_day_p2 = "/chart/date/";
        public const string iex_ticker_list = "/stable/ref-data/iex/symbols?token=";
        public const string iex_company_p1 = "/stable/stock/";
        public const string iex_company_p2 = "/company?token=";

        // IEX LIVE TOKENS
        public const string live_iex_secret_token = "sk_f95d39eaf06641029c8df9e6d265b62e";
        public const string live_iex_public_token = "pk_cf049e04070b49b8897b4509a2725c01";

        // IEX TEST TOKENS
        public const string test_iex_secret_token = "Tsk_320ebcad43ae467b96476a3bf1c8deca";
        public const string test_iex_public_token = "Tpk_41ec7b5b038b4a3a8e4bf9b87b7f4abe";





        // TIINGO CONSTANTS
        public const string tiingo_production = "https://api.tiingo.com";
        public const string daily_endofday = "/tiingo/daily/";

        // TIINGO TOKEN
        public const string tiingo_token = "49cc67608d328e61043e74de1c33e4b94caf8bd1";

        // TIINGO SUPPORTED TICKER CSV LINK
        public const string tiingo_supported_tokens = "https://apimedia.tiingo.com/docs/tiingo/daily/supported_tickers.zip";




        // YAHOO CONSTANTS
        public const string yahoo_query_v7 = "https://query1.finance.yahoo.com/v7/finance/chart/";
    }
}

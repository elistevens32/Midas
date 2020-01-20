using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas.Data
{
    public class DevelopmentEnvironment
    {

        public const bool testEnvironment = true;
        public const int devMonthsBack = 24;
        public const int prodMonthsBack = 60;
        public const int tickersCount = 10;

        public static bool getEnvironment()
        {
            if (testEnvironment == false)
            {
            #pragma warning disable CS0162 // Unreachable code detected
            return true;
            #pragma warning restore CS0162 // Unreachable code detected
    }
            else 
            {
            #pragma warning disable CS0162 // Unreachable code detected
            return false;
            #pragma warning restore CS0162 // Unreachable code detected
            }
        }
    }
}

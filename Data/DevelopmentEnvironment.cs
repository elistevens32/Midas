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

        public static bool getEnvironment()
        {
            if (testEnvironment == true)
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

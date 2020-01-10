using System.ComponentModel.DataAnnotations;

namespace Midas.Data.Entities
{
    public class SystemSettings
    {
        [Key]
        public int id { get; set; }

        // VOLUME
        public double averageDailyVolume { get; set; }
        public double systemAverageDailyVolume { get; set; }

    }
}

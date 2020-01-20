using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Midas.Data.Entities
{
    public class QualityScore
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Day")]
        public int DayId { get; set; }
        public Day Day { get; set; }

        [ForeignKey("Ticker")]
        public int TickerId { get; set; }
        public Ticker Ticker { get; set; }

        public double Value { get; set; }

        public static QualityScore GetRandomQualityScoreValue(double min, double max, Day day, Ticker ticker)
        {
            var QualityScore = new QualityScore();
            var random = new Random();
            QualityScore.Value = random.NextDouble();
            QualityScore.DayId = day.id;
            QualityScore.TickerId = ticker.id;

            return QualityScore;
        }
    }
}

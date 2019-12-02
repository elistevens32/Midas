using Midas.Data;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Midas
{
    public class DownloadService
    {

        public static void downloadSupportedTickerTiingo()
        {
            string extractPath = "Data/Seed/tiingo_tickers/extract";
            FileInfo file = new System.IO.FileInfo(extractPath);
            file.Directory.Create();

            string zipCreationPath = "Data/Seed/tiingo_tickers/tiingo_tickers.zip";
            FileInfo zipFile = new System.IO.FileInfo(zipCreationPath);
            zipFile.Directory.Create();

            DateTime creation = File.GetCreationTime("Data/Seed/tiingo_tickers/tiingo_tickers.zip");
            

            if (creation.Date != DateTime.Today && File.Exists(zipCreationPath))
            {
                //DELETE FILES
                File.Delete("Data/Seed/tiingo_tickers/tiingo_tickers.zip");
                File.Delete("Data/Seed/tiingo_tickers/extract/supported_tickers.csv");
            }

            if (!File.Exists(zipCreationPath))
            {
                
                using (var client = new WebClient())
                {
                    client.DownloadFile(ApiTokens.tiingo_supported_tokens.ToString(), zipCreationPath);
                }

                //UNZIP FILE
                DownloadService.UnZipFile(zipCreationPath, extractPath);
            }
        }

        public static void UnZipFile(string zipPath, string extractPath)
        {


            if (File.Exists("Data/Seed/tiingo_tickers/tiingo_tickers.zip"))
            {
                ZipFile.ExtractToDirectory(zipPath, extractPath);
            }

        }
    }
}

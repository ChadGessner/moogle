using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.Secrets
{
  public static class Secrets
  {
    public static string ServerPath { get; set; } = "moogle-sql.database.windows.net";
    public static string ServerName { get; set; } = "Moogle-db";
    public static string UserName { get; set; } = "Chad";
    public static string Password { get; set; } = "Sifu4200";
    public static string[] ApiUris { get; set; } = {
      "7ecf08bb3dmsh33f2c5e07bb3517p1cb081jsn7d16b9a68e17",
      "2043676423mshc0a6ebfa9ef7d01p1c4533jsn6aeb156dbae9",
    "7963cb2758mshc239f17f8bd635ap1b68f3jsn04773c394cd2"
    };
  }
}

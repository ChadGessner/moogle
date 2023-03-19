using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.Db_Models
{
  public class TheaterZip
  {
        public int Id { get; set; }
        public string ZipCode { get; set; }
        public string TheaterId { get; set; }
        public virtual Theater Theater { get; set; }
    }
}

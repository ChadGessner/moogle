using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.Db_Models
{
  public class UserZip
  {
    public int Id { get; set; }
    public string ZipCode { get; set; }
    public int UserId { get; set; }
    public virtual User User { get; set; }
  }
}

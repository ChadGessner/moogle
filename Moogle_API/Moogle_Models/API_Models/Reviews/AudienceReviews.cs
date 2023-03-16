using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.Reviews
{
  public class AudienceReviews
  {
    public int totalCount { get; set; }
    public int nextOffset { get; set; }
    public bool hasNextPage { get; set; }
    public bool hasPreviousPage { get; set; }
    public List<Item> items { get; set; }
  }
}

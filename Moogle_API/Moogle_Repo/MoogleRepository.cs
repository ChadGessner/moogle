using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Repo
{
  public class MoogleRepository
  {
    private IConfigurationRoot _configuration;
    private DbContextOptionsBuilder<ApplicationDbContext> _optionsBuilder;
    public MoogleRepository()
    {
      BuildOptions();
    }
    private void BuildOptions()
    {
      _configuration = ConfigurationBuilderSingleton.ConfigurationRoot;
      _optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
      _optionsBuilder.UseSqlServer(_configuration.GetConnectionString("StringyConnections"));
    }
  }
}

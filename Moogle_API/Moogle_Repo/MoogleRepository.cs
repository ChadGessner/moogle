using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Moogle_Models.Db_Models;
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

        public User AddUser(User user, List<Theater> theaters)
        {
            using (var db = new ApplicationDbContext())
            {
                db.Users.Add(user);
                db.SaveChanges();
                theaters.ForEach(x =>
                {
                    db.UserTheaterRelationships.Add(new UserTheaterRelationship()
                    {
                        User = user,
                        Theater = x
                    });
                });
                db.SaveChanges();
            }
                return user;
        }
    }
}

using Moogle_Models.API_Models.AngularModels;
using Moogle_Models.API_Models.TheaterRequest;
using Moogle_Models.Db_Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models
{
  public class ModelConverter
  {
        public static IEnumerable<Theater> GetTheaterFromAPI(RootTheaterData root)
        {
            return root.theaters.Select(x => new Theater()
            {
                Id = x.id,
                Tid = x.tid,
                Name = x.name,
                Latitude = x.latitude,
                Longitude = x.longitude,
                HasShowTimes = x.hasShowTimes,
                HasReservedSeating = x.hasReservedSeating,
                IsTicketing = x.isTicketing,
                Distance = x.distance
            });
        } 
        public static User GetUserFromAngular(AngularUser user)
        {
            return new User()
            {
                FirstName = user.firstName,
                LastName = user.lastName,
                UserName = user.userName,
                Email = user.email,
                Password = user.password,
                Phone = user.phone,
                Address = user.address,
                City = user.city,
                State = user.state,
                ZipCode = user.zipCode,
            };
        }
  }
}
/*      public string Id { get; set; }
        public string Tid { get; set; }
        public string Name { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }
        public string HasShowTimes { get; set; }
        public bool HasReservedSeating { get; set; }
        public bool IsTicketing { get; set; }
        public float Distance { get; set; }
*/
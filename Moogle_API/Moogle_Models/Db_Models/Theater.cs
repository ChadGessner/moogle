using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.Db_Models
{
  public class Theater
  {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Id { get; set; }
        public string Tid { get; set; }
        public string Name { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }
        public string HasShowTimes { get; set; }
        public bool HasReservedSeating { get; set; }
        public bool IsTicketing { get; set; }
        public float Distance { get; set; }
        public virtual List<UserTheaterRelationship> Relationships { get; set; }
  }
}
/* 
         User["Zip"] ==> Zip["Theaters"][theater1["Zips"][zip1, zip3, zip7], theater2["Zips"][zip1, zip4], theater3["Zips"][zip1, zip2]]
                                         
*/

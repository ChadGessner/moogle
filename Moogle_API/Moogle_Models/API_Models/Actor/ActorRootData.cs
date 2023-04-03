using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.Actor
{
  public class ActorRootData
  {
    public ActorPerson person { get; set; }
    public static ActorRootData ValidateActorRootData(ActorRootData data)
    {
      if (data == null)
      {
        return null;
      }
      data.person = ActorPerson.ValidateActorPerson(data.person);
      return data;
    }
  }
}

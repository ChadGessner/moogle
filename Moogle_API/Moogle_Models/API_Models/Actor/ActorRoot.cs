namespace Moogle_Models.API_Models.Actor
{
  public class ActorRoot
  {
    public ActorRootData data { get; set; }

    public static ActorRoot ValidateActorRoot(ActorRoot root)
    {
      if(root == null)
      {
        return null;
      }
      root.data = ActorRootData.ValidateActorRootData(root.data);

      return root;
    }
  }
}

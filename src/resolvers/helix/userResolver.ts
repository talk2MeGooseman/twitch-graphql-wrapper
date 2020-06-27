import { HelixUser } from "twitch"
import { RequestContext, ArgumentsWithId, ArgumentsWithName } from '../../interfaces';

export default {
  HelixUser: {
    async latestFollowing(parent: HelixUser) {
      const { data } = await parent.getFollows()
      return data.map((follow) => ({
        id: follow.followedUserId,
        displayName: follow.followedUserDisplayName,
        date: follow.followDate,
      }))
    },
    async currentStream(parent: HelixUser) {
      return await parent.getStream()
    },
    async clips(parent: HelixUser, _args: any, context: RequestContext) {
      const { data: clips } = await context.twitchClient.helix.clips.getClipsForBroadcaster(parent.id)
      return clips
    },
    async isFollowingUserId(parent: HelixUser, args: ArgumentsWithId, context: RequestContext) {
      if(args.userId.length === 0) return false;
      return await parent.follows(args.userId)
    },
    async isFollowingUserName(parent: HelixUser, args: ArgumentsWithName, context: RequestContext) {
      if(args.userName.length === 0) return false;
      const user = await context.twitchClient.helix.users.getUserByName(args.userName)
      return await parent.follows(user!.id)
    },
    async subscribers(parent: HelixUser, _args: any, context: RequestContext) {
      return await context.twitchClient.helix.subscriptions.getSubscriptionsPaginated(parent.id).getAll()
    },
    async videos(parent: HelixUser, args: ArgumentsWithName, context: RequestContext) {
      return await context.twitchClient.helix.videos.getVideosByUserPaginated(parent).getAll()
    },
  },
}

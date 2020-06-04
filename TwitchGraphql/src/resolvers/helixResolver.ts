import * as helixUsers from '../helixUsers';
import { HelixUser, HelixStream, HelixStreamType } from 'twitch';
import { RequestContext, ArgumentsWithIds, ArgumentsWithNames, ArgumentsWithId, ArgumentsWithName } from '../interfaces';

export default {
  Query: {
    helix() {
      return {
        usersByIds: helixUsers.byIds,
        usersByNames: helixUsers.byNames,
        async streamsByIds(args: ArgumentsWithIds, context: RequestContext) {
          const streamsPaginator = context.twitchClient.helix.streams.getStreamsPaginated(
            { userId: args.ids, type: HelixStreamType.Live }
          );

          return await streamsPaginator.getAll()
        },
        async streamsByNames(args: ArgumentsWithNames, context: RequestContext) {
          const streamsPaginator = context.twitchClient.helix.streams.getStreamsPaginated(
            { userName: args.names, type: HelixStreamType.Live }
          );

          return await streamsPaginator.getAll()
        },
      };
    },
  },
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
    }
  },
  HelixStream: {
    async game(parent: HelixStream) {
      return await parent.getGame()
    },
    async user(parent: HelixStream) {
      return await parent.getUser()
    },
  }
};

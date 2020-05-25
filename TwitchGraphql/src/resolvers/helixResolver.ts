import * as helixUsers from '../helixUsers';
import TwitchClient, { HelixUser, HelixStream } from 'twitch';

interface Context {
  twitchClient: TwitchClient
}

export default {
  Query: {
    helix() {
      return {
        usersByIds: helixUsers.byIds,
        usersByNames: helixUsers.byNames,
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
    async clips(parent: HelixUser, _args: any, context: Context) {
      const { cursor, data: clips } = await context.twitchClient.helix.clips.getClipsForBroadcaster(parent.id)
      return clips
    }
  },
  HelixStreamInfo: {
    async game(parent: HelixStream) {
      return await parent.getGame()
    },
  }
};

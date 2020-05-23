import * as helixUsers from '../helixUsers';
import { HelixUser } from 'twitch';

export default {
  Query: {
    helix() {
      return {
        userById: helixUsers.byId,
        userByName: helixUsers.byName,
        usersByIds: helixUsers.byIds,
        usersByNames: helixUsers.byNames,
      };
    },
  },
  HelixUser: {
    async following(parent: HelixUser) {
      const { data } = await parent.getFollows()
      return data.map((follow) => ({
        id: follow.followedUserId,
        displayName: follow.followedUserDisplayName,
        date: follow.followDate,
      }))
    },
  },
};

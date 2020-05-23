import * as helixUsers from './helixUsers';
import { HelixUser } from 'twitch';

const resolvers = {
  Query: {
    helix() {
      return {
        userById: (args: { id: string }) => helixUsers.byId(args),
        userByName: (args: { name: string }) => helixUsers.byName(args),
        usersByIds: (args: { ids: [string] }) => helixUsers.byIds(args),
        usersByNames: (args: { names: [string] }) => helixUsers.byNames(args),
      };
    },
  },
  HelixUser: {
    async following(parent: HelixUser) {
      const { data } = await parent.getFollows()
      return data
    },
  },
};

export default resolvers;

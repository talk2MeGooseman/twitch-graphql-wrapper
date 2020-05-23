import * as helixUsers from './helixUsers';

const resolvers = {
  Query: {
    helix() {
      return {
        userById: (args: { id: string; }) => helixUsers.byId(args),
        userByName: (args: { name: string; }) => helixUsers.byName(args),
        usersByIds: (args: { ids: [string]; }) => helixUsers.byIds(args),
        usersByNames: (args: { names: [string]; }) => helixUsers.byNames(args),
      };
    }
  },
};

export default resolvers;

import { HelixStreamType, HelixUser } from 'twitch';
import { RequestContext, ArgumentsWithIds, ArgumentsWithNames, ArgumentsWithId } from '../../interfaces';

export default {
  Query: {
    helix() {
      return {
        async usersByIds (args: ArgumentsWithId , context: RequestContext) {
          let users: HelixUser[] | null = await context.twitchClient.helix.users.getUsersByIds(args.ids);
          return users
        },
        async usersByNames (args: ArgumentsWithId , context: RequestContext) {
          let users: HelixUser[] | null = await context.twitchClient.helix.users.getUsersByNames(args.names);
          return users;
        },
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
};

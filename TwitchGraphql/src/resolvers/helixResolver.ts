import * as helixUsers from '../helixUsers';
import { HelixStreamType } from 'twitch';
import { RequestContext, ArgumentsWithIds, ArgumentsWithNames } from '../interfaces';

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
};

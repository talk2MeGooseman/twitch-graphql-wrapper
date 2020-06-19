import { Channel, User, Stream } from 'twitch';
import Team from 'twitch/lib/API/Kraken/Team/Team';
import { RequestContext, ArgumentsWithName, ArgumentsWithId } from '../../interfaces';
import { chunk, flatten } from 'lodash'

export default {
  Query: {
    kraken() {
      return {
        async channelById ({ id }: ArgumentsWithId, context: RequestContext): Promise<Channel> {
          return await context.twitchClient.kraken.channels.getChannel(id);
        },
        async team ({ name }: ArgumentsWithName, context: RequestContext) {
          return await context.twitchClient.kraken.teams.getTeamByName(name);
        },
      };
    },
  },
  KrakenChannel: {
    async teams(parent: Channel) {
      return await parent.getTeams();
    },
  },
  KrakenTeam: {
    async liveStreams(parent: Team, _args: any, context: RequestContext) {
      const users = await parent.getUsers();
      const userIds = users.map((user) => user.id);

      const streams = Promise.all(chunk(userIds, 75).map(async (userIdsChunk) => {
        return await context.twitchClient.kraken.streams.getStreams(
          userIdsChunk,
          undefined,
          undefined,
          undefined,
          undefined,
          100,
        )
      }))

      return streams.then(flatten)
    },
    async members(parent: Team) {
      return await parent.getUsers();
    },
  },
  KrakenUser: {
    async currentStream(parent: User) {
      return await parent.getStream();
    },
  },
  KrakenStream: {
    async channel(parent: Stream) {
      return parent.channel;
    },
  },
};

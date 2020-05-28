import * as krakenChannel from '../krakenChannel';
import TwitchClient, { HelixUser, HelixStream, Channel, User, Stream } from 'twitch';
import Team from 'twitch/lib/API/Kraken/Team/Team';
import { RequestContext } from '../interfaces';

export default {
  Query: {
    kraken() {
      return {
        channelById: krakenChannel.byId,
        team: krakenChannel.team,
      };
    },
  },
  KrakenChannel: {
    async teams(parent: Channel) {
      return await parent.getTeams()
    },
  },
  KrakenTeam: {
    async liveMembers(parent: Team, _args: any, context: RequestContext) {
      const users =  await parent.getUsers()
      const userIds = users.map((user) => user.id);
      return await context.twitchClient.kraken.streams.getStreams(userIds, undefined, undefined, undefined, undefined, 100)
    },
    async members(parent: Team) {
      return await parent.getUsers()
    }
  },
  KrakenUser: {
    async currentStream(parent: User) {
      return await parent.getStream()
    }
  },
  KrakenStream: {
    async channel(parent: Stream) {
      return parent.channel
    }
  }
};

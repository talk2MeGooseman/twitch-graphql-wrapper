import * as krakenChannel from '../krakenChannel';
import TwitchClient, { HelixUser, HelixStream, Channel } from 'twitch';
import Team from 'twitch/lib/API/Kraken/Team/Team';

interface Context {
  twitchClient: TwitchClient
}

export default {
  Query: {
    kraken() {
      return {
        channelById: krakenChannel.byId
      };
    },
  },
  KrakenChannel: {
    async teams(parent: Channel) {
      return await parent.getTeams()
    },
  },
  KrakenTeam: {
    async members(parent: Team) {
      return await parent.getUsers()
    }
  }
};

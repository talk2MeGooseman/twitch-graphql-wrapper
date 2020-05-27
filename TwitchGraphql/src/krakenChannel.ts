import Team from 'twitch/lib/API/Kraken/Team/Team';
import { Channel } from 'twitch/lib';
import { ArgumentsWithId, RequestContext } from './interfaces';

export const byId = async ({ id }: ArgumentsWithId, context: RequestContext) : Promise<Channel> => {
  let channel: Channel = await context.twitchClient.kraken.channels.getChannel(id)
  return channel
};

export const teams = async ({ id }: ArgumentsWithId, context: RequestContext) => {
  let teams: Team[] | null = await context.twitchClient.kraken.channels.getChannelTeams(id)
  return teams;
};

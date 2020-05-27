import Team from 'twitch/lib/API/Kraken/Team/Team';
import { Channel } from 'twitch/lib';
import { ArgumentsWithId, RequestContext, ArgumentsWithName } from './interfaces';

export const byId = async ({ id }: ArgumentsWithId, context: RequestContext) : Promise<Channel> => {
  return await context.twitchClient.kraken.channels.getChannel(id)
};

export const channelTeams = async ({ id }: ArgumentsWithId, context: RequestContext) => {
  return await context.twitchClient.kraken.channels.getChannelTeams(id)
};

export const team = async ({ name }: ArgumentsWithName, context: RequestContext) => {
  return await context.twitchClient.kraken.teams.getTeamByName(name)
}

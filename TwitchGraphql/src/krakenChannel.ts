import Team from 'twitch/lib/API/Kraken/Team/Team';
import { Channel } from 'twitch/lib';

interface ArgumentsWithId {
  id: string
  [propName: string]: any;
}

export const byId = async ({ id }: ArgumentsWithId, context: any) : Promise<Channel> => {
  let channel: Channel = await context.twitchClient.kraken.channels.getChannel(id)
  return channel
};

export const teams = async ({ id }: ArgumentsWithId, context: any) => {
  let teams: Team[] | null = await context.twitchClient.kraken.channels.getChannelTeams(id)
  return teams;
};

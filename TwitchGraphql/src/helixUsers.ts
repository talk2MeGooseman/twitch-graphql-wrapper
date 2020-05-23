import TwitchClient from 'twitch';
import TwitchCredentials from '../../credentials/twitch';
import HelixUser from "twitch/lib/API/Helix/User/HelixUser";

export const byId = async ({ id }: { id: string; }) => {
  const twitchClient = TwitchClient.withClientCredentials(TwitchCredentials.clientId, TwitchCredentials.clientSecret);
  let user: HelixUser | null = await twitchClient.helix.users.getUserById(id);
  return user;
};

export const byName = async ({ name }: { name: string; }) => {
  const twitchClient = TwitchClient.withClientCredentials(TwitchCredentials.clientId, TwitchCredentials.clientSecret);
  let user: HelixUser | null = await twitchClient.helix.users.getUserByName(name);
  return user;
};

export const byIds = async ({ ids }: { ids: [string]; }) => {
  const twitchClient = TwitchClient.withClientCredentials(TwitchCredentials.clientId, TwitchCredentials.clientSecret);
  let users: HelixUser[] | null = await twitchClient.helix.users.getUsersByIds(ids);
  return users
};

export const byNames = async ({ names }: { names: [string]; }) => {
  const twitchClient = TwitchClient.withClientCredentials(TwitchCredentials.clientId, TwitchCredentials.clientSecret);
  let users: HelixUser[] | null = await twitchClient.helix.users.getUsersByNames(names);
  return users;
};

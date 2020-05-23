import TwitchClient from 'twitch';
import TwitchCredentials from '../credentials/twitch';
import HelixUser from "twitch/lib/API/Helix/User/HelixUser";

export const helixUserById = async ({ id }: { id: string; }) => {
  const twitchClient = TwitchClient.withClientCredentials(TwitchCredentials.clientId, TwitchCredentials.clientSecret);
  let user: HelixUser | null = await twitchClient.helix.users.getUserById(id);
  return user;
};

export const helixUserByName = async ({ name }: { name: string; }) => {
  const twitchClient = TwitchClient.withClientCredentials(TwitchCredentials.clientId, TwitchCredentials.clientSecret);
  let user: HelixUser | null = await twitchClient.helix.users.getUserByName(name);
  return user;
};

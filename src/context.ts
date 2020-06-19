import TwitchClient from 'twitch';
import TwitchCredentials from '../credentials/twitch';

export default async () => ({
  twitchClient: TwitchClient.withClientCredentials(TwitchCredentials.clientId, TwitchCredentials.clientSecret)
})

import TwitchClient, { AccessToken } from 'twitch'
import TwitchCredentials from '../credentials/twitch'
import { IContext } from './interfaces'
import axios from 'axios';

export default ({ accessToken, refreshToken, patreonCreds } : { accessToken?: string, refreshToken?: string, patreonCreds?: { accessToken: string, refreshToken: string } }) => {
  const context: IContext = {};

  if (!TwitchCredentials.clientId || !TwitchCredentials.clientSecret) {
    console.log("Missing TWITCH_CLIENT_ID and/or TWITCH_SECRET environment variables")
    throw new Error("Missing TWITCH_CLIENT_ID and/or TWITCH_SECRET environment variables");
  }

  if (accessToken && refreshToken) {
    context['twitchClient'] = TwitchClient.withCredentials(
      TwitchCredentials.clientId,
      accessToken,
      undefined,
      {
        clientSecret: TwitchCredentials.clientSecret,
        refreshToken: refreshToken,
        onRefresh: (token: AccessToken) => {
          // do things with the new token data, e.g. save them in your database
        },
      }
    );
  } else {
    context['twitchClient'] = TwitchClient.withClientCredentials(TwitchCredentials.clientId, TwitchCredentials.clientSecret)
  }

  if (patreonCreds?.accessToken && patreonCreds?.refreshToken) {
    context['patreonClient'] = axios.create({
      baseURL: 'https://www.patreon.com/api/oauth2/v2/',
      timeout: 1000,
      headers: { 'Authorization': `Bearer ${patreonCreds.accessToken}` },
    });
  }

  return context
}

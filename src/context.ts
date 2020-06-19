import TwitchClient, { AccessToken } from 'twitch';
import TwitchCredentials from '../credentials/twitch';

export default () => {
  if (!TwitchCredentials.clientId || !TwitchCredentials.clientSecret) {
    console.log("Missing TWITCH_CLIENT_ID and/or TWITCH_SECRET environment variables")
    throw new Error("Missing TWITCH_CLIENT_ID and/or TWITCH_SECRET environment variables");
  }

  if (TwitchCredentials.accessToken && TwitchCredentials.clientSecret) {
    return {
      twitchClient: TwitchClient.withCredentials(
        TwitchCredentials.clientId,
        TwitchCredentials.accessToken,
        undefined,
        {
          clientSecret: TwitchCredentials.clientSecret,
          refreshToken: TwitchCredentials.refreshToken,
          onRefresh: (token: AccessToken) => {
            // do things with the new token data, e.g. save them in your database
          },
        },
      ),
    };
  } else {
    return {
      twitchClient: TwitchClient.withClientCredentials(TwitchCredentials.clientId, TwitchCredentials.clientSecret)
    }
  }
}

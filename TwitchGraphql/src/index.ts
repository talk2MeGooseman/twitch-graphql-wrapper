import { ApolloServer } from 'apollo-server-azure-functions'
import schema from './schema'
import depthLimit from 'graphql-depth-limit'
import TwitchClient from 'twitch';
import TwitchCredentials from '../../credentials/twitch';
import { LogLevel } from '@d-fischer/logger'

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  context: async () => ({
    twitchClient: TwitchClient.withClientCredentials(TwitchCredentials.clientId, TwitchCredentials.clientSecret, {
      logLevel: LogLevel.DEBUG3
    })
  })
});

exports.graphqlHandler = server.createHandler()

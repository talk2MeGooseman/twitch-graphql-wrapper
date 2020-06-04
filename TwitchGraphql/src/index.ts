import { ApolloServer } from 'apollo-server-azure-functions'
import schema from './schema'
import depthLimit from 'graphql-depth-limit'
import TwitchClient from 'twitch';
import TwitchCredentials from '../../credentials/twitch';

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  context: async () => ({
    twitchClient: TwitchClient.withClientCredentials(TwitchCredentials.clientId, TwitchCredentials.clientSecret)
  })
});

exports.graphqlHandler = server.createHandler()

import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import { GraphQLSchema } from 'graphql';
import typeDefs from './typeDefs'

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers: resolvers,
});

export default schema;

import { ApolloServer } from 'apollo-server-express'
import schema from '../schema'
import depthLimit from 'graphql-depth-limit'
import context from "../context";

export function createServer(overrideContext = context) {
  return new ApolloServer({
      schema,
      validationRules: [depthLimit(7)],
      context: overrideContext,
  })
}

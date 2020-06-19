import { ApolloServer } from 'apollo-server-express'
import schema from '../schema'
import depthLimit from 'graphql-depth-limit'
import context from "../context";

const server = (overrideContext = context) => {
    new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    context: overrideContext,
  });
};

export default server

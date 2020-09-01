import { ApolloServer } from 'apollo-server-express'
import schema from '../schema'
import depthLimit from 'graphql-depth-limit'
import { snakeCaseFieldResolver } from '../middleware/fieldResolver'


export function createServer(context: any) {
  return new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    context: context,
    fieldResolver: snakeCaseFieldResolver,
  })
}

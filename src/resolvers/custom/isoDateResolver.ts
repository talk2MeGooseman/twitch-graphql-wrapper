import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export default {
  ISODate: new GraphQLScalarType({
    name: 'ISODate',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.toISOString(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(+ast.value) // ast value is always in string format
      }
      return null;
    },
  }),
};

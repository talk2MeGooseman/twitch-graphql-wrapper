import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolverMap';
import { GraphQLSchema } from 'graphql';
import { gql } from 'apollo-server-azure-functions';

const typeDefs = gql`
  enum BroadcasterType {
    Affiliate
    None
    Partner
  }

  type Query {
    helix: Helix
  }

  type Helix {
    userById(id: ID!): HelixUser
    userByName(name: String!): HelixUser
    usersByIds(ids: [ID!]): [HelixUser]
    usersByNames(names: [String!]): [HelixUser]
  }

  type HelixUser {
    id: ID
    broadcasterType: BroadcasterType
    description: String
    displayName: String
    name: String
    profilePictureUrl: String
    offlineImageUrl: String
    views: Int
  }
`

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers: [resolvers],
});

export default schema;

const typeDefs = `
  type Helix {
    usersByIds(ids: [ID!]!): [HelixUser]
    usersByNames(names: [String!]!): [HelixUser]
    streamsByIds(ids: [ID!]!): [HelixStream]!
    streamsByNames(names: [String]!): [HelixStream]!
  }
`

export default typeDefs

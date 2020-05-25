const typeDefs = `
  type Helix {
    usersByIds(ids: [ID!]!): [HelixUser]
    usersByNames(names: [String!]!): [HelixUser]
  }
`

export default typeDefs

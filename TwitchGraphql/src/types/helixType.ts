const typeDefs = `
  type Helix {
    userById(id: ID!): HelixUser
    userByName(name: String!): HelixUser
    usersByIds(ids: [ID!]!): [HelixUser]
    usersByNames(names: [String!]!): [HelixUser]
  }
`

export default typeDefs

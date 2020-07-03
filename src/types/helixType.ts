const typeDefs = `
  type Helix {
    "Retrieves the user data of the currently authenticated user."
    me: HelixUser
    "Retrieves an array of live stream data based off IDs"
    streamsByIds(ids: [ID!]!): [HelixStream]!
    "Retrieves an array of live stream data based off usernames"
    streamsByNames(names: [String]!): [HelixStream]!
    "Retrieves an array of user data based off ids"
    usersByIds(ids: [ID!]!): [HelixUser]
    "Retrieves an array of user data based off names"
    usersByNames(names: [String!]!): [HelixUser]
  }
`

export default typeDefs

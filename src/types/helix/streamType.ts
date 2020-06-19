export default `
  type HelixStream {
    game: HelixGame
    id: ID!
    language: String!
    startDate: ISODate!
    thumbnailUrl: String!
    title: String!
    type: String!
    userDisplayName: String!
    user: HelixUser!
    viewers: Int!
  }
`

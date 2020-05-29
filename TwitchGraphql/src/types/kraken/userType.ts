export default `
  type KrakenUser {
    bio: String
    creationDate: ISODate!
    displayName: String!
    id: ID!
    logoUrl: String
    name: String!
    type: String
    updateDate: ISODate!
    currentStream: KrakenStream
  }
`

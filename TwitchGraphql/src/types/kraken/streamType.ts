export default `
  type KrakenStream {
    averageFPS: Int!
    channel: KrakenChannel
    delay: Int!
    game: String
    id: ID!
    isPlaylist: Boolean!
    startDate: String!
    type: String
    videoHeight: Int!
    viewers: Int!
  }
`

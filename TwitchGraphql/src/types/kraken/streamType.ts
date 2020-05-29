export default `
  type KrakenStream {
    averageFPS: Int!
    channel: KrakenChannel
    delay: Int!
    game: String
    id: ID!
    isPlaylist: Boolean!
    startDate: ISODate!
    type: String
    videoHeight: Int!
    viewers: Int!
  }
`

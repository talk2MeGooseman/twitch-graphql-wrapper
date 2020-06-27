const typeDefs = `
  type Kraken {
    channelById(id: ID!) : KrakenChannel
    team(name: String!) : KrakenTeam
  }
`

export default typeDefs

export default `
  type KrakenTeam {
    background: String
    banner: String
    creationDate: String
    displayName: String
    id: ID
    info: String
    liveMembers: [KrakenStream]!
    logoUrl: String
    members: [KrakenUser]!
    name: String
    updateDate: String
  }
`

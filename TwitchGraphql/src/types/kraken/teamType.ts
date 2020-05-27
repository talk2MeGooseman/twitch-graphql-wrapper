export default `
  type KrakenTeam {
    background: String
    banner: String
    creationDate: String
    displayName: String
    id: ID
    info: String
    logoUrl: String
    name: String
    members: [KrakenUser]!
    updateDate: String
  }
`

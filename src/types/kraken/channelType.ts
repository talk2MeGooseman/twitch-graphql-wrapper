export default `
  type KrakenChannel {
    broadcasterLanguage: String!
    broadcasterType: String
    creationDate: ISODate!
    description: String
    displayName: String
    followers: Int
    game: String
    isMature: String
    isPartner: String
    language: String
    logo: String
    name: String
    profileBanner: String
    profileBannerBackgroundColor: String
    status: String
    teams: [KrakenTeam]!
    url: String
    videoBanner: String
    views: Int
  }
`;

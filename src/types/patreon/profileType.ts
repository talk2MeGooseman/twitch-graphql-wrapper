export default `
  type PatreonProfile {
    about: String
    campaign: PatreonCampaign
    created: ISODate
    firstName: String
    fullName: String
    id: String
    imageUrl: String
    lastName: String
    likeCount: Int
    thumbUrl: String
    url: String
    vanity: String
  }
`;

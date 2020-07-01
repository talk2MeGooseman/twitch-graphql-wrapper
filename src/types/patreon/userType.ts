export default `
  type PatreonUser {
    about: String
    campaign: PatreonCampaign
    firstName: String
    fullName: String
    id: String
    imageUrl: String
    lastName: String
    likeCount: Int
    pledges: [PatreonPledge]
    thumbUrl: String
    url: String
    vanity: String
  }
`

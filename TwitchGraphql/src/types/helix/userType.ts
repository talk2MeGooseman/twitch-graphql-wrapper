export default `
  type HelixUser {
    broadcasterType: Broadcaster
    description: String
    displayName: String
    following: [HelixFollow]!
    id: ID
    name: String
    offlineImageUrl: String
    profilePictureUrl: String
    views: Int
  }
`

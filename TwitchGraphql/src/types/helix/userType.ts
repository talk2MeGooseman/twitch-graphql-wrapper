export default `
  type HelixUser {
    broadcasterType: String
    description: String
    displayName: String
    following: [HelixFollow]!
    id: ID
    name: String
    offlineImageUrl: String
    profilePictureUrl: String
    views: Int
    currentStream: HelixStreamInfo
  }
`

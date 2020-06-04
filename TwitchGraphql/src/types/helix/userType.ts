export default `
  type HelixUser {
    broadcasterType: String
    clips: [HelixClip]
    currentStream: HelixStream
    description: String
    displayName: String
    id: ID
    isFollowingUserId(userId: ID!): Boolean
    isFollowingUserName(userName: String!): Boolean
    "Retrieves the latest broadcasters the user has followed"
    latestFollowing: [HelixFollow]!
    name: String
    offlineImageUrl: String
    profilePictureUrl: String
    views: Int
  }
`

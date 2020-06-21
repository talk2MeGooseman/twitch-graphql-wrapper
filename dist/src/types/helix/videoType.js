"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
  type HelixVideo {
    creationDate: ISODate

    "The description of the video."
    description: String

    "The duration of the video, as formatted by Twitch."
    duration: String!

    "The duration of the video, in seconds."
    durationInSeconds: Int!

    "The ID of the video."
    id: ID!

    "Whether the video is public or not."
    isPublic: Boolean

    "The language of the video."
    language: String!

    "The date when the video was published."
    publishDate: ISODate!

    "The URL of the thumbnail of the video."
    thumbnailUrl: String!

    "The title of the video."
    title: String!

    "The type of the video."
    type: String!

    "The URL of the video."
    url: String!

    "The display name of the user who created the video."
    userDisplayName: String!

    "The ID of the user who created the video."
    userId: ID!

    "The number of views of the video."
    views: Int!
  }
`;
//# sourceMappingURL=videoType.js.map
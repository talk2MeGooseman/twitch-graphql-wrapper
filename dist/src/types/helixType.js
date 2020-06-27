"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeDefs = `
  type Helix {
    usersByIds(ids: [ID!]!): [HelixUser]
    usersByNames(names: [String!]!): [HelixUser]
    streamsByIds(ids: [ID!]!): [HelixStream]!
    streamsByNames(names: [String]!): [HelixStream]!
  }
`;
exports.default = typeDefs;
//# sourceMappingURL=helixType.js.map
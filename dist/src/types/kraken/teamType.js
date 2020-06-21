"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
  type KrakenTeam {
    background: String
    banner: String
    creationDate: ISODate!
    displayName: String!
    id: ID!
    info: String
    liveStreams: [KrakenStream]!
    logoUrl: String
    members: [KrakenUser]!
    name: String!
    updateDate: ISODate!
  }
`;
//# sourceMappingURL=teamType.js.map
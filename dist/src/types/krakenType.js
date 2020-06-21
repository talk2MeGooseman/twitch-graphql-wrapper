"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeDefs = `
  type Kraken {
    channelById(id: ID!) : KrakenChannel
    team(name: String!) : KrakenTeam
  }
`;
exports.default = typeDefs;
//# sourceMappingURL=krakenType.js.map
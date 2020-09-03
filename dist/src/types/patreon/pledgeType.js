"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
  type PatreonPledge {
    id: ID
    amountCents: Int
    createdAt: String
    declinedSince: String
    pledgeCapCents: Int
    patronPaysFees: Boolean
    totalHistoricalAmountCents: Int
    isPaused: Boolean
    hasShippingAddress: Boolean
  }
`;
//# sourceMappingURL=pledgeType.js.map
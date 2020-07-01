export default `
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
`

export default `
  type PatreonMember {
    "One of active_patron, declined_patron, former_patron. A null value indicates the member has never pledged. Can be null."
    patronStatus:	String

    "The ID of the member"
    id: ID!

    "The user is not a pledging patron but has subscribed to updates about public posts."
    isFollower: Boolean

    "(UTC ISO format)	Datetime of beginning of most recent pledge chainfrom this member to the campaign. Pledge updates do not change this value. Can be null."
    pledgeRelationshipStart: String

    " The total amount that the member has ever paid to the campaign. 0 if never paid."
    lifetimeSupportCents: Int

    " The amount in cents that the member is entitled to.This includes a current pledge, or payment that covers the current payment period."
    currentlyEntitledAmountCents: Int

    " The creator's notes on the member."
    note: String

    "The Patreon User"
    user: PatreonUser
  }
`;

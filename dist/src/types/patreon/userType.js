"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
  type PatreonUser {
    "The user's about text, which appears on their profile."
    about: String

    "Combined first and last name."
    fullName: String

    id: ID

    "The user's profile picture URL, scaled to width 400px."
    imageUrl: String

    "URL of this user's creator or patron profile."
    url: String
  }
`;
//# sourceMappingURL=userType.js.map
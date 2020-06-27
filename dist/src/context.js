"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const twitch_1 = __importDefault(require("twitch"));
const twitch_2 = __importDefault(require("../credentials/twitch"));
exports.default = () => {
    if (!twitch_2.default.clientId || !twitch_2.default.clientSecret) {
        console.log("Missing TWITCH_CLIENT_ID and/or TWITCH_SECRET environment variables");
        throw new Error("Missing TWITCH_CLIENT_ID and/or TWITCH_SECRET environment variables");
    }
    if (twitch_2.default.accessToken && twitch_2.default.clientSecret) {
        return {
            twitchClient: twitch_1.default.withCredentials(twitch_2.default.clientId, twitch_2.default.accessToken, undefined, {
                clientSecret: twitch_2.default.clientSecret,
                refreshToken: twitch_2.default.refreshToken,
                onRefresh: (token) => {
                    // do things with the new token data, e.g. save them in your database
                },
            }),
        };
    }
    else {
        return {
            twitchClient: twitch_1.default.withClientCredentials(twitch_2.default.clientId, twitch_2.default.clientSecret)
        };
    }
};
//# sourceMappingURL=context.js.map
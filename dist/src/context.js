"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const twitch_1 = __importDefault(require("twitch"));
const twitch_2 = __importDefault(require("../credentials/twitch"));
const axios_1 = __importDefault(require("axios"));
exports.default = ({ accessToken, refreshToken, patreonCreds }) => {
    const context = {};
    if (!twitch_2.default.clientId || !twitch_2.default.clientSecret) {
        console.log("Missing TWITCH_CLIENT_ID and/or TWITCH_SECRET environment variables");
        throw new Error("Missing TWITCH_CLIENT_ID and/or TWITCH_SECRET environment variables");
    }
    if (accessToken && refreshToken) {
        context['twitchClient'] = twitch_1.default.withCredentials(twitch_2.default.clientId, accessToken, undefined, {
            clientSecret: twitch_2.default.clientSecret,
            refreshToken: refreshToken,
            onRefresh: (token) => {
                // do things with the new token data, e.g. save them in your database
            },
        });
    }
    else {
        context['twitchClient'] = twitch_1.default.withClientCredentials(twitch_2.default.clientId, twitch_2.default.clientSecret);
    }
    if ((patreonCreds === null || patreonCreds === void 0 ? void 0 : patreonCreds.accessToken) && (patreonCreds === null || patreonCreds === void 0 ? void 0 : patreonCreds.refreshToken)) {
        context['patreonClient'] = axios_1.default.create({
            baseURL: 'https://www.patreon.com/api/oauth2/v2/',
            timeout: 1000,
            headers: { 'Authorization': `Bearer ${patreonCreds.accessToken}` },
        });
    }
    return context;
};
//# sourceMappingURL=context.js.map
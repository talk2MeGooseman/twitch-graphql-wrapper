"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.default = {
    Query: {
        kraken() {
            return {
                channelById({ id }, context) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return yield context.twitchClient.kraken.channels.getChannel(id);
                    });
                },
                team({ name }, context) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return yield context.twitchClient.kraken.teams.getTeamByName(name);
                    });
                },
            };
        },
    },
    KrakenChannel: {
        teams(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield parent.getTeams();
            });
        },
    },
    KrakenTeam: {
        liveStreams(parent, _args, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const users = yield parent.getUsers();
                const userIds = users.map((user) => user.id);
                const streams = Promise.all(lodash_1.chunk(userIds, 75).map((userIdsChunk) => __awaiter(this, void 0, void 0, function* () {
                    return yield context.twitchClient.kraken.streams.getStreams(userIdsChunk, undefined, undefined, undefined, undefined, 100);
                })));
                return streams.then(lodash_1.flatten);
            });
        },
        members(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield parent.getUsers();
            });
        },
    },
    KrakenUser: {
        currentStream(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield parent.getStream();
            });
        },
    },
    KrakenStream: {
        channel(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                return parent.channel;
            });
        },
    },
};
//# sourceMappingURL=rootResolver.js.map
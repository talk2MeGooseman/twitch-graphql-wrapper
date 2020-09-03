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
const twitch_1 = require("twitch");
exports.default = {
    Query: {
        helix() {
            return {
                me(_args, context) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return yield context.twitchClient.helix.users.getMe();
                    });
                },
                streamsByIds(args, context) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const streamsPaginator = context.twitchClient.helix.streams.getStreamsPaginated({ userId: args.ids, type: twitch_1.HelixStreamType.Live });
                        return yield streamsPaginator.getAll();
                    });
                },
                streamsByNames(args, context) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const streamsPaginator = context.twitchClient.helix.streams.getStreamsPaginated({ userName: args.names, type: twitch_1.HelixStreamType.Live });
                        return yield streamsPaginator.getAll();
                    });
                },
                usersByIds(args, context) {
                    return __awaiter(this, void 0, void 0, function* () {
                        let users = yield context.twitchClient.helix.users.getUsersByIds(args.ids);
                        return users;
                    });
                },
                usersByNames(args, context) {
                    return __awaiter(this, void 0, void 0, function* () {
                        let users = yield context.twitchClient.helix.users.getUsersByNames(args.names);
                        return users;
                    });
                },
            };
        },
    },
};
//# sourceMappingURL=rootResolver.js.map
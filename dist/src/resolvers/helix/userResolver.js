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
exports.default = {
    HelixUser: {
        latestFollowing(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                const { data } = yield parent.getFollows();
                return data.map((follow) => ({
                    id: follow.followedUserId,
                    displayName: follow.followedUserDisplayName,
                    date: follow.followDate,
                }));
            });
        },
        currentStream(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield parent.getStream();
            });
        },
        clips(parent, _args, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const { data: clips } = yield context.twitchClient.helix.clips.getClipsForBroadcaster(parent.id);
                return clips;
            });
        },
        isFollowingUserId(parent, args, context) {
            return __awaiter(this, void 0, void 0, function* () {
                if (args.userId.length === 0)
                    return false;
                return yield parent.follows(args.userId);
            });
        },
        isFollowingUserName(parent, args, context) {
            return __awaiter(this, void 0, void 0, function* () {
                if (args.userName.length === 0)
                    return false;
                const user = yield context.twitchClient.helix.users.getUserByName(args.userName);
                return yield parent.follows(user.id);
            });
        },
        subscribers(parent, _args, context) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield context.twitchClient.helix.subscriptions.getSubscriptionsPaginated(parent.id).getAll();
            });
        },
        videos(parent, args, context) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield context.twitchClient.helix.videos.getVideosByUserPaginated(parent).getAll();
            });
        },
    },
};
//# sourceMappingURL=userResolver.js.map
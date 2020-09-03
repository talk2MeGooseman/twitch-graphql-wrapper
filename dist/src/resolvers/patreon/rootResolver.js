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
    Query: {
        patreon() {
            return {
                patrons(_, context) {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const result = yield context.patreonClient.get('campaigns/4776554/members?include=user,currently_entitled_tiers,address&fields%5Bmember%5D=full_name,is_follower,last_charge_date,last_charge_status,lifetime_support_cents,currently_entitled_amount_cents,patron_status&fields%5Btier%5D=amount_cents,created_at,description,patron_count,title,url&fields%5Buser%5D=full_name,about,image_url,url');
                            const { data: members, included } = result.data;
                            return members.map((member) => {
                                const userId = member.relationships.user.data.id;
                                const user = included.reduce((accum, include) => {
                                    if (include.type === 'user' && include.id === userId) {
                                        return Object.assign({ id: include.id }, include.attributes);
                                    }
                                    return accum;
                                }, undefined);
                                return Object.assign(Object.assign({ id: member.id }, member.attributes), { user });
                            });
                        }
                        catch (error) {
                            throw new Error(error.message);
                        }
                    });
                },
                me(_, context) {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const result = yield context.patreonClient.get('identity?include=campaign&fields%5Buser%5D=about,created,email,first_name,full_name,image_url,last_name,thumb_url,url,vanity&fields%5Bcampaign%5D=summary,url,patron_count,creation_name');
                            const { data: user } = result.data;
                            return Object.assign({}, user.attributes);
                        }
                        catch (error) {
                            throw new Error(error.message);
                        }
                    });
                }
            };
        },
    },
};
1;
//# sourceMappingURL=rootResolver.js.map
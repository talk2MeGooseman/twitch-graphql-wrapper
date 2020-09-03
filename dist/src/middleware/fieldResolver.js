"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeCaseFieldResolver = void 0;
const lodash_1 = __importDefault(require("lodash"));
function isObjectLike(value) {
    return typeof value == 'object' && value !== null;
}
exports.snakeCaseFieldResolver = (source, args, contextValue, info) => {
    const snakeCaseFieldName = lodash_1.default.snakeCase(info.fieldName);
    // ensure source is a value for which property access is acceptable.
    if (isObjectLike(source) || typeof source === 'function') {
        const property = source[info.fieldName] || source[snakeCaseFieldName];
        if (typeof property === 'function') {
            return property(args, contextValue, info);
        }
        return property;
    }
};
//# sourceMappingURL=fieldResolver.js.map
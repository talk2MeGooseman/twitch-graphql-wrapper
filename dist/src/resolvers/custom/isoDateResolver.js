"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
exports.default = {
    ISODate: new graphql_1.GraphQLScalarType({
        name: 'ISODate',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value); // value from the client
        },
        serialize(value) {
            return value.toISOString(); // value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind === language_1.Kind.INT) {
                return new Date(+ast.value); // ast value is always in string format
            }
            return null;
        },
    }),
};
//# sourceMappingURL=isoDateResolver.js.map
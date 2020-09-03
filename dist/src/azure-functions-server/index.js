"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_azure_functions_1 = require("apollo-server-azure-functions");
const schema_1 = __importDefault(require("../schema"));
const graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
const context_1 = __importDefault(require("../context"));
const fieldResolver_1 = require("../middleware/fieldResolver");
const server = new apollo_server_azure_functions_1.ApolloServer({
    schema: schema_1.default,
    validationRules: [graphql_depth_limit_1.default(7)],
    context: context_1.default,
    fieldResolver: fieldResolver_1.snakeCaseFieldResolver,
    engine: {
        reportSchema: true,
    },
});
exports.graphqlHandler = server.createHandler();
//# sourceMappingURL=index.js.map
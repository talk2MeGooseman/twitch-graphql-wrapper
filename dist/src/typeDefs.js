"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const path_1 = __importDefault(require("path"));
const typesArray = graphql_tools_1.loadFilesSync(path_1.default.join(__dirname, './types'), { recursive: true });
const typeDefs = graphql_tools_1.mergeTypeDefs(typesArray);
exports.default = typeDefs;
//# sourceMappingURL=typeDefs.js.map